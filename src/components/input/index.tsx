import React, { InputHTMLAttributes } from "react";
import './input-styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  tipo: string;
};

const Input: React.FC<InputProps> = ({ label, name, tipo, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type={tipo} id={name} {...rest} />
    </div>
  );
}

export default Input;