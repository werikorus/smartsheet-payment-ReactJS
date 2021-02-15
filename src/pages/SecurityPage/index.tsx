import React from "react";
import sideImg from '../../assets/images/side-img.jpg';
import Button from "../../components/button";
import './landing-styles.css';
import InputForms from "../../components/Input-forms";

function Landing(){
  return(
    <div id="page-content">
      <section>
        <div className="login-rectangle">
            <div id="image-rec">  
              <img src={sideImg} alt="side-img"/>
            </div>
            <div id="login-content"> 
              <h1> Smart Sheet</h1>
              <h5>Payment</h5>
                <br/>
                <InputForms
                  name='login'
                  label='Login'
                />
                <InputForms
                  name='Senha'
                  label='Senha'
                  type='password'
                />
                <a href="#" id="forget-password">Esqueci minha senha</a>
                <br/>
                <Button
                label='Entrar'
                destiny='/dashboard'
                />
           </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;