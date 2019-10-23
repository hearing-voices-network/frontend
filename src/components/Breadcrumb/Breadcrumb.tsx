import React, { FunctionComponent, Fragment } from "react";

import "./Breadcrumb.scss";

interface ICrumb {
  text: string;
  url: string;
}

interface IProps {
  crumbs: ICrumb[];
}

const Breadcrumb: FunctionComponent<IProps> = ({ crumbs }) => (
  <div className="flex-container flex-container--no-padding">
    <ul className="breadcrumb">
      {crumbs.map((crumb: ICrumb, i: number) => (
        <div key={crumb.text} className="breadcrumb--crumb">
          {crumb.url ? (
            <a href={crumb.url}>
              <li>{crumb.text}</li>
            </a>
          ) : (
            <li className="breadcrumb--crumb--active">{crumb.text}</li>
          )}
          {i !== crumbs.length - 1 && (
            <p className="breadcrumb--icon">&#8250;</p>
          )}
        </div>
      ))}
    </ul>
  </div>
);

export default Breadcrumb;
