import React from "react";
import { CircularButtonProps } from "./types/interfaces";

const CircularButton = ({
  backgroundColor,
  icon,
  additionalClasses,
}: CircularButtonProps) => {
  return (
    <div
      role="button"
      className={
        `rounded-full cursor-pointer flex justify-center items-center shadow-md shadow-gray-400 ` +
        backgroundColor +
        " " +
        additionalClasses.join(" ")
      }
    >
      {icon}
    </div>
  );
};

export default CircularButton;
