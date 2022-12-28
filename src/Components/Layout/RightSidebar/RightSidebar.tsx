import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./RightSidebar.scss";
const RightSidebar = () => {
  return (
    <div className="RightSidebar">
      <img src="/LeftsidebarIcons/calender.png" alt="calender" />
      <img src="/LeftsidebarIcons/Contacts.png" alt="Contacts" />
      <img src="/LeftsidebarIcons/keep.png" alt="keep" />
      <img src="/LeftsidebarIcons/tasks.png" alt="tasks" />
      <img src="/LeftsidebarIcons/Line.png" alt="Line" />
      <i>
        <AiOutlinePlus />
      </i>
    </div>
  );
};

export default RightSidebar;
