import React from "react";
import { AiFillCaretDown, AiOutlineSetting } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import "./Header.scss";
import Logo from "../../../assets/logo.png";
import SearchBox from "./SearchBox/SearchBox";
const Header = () => {
  return (
    <div className="header-conatiner">
      <div className="header-left">
        <img src={Logo} alt="gmail-logo" />
        <h1>Gmail</h1>
      </div>
      <div className="header-middle">
        <SearchBox />
        <div className="header-middle-buttons">
          <div className="header-right-active-buttons">
            <div></div>
            <p>Active</p>
            <i>
              <AiFillCaretDown />
            </i>
          </div>
          <i>
            <BsQuestionCircle />
          </i>
          <i>
            <AiOutlineSetting />
          </i>
          <i>
            <TbGridDots />
          </i>
        </div>
      </div>
      <div className="header-right">
        <img
          src="https://randomuser.me/api/portraits/men/70.jpg"
          alt="gmail-logo"
        />
      </div>
    </div>
  );
};

export default Header;
