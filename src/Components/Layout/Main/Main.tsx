import React from "react";
import EmailList from "./EmailList/EmailList";
import "./Main.scss";
import MainTabs from "./MainTabs/MainTabs";
import MainTop from "./MainTop/MainTop";
const Main = () => {
  return (
    <div className="Main">
      <MainTop />
      <MainTabs />
      <EmailList />
    </div>
  );
};

export default Main;
