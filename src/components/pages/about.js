import React from "react";
import profilePicture from "../../../static/assets/images/bio/Headshot.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        <p>
          I grew up in Southeastern Idaho and built an extensive foundation in
          customer service, sales, and implementation. Because of this, I always
          view my code from the most human angle possible.
        </p>{" "}
        <p>
          My top priority has always been building applications that make sense
          to the widest variety of people, whether they're tech-savvy or not.
          User-friendliness should always be paramount, in my humble opinion.
        </p>{" "}
        <p>
          That's why I love languages like ReactJS and Python-- the relative
          simplicity means that I, as a developer, can focus more on creating
          intuitive and dynamic features.{" "}
        </p>
        <p>Code is awesome, but people are awesomer.</p>
      </div>
    </div>
  );
}
