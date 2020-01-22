import React, { FunctionComponent } from "react";
import ReactSVG from "react-svg";
import {
  Link,
  withRouter,
  RouteComponentProps,
  NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer, inject } from "mobx-react";

import Cookies from "../Cookies";
import Logo from "../../assets/logo/logo_white.svg";
import HVN from "../../assets/logo/hvn-square.png";
import Question from "../../assets/icons/question-circle-light.svg";
import Account from "../../assets/icons/account-light.svg";
import Dashboard from "../../assets/icons/dashboard-light.svg";
import MainSite from "../../assets/icons/mainsite-icon-light.svg";

import "./Header.scss";
import UserStore from "../../stores/userStore";

interface IProps extends RouteComponentProps {
  userStore?: UserStore;
}

const UserHeader: FunctionComponent<IProps> = ({
  userStore,
  match,
  history
}) => {
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
            <div className="flex-container flex-container--no-padding flex-container--left header--links">
              <span className="user-header--link">
                <NavLink
                  className="header--link user-header--link"
                  to="/about"
                  activeClassName="header--link--active"
                >
                  About
                  <ReactSVG
                    src={Question}
                    wrapper="span"
                    className="header--icon"
                  />
                </NavLink>
              </span>

              <span className="user-header--link">
                <NavLink
                  className="header--link user-header--link"
                  to="/"
                  exact={true}
                  activeClassName="header--link--active"
                >
                  Main site
                  <ReactSVG
                    src={MainSite}
                    wrapper="span"
                    className="header--icon"
                  />
                </NavLink>
              </span>
            </div>
            <div
              className="flex-container flex-container--no-padding flex-container--left header--links"
              style={{
                marginTop: "1rem"
              }}
            >
              <span className="user-header--link">
                <NavLink
                  className="header--link"
                  to="/dashboard"
                  activeClassName="header--link--active"
                >
                  Dashboard
                  <ReactSVG
                    src={Dashboard}
                    wrapper="span"
                    className="header--icon"
                  />
                </NavLink>
              </span>
              <span className="user-header--link">
                <NavLink
                  className="header--link"
                  to="/account"
                  activeClassName="header--link--active"
                >
                  My account
                  <ReactSVG
                    src={Account}
                    wrapper="span"
                    className="header--icon"
                  />
                </NavLink>
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
              <NavLink
                className="header--link user-header--link"
                to={match.path === "/dashboard" ? "/" : "/dashboard"}
                activeClassName="header--link--active"
              >
                {`Go back to ${
                  match.path === "/dashboard"
                    ? "Connecting Voices"
                    : "dashboard"
                }`}
              </NavLink>
            </span>
            <span className="user-header--link">
              <NavLink
                className="header--link user-header--link"
                activeClassName="header--link--active"
                to="/browse"
              >
                View other's stories
              </NavLink>
            </span>
            <span className="user-header--link">
              <NavLink
                className="header--link"
                activeClassName="header--link--active"
                to="/account"
              >
                My account
              </NavLink>
            </span>
            <span className="user-header--link">
              <button
                className="header--link"
                onClick={() => {
                  userStore.logOut();
                  history.push("/");
                }}
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

export default inject("userStore")(withRouter(observer(UserHeader)));
