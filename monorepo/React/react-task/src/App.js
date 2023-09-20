import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const [step, setStep] = useState('1/2');
  const [selectedOption, setSelectedOption] = useState(null);

  const onSelectOption = (option) => {
    setSelectedOption(option);
    setStep('2/2');
  };

  const goBackButton = () => {
    setSelectedOption(null);
    setStep('1/2');
  };
  return (
    <div className="App">
      <Header step={step}/>
      <br/>
      {selectedOption ? (
        <div className="option-detail">
          <div className="option-detail-box">
            <div className="option-detail-option">
              <div className="option-detail-image">
                <img src={selectedOption.image} className="option-description-image" alt={selectedOption.name} />
              </div>
              <p>{selectedOption.name}</p>
            </div>
            <button className="back-button" onClick={goBackButton}>Back</button>
          </div>
          
        </div>
      ) : (
        <Body onSelectOption={onSelectOption} />
      )}
      <br/>
      <Footer />
    </div>
  );
}

export default App;
