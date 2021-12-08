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
            destiny="Cadastros/"
            />
            <br />
            <Button 
            label="Tabelas"
            destiny="tabelass"
            />
            <br />
            <Button 
              label="Movimento"
              destiny="movimento"
            />
            <br />
            <Button 
              label="Ponto"
              destiny="registro-ponto"
            />
            <br />
            <Button 
              label="Relatórios"
              destiny="relatorioss"
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