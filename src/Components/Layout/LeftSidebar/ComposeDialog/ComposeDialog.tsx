import React from "react";
import "./ComposeDialog.scss";
import { CgMaximizeAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { Alert, AlertColor } from "@mui/material";

type ComposeDialogType = {
  open: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const ComposeDialog = ({ open, setModal }: ComposeDialogType) => {
  const [inputs, setInputs] = React.useState({
    email: "",
    subject: "",
    body: "",
  });
  const [size, setSize] = React.useState(false);
  const [msg, setMsg] = React.useState({
    type: "error",
    msg: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .get("http://localhost:8000/api/mail/send", {
        params: {
          inputs,
        },
      })
      .then((res) => {
        console.log(res);

        if (res.data) {
          console.log("succed");
          setMsg({
            type: "success",
            msg: "Email Sent Sucessfully",
          });
          setTimeout(() => {
            setMsg({
              type: "success",
              msg: "",
            });
            setModal(false);
          }, 1000);
        } else {
          setMsg({
            type: "error",
            msg: "Error Sending Email",
          });
          setTimeout(() => {
            setMsg({
              type: "error",
              msg: "",
            });
          }, 1000);
        }
      });
  };
  return (
    <>
      {open && (
        <div className={`ComposeDialog ${size ? "ComposeDialog-large" : ""}`}>
          {msg.msg ? (
            <Alert variant="filled" severity={msg.type as AlertColor}>
              {msg.msg}
            </Alert>
          ) : (
            <>
              <div className="ComposeDialog-top">
                <p>New Message</p>
                <div>
                  <i>
                    <CgMaximizeAlt onClick={() => setSize(!size)} />
                  </i>
                  <i
                    onClick={() => {
                      setSize(false);
                      setModal(false);
                    }}
                  >
                    <AiOutlineClose />
                  </i>
                </div>
              </div>
              <div className="composeDialog-input">
                <label>To</label>
                <input type="email" name="email" onChange={handleChange} />
              </div>
              <div className="composeDialog-input">
                <label>Subject</label>
                <input type="text" name="subject" onChange={handleChange} />
              </div>
              <div className="composeDialog-body">
                <textarea aria-multiline name="body" onChange={handleChange} />
              </div>

              <div className="composeDialog-actions">
                <button onClick={handleSubmit}>Send</button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ComposeDialog;
