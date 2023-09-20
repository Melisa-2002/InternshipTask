declare enum Domain {
    Web = "Web",
    Connect = "Connect",
    Backend = "Backend"
}

interface Intern {
    name: string;
    age: number;
    skills: string[];
}

interface Junior {
    name: string;
    age: number;
    skills: string[];
    date_of_promotion: string;
    domain: Domain;
}

export interface Company {
    Interns: Intern[];
    Juniors: Junior[];
    Country: string;
}
