import React,{ClassAttributes, CSSProperties, InputHTMLAttributes} from 'react';
import { TypeElement } from 'typescript';
import './input-forms-styles.css';

interface InputFormsProps extends InputHTMLAttributes<HTMLInputElement>{
  name?: string;
  label?: string;
  typeInput?: string;
  InputWidth?: string;
};

const InputForms: React.FC<InputFormsProps> = ({label, name, typeInput, InputWidth}) => {
  const style = {
    width: `${InputWidth}`
  };
  
  return(
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type={typeInput} id={name} style={style}/>
    </div>
  );
}
 
export default InputForms;