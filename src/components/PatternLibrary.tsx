import React from "react";

import "./PatternLibrary.scss";
import Accordian from "./Accordian";
import AboutAccordian from "./AboutAccordian";
import Breadcrumb from "./Breadcrumb";
import PaginationControl from "./Pagination";
import Button from "./Button";
import ReviewButton from "./ReviewButton";
import PrivacyButton from "./PrivacyButton";
import Link from "./Link";
import Tag from "./Tag";
import Select from "./Select";

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

    <div className="section flex-col--12">
      <Accordian
        title="11 Jan 2019"
        green={true}
        subtitle="1 private, 1 in public"
      >
        <p>Accordian content</p>
      </Accordian>
    </div>
    <div className="section flex-col--12">
      <Accordian title="28 Dec 2018">
        <p>Accordian content</p>
      </Accordian>
    </div>

    <div className="section flex-col--12">
      <AboutAccordian text="Collecting first-person accounts of voices, from people who hear voices. This is a place where you can explore and share your experiences anonymously."></AboutAccordian>
    </div>
    <div className="section flex-col--12">
      <Breadcrumb
        crumbs={[
          { text: "Home", url: "/" },
          { text: "Experiences", url: "/" },
          { text: "Selected Experience", url: "" }
        ]}
      />
    </div>
    <div className="section flex-col--12">
      <PaginationControl totalItems={20} itemsPerPage={5} currentPage={1} />
    </div>

    <div className="section flex-col--12">
      <Button text="Browse experiences" onClick={() => console.log("Click!")} />
    </div>
    <div className="section flex-col--12">
      <Button
        text="Browse experiences"
        onClick={() => console.log("Click!")}
        disabled={true}
      />
      <div className="section flex-col--12">
        <Button
          twoCol={true}
          text="Sign up and share"
          onClick={() => console.log("Click!")}
        />
      </div>
      <div className="section flex-col--12">
        <Button
          text="New story"
          small={true}
          onClick={() => console.log("Click!")}
        />
      </div>
      <div className="section flex-col--12">
        <Button
          text="Filter by"
          filter={true}
          onClick={() => console.log("Click!")}
        />
      </div>
    </div>
    <div className="section flex-col--12">
      <ReviewButton text="in review" onClick={() => console.log("Click!")} />
    </div>
    <div className="section flex-col--12">
      <PrivacyButton text="Private" />
    </div>
    <div className="section flex-col--12">
      <Link href="/" text="View other's stories" size="large" />
      <Link href="/" text="View other's stories" size="medium" />
      <Link href="/" text="info@hearing-voices.org" size="small" />
      <Link href="/" text="Privacy policy" size="small" grey={true} />
    </div>
    <div className="section flex-col--12">
      <Tag text="Talking" />
    </div>
    <div className="section flex-col--12">
      <Tag text="Can't say" search={true} />
    </div>
    <div className="section flex-col--12">
      <Tag text="Male" story={true} />
    </div>
    <div className="section flex-col--12">
      <Select
        options={[
          { value: "1", text: "Example 1" },
          { value: "2", text: "Example 2" }
        ]}
        placeholder="See all"
        id="example"
      />
    </div>
  </div>
);

export default PatternLibrary;
