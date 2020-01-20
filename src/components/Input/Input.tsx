import React, { FunctionComponent, ChangeEvent } from "react";
import "./Input.scss";

interface IProps {
  label: string;
  id: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input: FunctionComponent<IProps> = ({
  label,
  id,
  placeholder = "",
  onChange,
  type = "text"
}) => (
  <div className="input--container">
    <label className="label" htmlFor={id}>
      {label}
    </label>
    <input
      className="input"
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      id={id}
    />
  </div>
);

export default Input;
