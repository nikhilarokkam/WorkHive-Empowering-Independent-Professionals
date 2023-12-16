import React from 'react';
import "./TrustedBy.scss";

const TrustedBy = () =>{
    return(
        <div className='trustedBy'>
            <div className="container">
            <span>Trusted by:</span>
            <img 
            src="https://www.freepnglogos.com/uploads/microsoft-logo-4.png" style={{height:80}}
            alt=""
            />
            <img 
            src="https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png" 
            alt="" 
            />
            <img 
            src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" 
            alt="" 
            />
            <img 
            src="https://e7.pngegg.com/pngimages/956/344/png-clipart-procter-gamble-nyse-pg-company-p-g-philippines-others-blue-company.png" 
            alt="" 
            />
            <img 
            src="https://pngimg.com/uploads/paypal/paypal_PNG9.png" 
            alt="" 
            />
            </div>
            </div>
    );
}

export default TrustedBy;