import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Checkbox from "@mui/material/Checkbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import "./EmailList.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Redux/hooks/redux-hooks";
import { setSelectedMail } from "../../../../Redux/store/data-slice/data-actions";

const EmailList = () => {
  const dispatch = useAppDispatch();
  const mails = useAppSelector((state) => state.data.mails);
  return (
    <div>
      <List>
        {mails.length > 0 &&
          mails.map((mail) => (
            <div
              key={mail.id}
              onClick={() => {
                dispatch(setSelectedMail(mail.id));
              }}
            >
              <ListItem>
                <div className="emailComp">
                  <div className="emailActions">
                    <Checkbox />
                    <Checkbox
                      icon={<StarBorderIcon />}
                      checkedIcon={<StarIcon color="warning" />}
                    />
                  </div>
                  <h5>{mail.id}</h5>
                  <div className="emailprev">
                    <h5></h5>
                    <span></span>
                  </div>
                  <h5 className="emailDate"></h5>
                </div>
              </ListItem>
              <Divider />
            </div>
          ))}
      </List>
    </div>
  );
};

export default EmailList;
