import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
export default function Application() {
  return (
    <div className="application-wrapper">
      <div style={{ display: "flex" }}>
        <h4>Applications</h4>
        {/* <FontAwesomeIcon icon={faLink} /> */}
      </div>
      <div
        className="applications-rec"
        style={{ display: "flex", gap: "5rem" }}
      >
        <div className="square-plus">
          <span className="plus-icon">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="add-title" style={{ width: "100%" }}>
            <input type="text" placeholder="Add title" />
          </div>
          <div className="heading">
            <h4>content</h4>
          </div>
          <button className="button-add">Add</button>
          {/* <div className="line"></div> */}
        </div>
        <div>
          <div className="titles" style={{ display: "flex",gap:"1rem" }}>
            <div className="small-box"></div>
            <h2>Title</h2>
          </div>
          <p className="para">Lorem ipsum dolor sit amet, consectetur. </p>
          <div  className="titles" style={{ display: "flex" ,gap:"1rem"}}>
            <div className="small-box"></div>
            <h2>Title</h2>
          </div>
          <p className="para">Lorem ipsum dolor sit amet, consectetur. </p>
          <p></p>
          <div  className="titles" style={{ display: "flex",gap:"1rem" }}>
            <div className="small-box"></div>
            <h2>Title</h2>
          </div>
          <p className="para">Lorem ipsum dolor sit amet, consectetur. </p>
        </div>
      </div>
    </div>
  );
}
