import React, { FunctionComponent } from "react";

import "./Input.scss";

interface IProps {
  label: string;
  id: string;
  placeholder?: string;
}

const Input: FunctionComponent<IProps> = ({ label, id, placeholder = "" }) => (
  <div className="input--container">
    <label className="label" htmlFor={id}>
      {label}
    </label>
    <input className="input" placeholder={placeholder} />
  </div>
);

export default Input;
