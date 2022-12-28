import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { InboxOutlined } from "@mui/icons-material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import "./MainTabs.scss";
export default function MainTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="MainTabs">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        variant="fullWidth"
      >
        <Tab
          icon={<InboxOutlined />}
          label={<span>primary</span>}
          iconPosition="start"
        />
        <Tab
          icon={<LocalOfferOutlinedIcon />}
          label={<span>Promotions</span>}
          iconPosition="start"
        />
        <Tab
          icon={<GroupOutlinedIcon />}
          label={<span>Social</span>}
          iconPosition="start"
        />
      </Tabs>
    </div>
  );
}
