import React from "react";
import "./TechStack.css";
import c from "../../images/c.png";
import js from "../../images/js.png";
import css from "../../images/css.svg";
import bootstrap from "../../images/bootstrap.svg";
import firebase from "../../images/firebase.png";
import html from "../../images/html.svg";
import TechStackIconContainer from "./TechStackIconContainer/TechStackIconContainer";

export default function TechStack() {
  const techstackData = [
    {
      iconName: "C",
      iconImage: c,
      iconAltProperty: "reactImage",
    },
    {
      iconName: "Javascript",
      iconImage: js,
      iconAltProperty: "jsImage",
    },
    {
      iconName: "CSS",
      iconImage: css,
      iconAltProperty: "cssImage",
    },
  ];
  const techstackData2 = [
    {
      iconName: "Bootstrap",
      iconImage: bootstrap,
      iconAltProperty: "bootstrapImage",
    },
    {
      iconName: "HTML",
      iconImage: html,
      iconAltProperty: "htmlImage",
    },
    {
      iconName: "Firebase",
      iconImage: firebase,
      iconAltProperty: "firebaseImage",
    },
  ];
  return (
    <div className="techstack_container">
      <p className="techstack_title">Tech Stack</p>
      <div className="techstack_icon_container">
        {techstackData.map((item, index) => {
          return (
            <TechStackIconContainer
              image={item.iconImage}
              altProperty={item.iconAltProperty}
              name={item.iconName}
            />
          );
        })}
      </div>
      <div className="techstack_icon_container">
        {techstackData2.map((item, index) => {
          return (
            <TechStackIconContainer
              image={item.iconImage}
              altProperty={item.iconAltProperty}
              name={item.iconName}
            />
          );
        })}
      </div>
    </div>
  );
}
