import React from "react";
import "./MainTop.scss";
import { IoRefreshOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Checkbox from "@mui/material/Checkbox";
const MainTop = () => {
  return (
    <div className="MainTop">
      <div className="MainTop-left">
        <Checkbox />
        <i>
          <IoRefreshOutline />
        </i>
        <i>
          <BsThreeDotsVertical />
        </i>
      </div>
      <div className="MainTop-right">
        <span>1-50 of 315</span>
        <i>
          <GoChevronLeft />
        </i>
        <i>
          <GoChevronRight />
        </i>
      </div>
    </div>
  );
};

export default MainTop;
