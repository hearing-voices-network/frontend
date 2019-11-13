import React, { FunctionComponent } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Checkbox.scss";

interface IProps {
  label: string;
  id: string;
  onChange?: () => void;
  checked: boolean;
  className?: string;
  aria?: string;
}

const Checkbox: FunctionComponent<IProps> = ({
  id,
  checked,
  onChange,
  aria,
  label
}) => (
  <div className="checkbox">
    <input
      type="checkbox"
      id={id}
      name={id}
      checked={checked}
      onChange={onChange}
      aria-label={aria}
    />
    <label htmlFor={id}>
      <span>
        <span>
          <FontAwesomeIcon icon="check" />
        </span>
      </span>
      {label}
    </label>
  </div>
);

export default Checkbox;
