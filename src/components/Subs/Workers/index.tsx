import React from 'react';
import InputForms from '../../Input-forms';
import './workers-styles.css';

function Workers(){
 return (
   <div id="page-workers">
       <div className="card-workers-row">
         <h2 id="title">Colaboradores</h2>
       </div>

       <div id="table-content">
         <form>
          <InputForms
            name = "codWorker"
            label = "Código"
            typeInput = "text"
            InputWidth= '4rem'
          />
          
          <InputForms
            name = "nameWorker"
            label = "Nome"
            typeInput = "text"
            InputWidth= '30rem'
          />
          
          <InputForms
            name = "bornDate"
            label = "Data Nascimento"
            typeInput = "date"
          />
          
          <InputForms
            name = "emailWorker"
            label = "e-mail"
            typeInput = "text"
            InputWidth= '13rem'
          />

          <InputForms
            name = "phoneWorker"
            label = "Telefone"
            typeInput = "text"
          />
         </form>
       </div>
   </div>
 ); 
}

export default Workers;