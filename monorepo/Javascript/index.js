document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const selectedValuesSection = document.getElementById("selectedValues");

    document.body.addEventListener("click", function (event) {
        if (event.target.id === "shuffleButton") {
            shuffleCheckboxes();
        } else if (event.target.id === "changeButton") {
            changeCheckboxValues();
        } else if (event.target.id === "showSelectedButton") {
            showSelectedValues();
        }
    });

    function shuffleCheckboxes() {
        const container = document.getElementById('checkboxContainer');
        const labels = [
            document.getElementById('checkbox-values')
        ];

        for (let i = labels.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = labels[i];
            labels[i] = labels[j];
            labels[j] = temp;
        }

        labels.forEach(label => {
            container.appendChild(label);
        });
    }

    function changeCheckboxValues() {
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const label = checkbox.nextElementSibling;
                label.textContent = "New Role";
                checkbox.value = "New Role";
            }
        });
    }


    function showSelectedValues() {
        const selectedValues = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
            if (selectedValues.length > 0) {
                selectedValuesSection.textContent = `Selected Values: ${selectedValues.join(", ")}`;
            } else {
                selectedValuesSection.textContent = "Selected Values: None";
            }
        
    }
});