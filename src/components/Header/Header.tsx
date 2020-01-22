import React, { FunctionComponent } from "react";
import ReactSVG from "react-svg";
import { NavLink } from "react-router-dom";

import Cookies from "../Cookies";
import Logo from "../../assets/logo/logo_colour.svg";
import HVN from "../../assets/logo/hvn-square.png";
import Question from "../../assets/icons/question-circle.svg";
import Pencil from "../../assets/icons/pencil.svg";

import Account from "../../assets/icons/account-light.svg";

import "./Header.scss";

const Header: FunctionComponent = () => (
  <header>
    <Cookies />
    <div className="flex-container flex-container--no-padding flex-container--center header">
      <div className="flex-col--12 header--logo-container">
        <NavLink
          to="/"
          className="header--link"
          activeClassName="header--link--active"
        >
          <img
            src={HVN}
            className="header--logo--square"
            alt="Hearing Voices Network logo"
          />
          <ReactSVG src={Logo} className="header--logo" wrapper="span" />
        </NavLink>
      </div>

      <div className="flex-container flex-container--no-padding header--links header--links--main">
        <NavLink
          className="header--link"
          to="/about"
          activeClassName="header--link--active"
        >
          About this project
          <ReactSVG src={Question} wrapper="span" className="header--icon" />
        </NavLink>
        <NavLink
          className="header--link"
          to="/contribute"
          activeClassName="header--link--active"
        >
          Contribute
          <ReactSVG src={Pencil} wrapper="span" className="header--icon" />
        </NavLink>
        <NavLink
          className="header--link header--link--login"
          to="/login"
          activeClassName="header--link--active"
        >
          Login
          <ReactSVG src={Account} wrapper="span" className="header--icon" />
        </NavLink>
      </div>
    </div>
  </header>
);

export default Header;
