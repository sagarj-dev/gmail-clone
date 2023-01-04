import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Redux/hooks/redux-hooks";
import "./EmailBody.scss";
import { decode } from "js-base64";
import { IoArrowBackSharp } from "react-icons/io5";
import { clearSelectedMail } from "../../../../Redux/store/data-slice/data-actions";

const EmailBody = () => {
  const mail = useAppSelector((state) => state.data.selectedMail);
  const dispatch = useAppDispatch();
  let emailBody: string = "";
  let emailBodyHTMLobj = mail.payload.parts?.filter(
    (part) => part.mimeType === "text/html"
  );

  if (emailBodyHTMLobj) {
    emailBody = decode(emailBodyHTMLobj[0].body.data);
  } else if (mail.payload.body.size) {
    emailBody = decode(mail.payload.body.data);
  }

  let from = mail.payload.headers.filter((head) => head.name == "From");
  let subject = mail.payload.headers.filter((head) => head.name == "Subject");

  console.log("emailBody ", emailBody);

  return (
    <div className="EmailBody">
      <div className="snippet">
        <i onClick={() => dispatch(clearSelectedMail())}>
          <IoArrowBackSharp />
        </i>
        <h5>{subject[0].value}</h5>
      </div>

      <div className="senderDetails">
        <h5>{from[0].value.split("<")[0]}</h5>
        <p>{`<${from[0].value.split("<")[1]}`}</p>
      </div>

      <div
        className="mainBodyHTML"
        dangerouslySetInnerHTML={{ __html: emailBody }}
      ></div>
    </div>
  );
};

export default EmailBody;
