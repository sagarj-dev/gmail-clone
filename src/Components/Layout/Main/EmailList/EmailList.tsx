import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Checkbox from "@mui/material/Checkbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import "./EmailList.scss";

const EmailList = () => {
  return (
    <div>
      <List>
        <ListItem>
          <div className="emailComp">
            <div className="emailActions">
              <Checkbox />
              <Checkbox
                icon={<StarBorderIcon />}
                checkedIcon={<StarIcon color="warning" />}
              />
            </div>
            <h5>Nancy Farid - Wazzaf</h5>
            <div className="emailprev">
              <h5>Ahmed,Join our Virtual Launch tomorrow</h5>
              <span>
                Graphic design internship - designer and other roles...
              </span>
            </div>
            <h5 className="emailDate">23 Dec</h5>
          </div>
        </ListItem>
        <Divider />
        <ListItem>
          <div className="emailComp">
            <div className="emailActions">
              <Checkbox />
              <Checkbox
                icon={<StarBorderIcon />}
                checkedIcon={<StarIcon color="warning" />}
              />
            </div>
            <h5>Nancy Farid - Wazzaf</h5>
            <div className="emailprev">
              <h5>Ahmed,Join our Virtual Launch tomorrow</h5>
              <span>
                Graphic design internship - designer and other roles...
              </span>
            </div>
            <h5 className="emailDate">23 Dec</h5>
          </div>
        </ListItem>
        <Divider />
        <ListItem>
          <div className="emailComp">
            <div className="emailActions">
              <Checkbox />
              <Checkbox
                icon={<StarBorderIcon />}
                checkedIcon={<StarIcon color="warning" />}
              />
            </div>
            <h5>Nancy Farid - Wazzaf</h5>
            <div className="emailprev">
              <h5>Ahmed,Join our Virtual Launch tomorrow</h5>
              <span>
                Graphic design internship - designer and other roles...
              </span>
            </div>
            <h5 className="emailDate">23 Dec</h5>
          </div>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
};

export default EmailList;
