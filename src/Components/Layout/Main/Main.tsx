import React from "react";
import { useAppSelector } from "../../../Redux/hooks/redux-hooks";
import EmailBody from "./EmailBody/EmailBody";
import EmailList from "./EmailList/EmailList";
import "./Main.scss";
import MainTabs from "./MainTabs/MainTabs";
import MainTop from "./MainTop/MainTop";
const Main = () => {
  const selectedMail = useAppSelector((state) => state.data.selectedMail);
  return (
    <div className="Main">
      {selectedMail.snippet ? (
        <EmailBody />
      ) : (
        <>
          <MainTop />
          <MainTabs />
          <EmailList />
        </>
      )}
    </div>
  );
};

export default Main;
