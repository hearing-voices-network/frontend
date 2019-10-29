import React from "react";

import "./PatternLibrary.scss";

const PatternLibrary = () => (
  <div className="flex-container flex-container--no-padding">
    <div className="flex-col--12">
      <h1 className="heading--xl">Welcome</h1>
      <p className="description">XL Heading</p>

      <h1 className="title--alt">Welcome</h1>
      <p className="description">Alt title</p>

      <h2 className="heading--l">Read other peoples experiences</h2>
      <p className="description">L Heading</p>

      <h3 className="heading--m">Contact us</h3>
      <p className="description">M Heading</p>

      <h4 className="heading--s">Email us at</h4>
      <p className="description">S Heading</p>

      <h5 className="heading--xs">Read whole story</h5>
      <p className="description">XS Heading</p>

      <p className="body--l">
        Collecting first-person accounts of voices, from people who hear voices.
        This is a place where you can explore and share…
      </p>
      <p className="description">L Body</p>

      <p className="body--m">info@hearing-voices.org</p>
      <p className="description">M Body</p>

      <p className="body--m-alt">About this project</p>
      <p className="description">M Body (Alt)</p>

      <p className="body--s">Created by Hearing Voices Network England</p>
      <p className="description">S Body</p>

      <p className="body--s-alt">
        Signing up is secure and how much you share is up to you, you can
        always…
      </p>
      <p className="description">S Body (Alt)</p>

      <p className="body--xs">
        Signing up is secure and how much you share is up to you, you can
        always…
      </p>
      <p className="description">XS Body</p>

      <p className="story">
        I was terrorized by three male voices who talked about me, narrating my
        movements and…
      </p>
      <p className="description">Story</p>
    </div>
  </div>
);

export default PatternLibrary;
