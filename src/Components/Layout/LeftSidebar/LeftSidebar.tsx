import React from "react";
import {
  HiOutlinePencil,
  HiOutlineInbox,
  HiOutlineDocument,
} from "react-icons/hi";
import {
  AiOutlineClockCircle,
  AiOutlineStar,
  AiOutlineSend,
  AiOutlinePlus,
} from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import CategoryButton from "./CategoryButton/CategoryButton";
import "./LeftSidebar.scss";

const data = [
  { icon: HiOutlineInbox, title: "Inbox", unread: 0, isActive: true },
  { icon: AiOutlineStar, title: "Starred", unread: 0, isActive: false },
  { icon: AiOutlineClockCircle, title: "Snoozed", unread: 0, isActive: false },
  { icon: AiOutlineSend, title: "Send", unread: 0, isActive: false },
  { icon: HiOutlineDocument, title: "Drafts", unread: 0, isActive: false },
  { icon: BiChevronDown, title: "More", unread: 0, isActive: false },
];
const LeftSidebar = () => {
  return (
    <div className="LeftSidebar">
      <div className="composeButtonContainer">
        <i>
          <HiOutlinePencil />
        </i>
        <span>Compose</span>
      </div>

      <div className="mailCategoryContainer">
        {data.map((d) => (
          <CategoryButton
            icon={d.icon}
            title={d.title}
            unread={d.unread}
            isActive={d.isActive}
          />
        ))}
      </div>
      <div className="labelsContainer">
        <span>Labels</span>
        <i>
          <AiOutlinePlus />
        </i>
      </div>
    </div>
  );
};

export default LeftSidebar;
