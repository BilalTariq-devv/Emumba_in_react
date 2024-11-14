import React from 'react';
import "../Button/button.scss";

function Button({ onClick, type = 'button', children, color }) {
  return (
    
      <button className="contact-button" onClick={onClick} type={type}>
        {children}
      </button>

    
  );

}

export default Button;
