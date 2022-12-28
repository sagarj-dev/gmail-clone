import React from "react";
import Header from "./Header/Header";
import "./Layout.scss";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
const Layout = () => {
  return (
    <div>
      <Header />
      <div className="mainBody">
        <LeftSidebar />
        <div>none</div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
