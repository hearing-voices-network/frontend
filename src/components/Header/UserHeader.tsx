import React, { FunctionComponent } from "react";
import ReactSVG from "react-svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer, inject } from "mobx-react";

import Cookies from "../Cookies";
import Logo from "../../assets/logo/logo_white.svg";
import HVN from "../../assets/logo/hvn-square.png";
import Question from "../../assets/icons/question-circle-light.svg";
import Account from "../../assets/icons/account-light.svg";
import Dashboard from "../../assets/icons/dashboard-light.svg";

import "./Header.scss";
import UserStore from "../../stores/userStore";

interface IProps {
  userStore?: UserStore;
}

const UserHeader: FunctionComponent<IProps> = ({ userStore }) => {
  if (!userStore) return null;

  return (
    <header>
      <Cookies />
      <div className="user-header">
        <div className="flex-container flex-container--no-padding flex-container--center">
          <div className="flex-col--12 header--logo-container">
            <Link to="/" className="header--link">
              <img
                src={HVN}
                className="header--logo--square"
                alt="Hearing Voices Network logo"
              />
              <ReactSVG src={Logo} className="header--logo" wrapper="span" />
            </Link>
          </div>

          {/* Mobile Links  */}
          <div className="mobile-show header--links--outer">
            <div className="flex-container flex-container--no-padding header--links">
              <span className="user-header--link">
                <Link className="header--link user-header--link" to="/about">
                  About
                  <ReactSVG
                    src={Question}
                    wrapper="span"
                    className="header--icon"
                  />
                </Link>
              </span>
              <span className="user-header--link">
                <Link className="header--link" to="/dashboard">
                  Dashboard
                  <ReactSVG
                    src={Dashboard}
                    wrapper="span"
                    className="header--icon"
                  />
                </Link>
              </span>
              <span className="user-header--link">
                <Link className="header--link" to="/account">
                  My account
                  <ReactSVG
                    src={Account}
                    wrapper="span"
                    className="header--icon"
                  />
                </Link>
              </span>
            </div>
          </div>

          {/* Desktop Links */}

          <div className="flex-container flex-container--no-padding header--links mobile-hide">
            <span className="user-header--link">
              <FontAwesomeIcon
                icon="chevron-left"
                className="user-header--chevron"
              />
              <Link className="header--link user-header--link" to="/">
                Go back to Connecting Voices
              </Link>
            </span>
            <span className="user-header--link">
              <Link className="header--link user-header--link" to="/browse">
                View other's stories
              </Link>
            </span>
            <span className="user-header--link">
              <Link className="header--link" to="/account">
                My account
              </Link>
            </span>
            <span className="user-header--link">
              <button
                className="header--link"
                onClick={() => userStore.logOut()}
              >
                Log out
              </button>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default inject("userStore")(observer(UserHeader));
