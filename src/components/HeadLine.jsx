import React, { useState } from "react";
import "./headLine.css"; // Make sure you have the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faListOl,
  faListUl,
  faLink,
  faUnderline,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Application from "./Application";

export default function HeadLine() {
  const [applicationVisible, setApplicationVisible] = useState(false);

  const toggleApplication = () => {
    setApplicationVisible(!applicationVisible);
  };

  return (
    <div className="parent-div">
      <ul className="info-list">
        <li>RBSCE</li>
        <li>9th</li>
        <li>English</li>
        <li>NCERT</li>
        <li>Beehive</li>
      </ul>

      <div className="days">
        <p>Day 1</p> <p>Day 2</p>
      </div>

      <div className="main-content">
        <div className="add-title">
          <input type="text" placeholder="Add title" />
        </div>

        <div className="input-box">
          <div className="formatting-icons">
            <span>
              <FontAwesomeIcon icon={faBold} />
            </span>
            <span>
              <FontAwesomeIcon icon={faItalic} />
            </span>
            <span>
              <FontAwesomeIcon icon={faListOl} />
            </span>
            <span>
              <FontAwesomeIcon icon={faListUl} />
            </span>
            <span>
              <FontAwesomeIcon icon={faLink} />
            </span>
            <span>
              <FontAwesomeIcon icon={faUnderline} />
            </span>
          </div>
          <textarea
            name="objective"
            className="textarea-with-icons"
            cols="30"
            rows="5"
            placeholder="Objective"
          ></textarea>
        </div>
        <div className="plus">
          <span className="plus-icon">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>

        <div className="input-box content">
          <textarea
            name="content"
            cols="30"
            rows="10"
            placeholder="Content"
          ></textarea>

          {/* <div className="toggle">
          <span className="plus-icons" onClick={toggleApplication}>
            <div className="option">
              <h4>Application</h4>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </span>
        </div>
        
        {applicationVisible && <Application />} */}

          <Application></Application>
        </div>
      </div>
    </div>
  );
}
