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
import { AllMailType } from "../../../../Redux/models/redux-models";

const EmailList = () => {
  const dispatch = useAppDispatch();
  const mails = useAppSelector((state) => state.data.mails);
  const pageNumber = useAppSelector((state) => state.data.page);
  const startIndex = (pageNumber - 1) * 50 + 1;
  let endIndex = pageNumber * 50;
  if (endIndex > mails.length) {
    endIndex = mails.length;
  }
  let pagination: AllMailType[] = [];
  if (mails.length > 0) {
    pagination = mails.filter((m, i) => {
      if (i >= startIndex && i <= endIndex) {
        return m;
      }
    });
  }
  return (
    <div>
      <List>
        {pagination.length > 0 ? (
          pagination.map((mail) => (
            <div key={mail.id}>
              <ListItem>
                <div className="emailComp">
                  <div className="emailActions">
                    <Checkbox />
                    <Checkbox
                      icon={<StarBorderIcon />}
                      checkedIcon={<StarIcon color="warning" />}
                    />
                  </div>
                  <h5
                    onClick={() => {
                      dispatch(setSelectedMail(mail.id));
                    }}
                  >
                    {mail.id}
                  </h5>
                  <div className="emailprev">
                    <h5></h5>
                    <span></span>
                  </div>
                  <h5 className="emailDate"></h5>
                </div>
              </ListItem>
              <Divider />
            </div>
          ))
        ) : (
          <h2>NO EMAILS FOUND</h2>
        )}
      </List>
    </div>
  );
};

export default EmailList;
