import React,{InputHTMLAttributes} from 'react';
import './input-forms-styles.css';

interface InputFormsProps extends InputHTMLAttributes<HTMLInputElement>{
  name?: string;
  label?: string;
  typeInput?: string;
};

const InputForms: React.FC<InputFormsProps> = ({label, name, typeInput}) => {
  return(
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type={typeInput} id={name}/>
    </div>
  );
}
 
export default InputForms;