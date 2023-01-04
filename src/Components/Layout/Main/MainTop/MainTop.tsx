import React from "react";
import "./MainTop.scss";
import { IoRefreshOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Checkbox from "@mui/material/Checkbox";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Redux/hooks/redux-hooks";
import { setPage } from "../../../../Redux/store/data-slice/data-actions";
const MainTop = () => {
  const mails = useAppSelector((state) => state.data.mails);
  const pageNumber = useAppSelector((state) => state.data.page);
  const startIndex = (pageNumber - 1) * 50 + 1;
  let endIndex = pageNumber * 50;
  if (endIndex > mails.length) {
    endIndex = mails.length;
  }

  const dispatch = useAppDispatch();
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
        <span>
          {startIndex}-{endIndex} of {mails.length}
        </span>
        {startIndex > 50 && (
          <i
            onClick={() => {
              dispatch(setPage(-1));
            }}
          >
            <GoChevronLeft />
          </i>
        )}
        {endIndex < mails.length && (
          <i
            onClick={() => {
              dispatch(setPage(1));
            }}
          >
            <GoChevronRight />
          </i>
        )}
      </div>
    </div>
  );
};

export default MainTop;
