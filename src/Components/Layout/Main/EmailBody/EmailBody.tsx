import React from "react";
import { useAppSelector } from "../../../../Redux/hooks/redux-hooks";
import "./EmailBody.scss";
import { decode } from "js-base64";

const EmailBody = () => {
  const mail = useAppSelector((state) => state.data.selectedMail);
  const emailBody = decode(mail.payload.parts[1].body.data);
  console.log(emailBody);

  return (
    <div className="EmailBody">
      <h5 className="snippet">{mail.payload.headers[20].value}</h5>

      <div className="senderDetails">
        <h5>{mail.payload.headers[21].value.split("<")[0]}</h5>
        <p>{`<${mail.payload.headers[21].value.split("<")[1]}`}</p>
      </div>

      <div
        className="mainBody"
        dangerouslySetInnerHTML={{ __html: emailBody }}
      ></div>
    </div>
  );
};

export default EmailBody;
