import React, { InputHTMLAttributes } from 'react'
import { Link } from 'react-router-dom';
import './button-styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label: string;
  destiny?: string;
  action?: any;
};

const Button: React.FC<InputProps> = ({ label, name, destiny}) => {
  return(
    <div >
      <Link to={`${destiny}`} className="btn-globals">{label}</Link>
    </div>
  );
}

export default Button;