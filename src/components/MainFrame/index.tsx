import React from 'react';
import Workers from '../Subs/Workers';
import './mainframe-styles.css';

function MainFrame(){
 return (
   <div id="page-frame">     
     <section className="frame-content">
       <br/>
       <Workers />
     </section>
   </div>
 
 ); 
}

export default MainFrame;