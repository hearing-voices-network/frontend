import React from "react";
import ReactSVG from "react-svg";

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
import Editor from "./Editor";

import AccountCreated from "../assets/icons/account-created.svg";
import AccountLight from "../assets/icons/account-light.svg";
import Community from "../assets/icons/community.svg";
import Contribute from "../assets/icons/contribute.svg";
import MyExperiences from "../assets/icons/my-experiences.svg";
import NoResults from "../assets/icons/no-results.svg";
import Page404 from "../assets/icons/page-404.svg";
import Page404Large from "../assets/icons/page-404-large.svg";
import Pencil from "../assets/icons/pencil.svg";
import PencilLarge from "../assets/icons/pencil-large.svg";
import Public from "../assets/icons/public.svg";
import QuestionCircleLight from "../assets/icons/question-circle-light.svg";
import QuestionCircle from "../assets/icons/question-circle.svg";
import Resubmitted from "../assets/icons/resubmitted.svg";
import Security from "../assets/icons/security.svg";
import Submitted from "../assets/icons/submitted.svg";
import TryAgainLarge from "../assets/icons/try-later-large.svg";
import TryAgain from "../assets/icons/try-later.svg";
import WritingGuidance from "../assets/icons/writing-guidance.svg";
import DashboardLight from "../assets/icons/dashboard-light.svg";
import Loading from "./Loading";
import Cookies from "./Cookies";
import Story from "./Cards/Story";
import Privacy from "./Cards/Privacy";

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
      <ReactSVG src={AccountCreated} className="svg" wrapper="span" />
      <ReactSVG src={AccountLight} className="svg" wrapper="span" />
      <ReactSVG src={MyExperiences} className="svg" wrapper="span" />
      <ReactSVG src={NoResults} className="svg" wrapper="span" />
      <ReactSVG src={Page404} className="svg" wrapper="span" />
      <ReactSVG src={Page404Large} className="svg" wrapper="span" />
      <ReactSVG src={PencilLarge} className="svg" wrapper="span" />
      <ReactSVG src={Public} className="svg" wrapper="span" />
      <ReactSVG src={Resubmitted} className="svg" wrapper="span" />
      <ReactSVG src={Submitted} className="svg" wrapper="span" />
      <ReactSVG src={TryAgainLarge} className="svg" wrapper="span" />
      <ReactSVG src={WritingGuidance} className="svg" wrapper="span" />

      <ReactSVG src={TryAgain} className="svg" wrapper="span" />
      <ReactSVG src={Security} className="svg" wrapper="span" />
      <ReactSVG src={Community} className="svg" wrapper="span" />
      <ReactSVG src={Contribute} className="svg" wrapper="span" />
      <ReactSVG src={Pencil} className="svg" wrapper="span" />
      <ReactSVG src={QuestionCircleLight} className="svg" wrapper="span" />
      <ReactSVG src={QuestionCircle} className="svg" wrapper="span" />
      <ReactSVG src={DashboardLight} className="svg" wrapper="span" />
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
      {/* <PaginationControl totalItems={20} itemsPerPage={5} currentPage={1} /> */}
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
      <PrivacyButton text="Private" onChange={() => null} />
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
    <div className="section flex-col--12">{/* <Editor /> */}</div>
    <div className="section flex-col--12">
      <Loading input="selection" />
    </div>
    <div className="section flex-col--12">
      <Cookies />
    </div>
    <div className="section flex-col--12">
      <Cookies loggedIn={true} />
    </div>

    <div className="section flex-col--12">
      <div className="flex-container flex-container--no-padding flex-container--justify">
        <Story
          story="I was terrorized by three male voices who talked about me, narrating my movements and picking fault in everything I do and say"
          tags={[
            {
              id: "1",
              name: "talking"
            },
            { id: "2", name: "critical" },
            { id: "3", name: "male" }
          ]}
          id={"1"}
        />
        <Story
          story="I was terrorized by three male voices who talked about me, narrating my movements and picking fault in everything I do and say"
          tags={[
            {
              id: "1",
              name: "talking"
            },

            { id: "2", name: "critical" },
            { id: "3", name: "male" }
          ]}
          id={"2"}
        />
        <Story
          story="I was terrorized by three male voices who talked about me, narrating my movements and picking fault in everything I do and say"
          tags={[
            {
              id: "1",
              name: "talking"
            },
            { id: "2", name: "critical" },
            { id: "3", name: "male" }
          ]}
          id={"3"}
        />
      </div>
    </div>
    <div className="section flex-col--5 flex-col--mobile--12">
      <Privacy />
    </div>
  </div>
);

export default PatternLibrary;
