import React from "react";
import { ServicesProps } from "./types/interfaces";

const ServiceCard = ({ count, servicename }: ServicesProps) => {
  return (
    <>
      <article
        role="gridcell"
        className="flex flex-col rounded-2xl justify-center items-center border-gray-100 hover:border-gray-200 hover:shadow-sm hover:shadow-gray-200 cursor-pointer border-2"
      >
        <div className="text-red my-2 font-semibold text-lg">{count}</div>
        <div className="text--black my-2">{servicename}</div>
      </article>
    </>
  );
};

export default ServiceCard;
