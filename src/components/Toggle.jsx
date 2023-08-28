import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Toggle({ title, children }) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div className="toggle">
        <span className="plus-icons" onClick={toggleVisibility}>
          <div className="option">
            <h4>{title}</h4>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </span>
        {visible && <div className="toggle-content">{children}</div>}
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import "./headLine.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import Application from "./Application";
// export default function Toggle() {
//   const [applicationVisible, setApplicationVisible] = useState(false);

//   const toggleApplication = () => {
//     setApplicationVisible(!applicationVisible);
//   };
//   return (
//     <div className="toggle">
//       <span className="plus-icons" onClick={toggleApplication}>
//         <div className="option">
//           <h4>Application</h4>
//           <FontAwesomeIcon icon={faPlus} />
//         </div>
//       </span>
//       {applicationVisible && <Application />}
//     </div>
//   );
// }
