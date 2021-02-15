import React from 'react';
import './alert-styles.css';


function Alert_popup(){
  return(
    <div className="alert alert-sucess" role="alert">
      <h4>Atenção!</h4>
      <p>O registro não pôde ser salvo pois há um mesmo registro com estes dados</p>
      <p className="mb-0">Revise os dados e tente novamente.</p>
    </div>
  );
}

export default Alert_popup;