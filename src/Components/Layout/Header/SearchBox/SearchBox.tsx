import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <div className="SearchBox">
      <i>
        <AiOutlineSearch />
      </i>
      <input placeholder="Search in emails" />
      <i>
        <HiOutlineAdjustmentsHorizontal />
      </i>
    </div>
  );
};

export default SearchBox;
