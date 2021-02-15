import React from 'react';
import Button from "../button"
import "./sidebar-styles.css"


function Sidebar(){
  return(
    <div>
       <aside id="sidebar">
         <div id="header">
           <h3>SmartSheet Payment</h3>
         </div>
         <br />
         <div className="content">
            <Button 
            label="Cadastros"
            destiny="dashboard/"
            />
            <br />
            <Button 
            label="Tabelas"
            />
            <br />
            <Button 
              label="Movimento"
            />
            <br />
            <Button 
              label="Ponto"
            />
            <br />
            <Button 
              label="Relatórios"
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Button 
              label="Sair"
              destiny="/"
            />
            <br />
         </div>
       </aside>
    </div>
  );
}

export default Sidebar;