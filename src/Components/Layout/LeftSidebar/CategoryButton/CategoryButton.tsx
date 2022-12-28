import React from "react";
import { IconType } from "react-icons/lib";
import "./CategoryButton.scss";
type CategoryButtonType = {
  icon: IconType;
  title: string;
  unread: number;
  isActive: boolean;
};
const CategoryButton = ({
  icon: Icon,
  title,
  isActive,
  unread,
}: CategoryButtonType) => {
  return (
    <div
      className={
        isActive ? "CategoryButton CategoryButton-active" : "CategoryButton"
      }
    >
      <div className="CategoryButton-left">
        <i>
          <Icon />
        </i>
        <span>{title}</span>
      </div>
      {unread > 0 && (
        <div className="CategoryButton-right">
          <span>{unread}</span>
        </div>
      )}
    </div>
  );
};

export default CategoryButton;
