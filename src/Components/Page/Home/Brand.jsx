import React from "react";
import emiratesLogo from '../../../Assets/logo1.png';
import trivagoLogo  from '../../../Assets/logo2.png';
import airbnbLogo  from '../../../Assets/logo3.png';
import turkishAirlinesLogo  from '../../../Assets/logo4.png';
import swissLogo  from '../../../Assets/logo5.png';
import "./brand.scss";

const logoBrands = () =>{
    return(
        <div className="Logo">
             <img src={emiratesLogo} alt="Emirates" />
             <img src={trivagoLogo} alt="Trivago" />
             <img src={airbnbLogo} alt="Airbnb" />
             <img src={turkishAirlinesLogo} alt="Turkish Airlines" />
             <img src={swissLogo} alt="Swiss" />
        </div>
    );
}

export default logoBrands;