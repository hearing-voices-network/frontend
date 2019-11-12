import React, { FunctionComponent } from "react";

import "./NavigationBlock.scss";

interface IProps {
  leftButton: JSX.Element;
  leftTitle: string;
  rightButton: JSX.Element;
  rightTitle: string;
  leftDescription: string;
  rightDescription: string;
}

const NavigationBlock: FunctionComponent<IProps> = ({
  leftTitle,
  rightTitle,
  leftButton,
  rightButton,
  leftDescription,
  rightDescription
}) => (
  <div className="flex-container flex-container--center flex-container--no-padding mobile-hide navigation-block">
    <div className="flex-col--6 navigation-block__column">
      <div className="flex-container flex-container--justify flex-container--center">
        <div className="flex-col--12">
          <h2 className="navigation-block__column--title--purple">
            {leftTitle}
          </h2>
          {leftButton}
          <p className="navigation-block__column--disclaimer">
            {leftDescription}
          </p>
        </div>
      </div>
    </div>
    <div className="flex-col--6 navigation-block__column">
      <div className="flex-container flex-container--justify flex-container--center">
        <div className="flex-col--12">
          <h2 className="navigation-block__column--title">{rightTitle}</h2>
          {rightButton}
          <p className="navigation-block__column--disclaimer">
            {rightDescription}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default NavigationBlock;
