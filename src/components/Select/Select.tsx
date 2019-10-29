import React, { ChangeEvent, FunctionComponent } from "react";

import "./Select.scss";

interface IOption {
  value: string;
  text: string;
}

interface IProps {
  options: IOption[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  placeholder: string;
  id: string;
  disabled?: boolean;
}

const Select: FunctionComponent<IProps> = ({
  options,
  onChange,
  className,
  placeholder,
  id,
  disabled
}) => (
  <div className="select--wrapper">
    <select
      onChange={onChange}
      id={id}
      defaultValue={placeholder}
      disabled={disabled}
    >
      <option value={placeholder} disabled={true} hidden={true}>
        {placeholder}
      </option>
      {options.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
