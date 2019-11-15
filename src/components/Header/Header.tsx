import React, { FunctionComponent } from "react";
import ReactSVG from "react-svg";
import { Link } from "react-router-dom";

import Cookies from "../Cookies";
import Logo from "../../assets/logo/logo_colour.svg";
import HVN from "../../assets/logo/hvn-square.png";
import Question from "../../assets/icons/question-circle.svg";
import Pencil from "../../assets/icons/pencil.svg";

import "./Header.scss";

const Header: FunctionComponent = () => (
  <header>
    <Cookies />
    <div className="flex-container flex-container--no-padding flex-container--center header">
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

      <div className="flex-container flex-container--no-padding header--links">
        <Link className="header--link" to="/about">
          About this project
          <ReactSVG src={Question} wrapper="span" className="header--icon" />
        </Link>
        <span>
          <Link className="header--link" to="/contribute">
            Contribute
            <ReactSVG src={Pencil} wrapper="span" className="header--icon" />
          </Link>
        </span>
      </div>
    </div>
  </header>
);

export default Header;
