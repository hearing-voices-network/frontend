import React, { FunctionComponent, useState, useEffect } from "react";

import "./PrivacyButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";

interface IProps {
  text: string;
  onChange: (privacy: "public" | "private") => void;
}

const PrivacyButton: FunctionComponent<IProps> = ({ text, onChange }) => {
  const [open, toggleMenu] = useState(false);
  const [privacy, changePrivacy] = useState(false);

  useEffect(() => {
    text === "public" ? changePrivacy(false) : changePrivacy(true);
  }, [text]);

  return (
    <div>
      <button
        onClick={() => toggleMenu(!open)}
        className={cx("privacy-button", {
          "privacy-button--open": open
        })}
      >
        <span className={cx({ "privacy-button--open--title": open })}>
          {privacy ? "private" : "public"}
          <FontAwesomeIcon
            className="privacy-button--icon"
            icon="chevron-down"
          />
        </span>
        {open && (
          <div className="privacy-button--dropdown">
            <span
              role="button"
              onClick={() => {
                changePrivacy(!privacy);
                onChange(privacy ? "public" : "private");
              }}
              onKeyDown={e =>
                e.key === "Enter" ? changePrivacy(!privacy) : null
              }
              tabIndex={0}
            >
              {privacy ? "public" : "private"}
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default PrivacyButton;
