import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBook, faCalendar, faBell, faBriefcase, faChartPie, faChalkboardTeacher, faClipboard, faGraduationCap, faComments} from "@fortawesome/free-solid-svg-icons";
import "./sideBar.css"; // You can create this CSS file for styling

import logo from "../images/logo.png";
import bottom from "../images/bottom.png";

const Sidebar = () => {
  const dashboardItems = [
    { name: "School Management", icon: faHome },
    { name: "Students", icon: faUser },
    { name: "Teachers", icon: faChalkboardTeacher },
    { name: "Classes", icon: faBook },
    { name: "Syllabus", icon: faBook },
    { name: "Attendance", icon: faCalendar },
    { name: "Events", icon: faCalendar },
    { name: "Notice Board", icon: faBell },
    { name: "Career Counseling", icon: faBriefcase },
    { name: "360 Evaluation", icon: faChartPie },
    { name: "Free Portal Courses", icon: faClipboard },
    { name: "Admission", icon: faGraduationCap },
    { name: "Chat", icon: faComments },
    { name: "Notifications", icon: faBell },
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1>School Pen</h1>
      <ul className="dashboard-items">
        {dashboardItems.map((item, index) => (
          <li key={index}>
            <span className="item-icon">
              <FontAwesomeIcon icon={item.icon} />
            </span>
            {item.name}
          </li>
        ))}
        <li className="bottom-icon">
          <img src={bottom} alt="Bottom Icon" style={{width:"5rem", margin:"2rem",marginLeft:"5rem"}} />
        </li>
        <li>
          <p style={{background:"rgb(222,217,255)",borderRadius:"1rem",width:"13rem",height:"3rem",fontSize:"small",color:"black",textAlign:"center"}}>Upgrade to <strong>Premium plan</strong> to unlock more features </p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
