import React, { useState } from "react";
import {
  HiOutlinePencil,
  HiOutlineInbox,
  HiOutlineTrash,
} from "react-icons/hi";
import { AiOutlineSend, AiOutlinePlus } from "react-icons/ai";
import { MdLabelImportantOutline } from "react-icons/md";
import { RiSpam2Line } from "react-icons/ri";
import CategoryButton from "./CategoryButton/CategoryButton";
import "./LeftSidebar.scss";
import { useAppDispatch } from "../../../Redux/hooks/redux-hooks";
import {
  clearSelectedMail,
  setMails,
} from "../../../Redux/store/data-slice/data-actions";

const data = [
  { icon: HiOutlineInbox, title: "Inbox", unread: 0, isActive: true },
  { icon: AiOutlineSend, title: "Sent", unread: 0, isActive: false },
  {
    icon: MdLabelImportantOutline,
    title: "Important",
    unread: 0,
    isActive: false,
  },
  { icon: HiOutlineTrash, title: "Trash", unread: 0, isActive: false },
  { icon: RiSpam2Line, title: "Spam", unread: 0, isActive: false },
];
const LeftSidebar = () => {
  const [active, setActive] = useState("Inbox");
  const dispatch = useAppDispatch();

  const changeCategory = (title: string) => {
    setActive(title);
    dispatch(clearSelectedMail());
    dispatch(setMails(title));
  };
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
          <div
            onClick={() => {
              changeCategory(d.title);
            }}
          >
            <CategoryButton
              key={d.title}
              icon={d.icon}
              title={d.title}
              unread={d.unread}
              isActive={d.title == active ? true : false}
            />
          </div>
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
