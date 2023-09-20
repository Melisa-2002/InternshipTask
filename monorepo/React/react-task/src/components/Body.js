import React from 'react';
import { RightArrow } from '../svg/svg';
import Dermal from '../images/dermal.jpg';
import Consultation from '../images/consultation.jpeg';
import HairGrowth from '../images/hairGrowth.jpeg';
import Product from '../images/product.jpeg';
import Wrinkle from '../images/wrinkle.jpeg';
import Facials from '../images/facial.jpeg';
import Secret_RF from '../images/secret_rf.jpeg';
import Dissolve from '../images/dissolve.jpeg';
import Prophilo from '../images/prophilo.jpeg';
import Harmony from '../images/harmony.jpeg';

const options = [
    { id: 1, name: 'Anti Wrinkle Treatment', image: Wrinkle },
    { id: 2, name: 'Dermal Fillers', image: Dermal },
    { id: 3, name: 'Consultation', image: Consultation },
    { id: 4, name: 'Fat Dissolve', image: Dissolve },
    { id: 5, name: 'Secret RF', image: Secret_RF },
    { id: 6, name: 'Facials', image: Facials },
    { id: 7, name: 'HArmonyCA', image: Harmony },
    { id: 8, name: 'Special Package for Time clinic', image: Product },
    { id: 9, name: 'Growth Factors', image: HairGrowth },
    { id: 10, name: 'Prophilo', image: Prophilo },
];


const Body = ({onSelectOption}) => {
  return (
    <div className="body">
        <div className="box-section">
            {options.map(option => (
                <div
                    key={option.id}
                    className="optionlist-body"
                    onClick={() => onSelectOption(option)}  
                >
                    <div className="optionlist-body-info">
                        <img src={option.image} className="option-image" alt={option.name} />
                        {option.name}
                    </div>
                    <RightArrow />
                </div>
            ))}
        </div>
        <div className="box-section-card">
            <p>Not sure about consultation type? Please, call <span className="phone-number">0203 7959063</span></p>
        </div>
    </div>
  )
}

export default Body;
