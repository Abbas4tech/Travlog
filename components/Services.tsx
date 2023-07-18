import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "./data/data";
import Photo from "./Photo";
import Button from "./Button";
import Discount from "../Icons/Discount";
import CircularButton from "./CircularButton";
import Ticket from "@/Icons/Ticket";

const Services = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-4 p-4">
      <div className="hidden md:block relative">
        <Photo
          bucketUrl="services"
          width={500}
          height={500}
          alt="services-banner"
        />
        <Button
          position="before"
          classes={[
            "px-4",
            "py-2",
            "font-semibold",
            "text--black",
            "text-sm",
            "rounded-full",
            "w-[11rem]",
            "bg-white",
            "border-gray-100",
            "border-2",
            "hover:scale-110",
            "ease-in-out",
            "transition-all",
            "hover:shadow-md",
            "hover:shadow-gray-400",
            "absolute",
            "top-[15%]",
            "right-[15%]",
          ]}
          Icon={<Discount />}
        >
          Discounted Price
        </Button>
      </div>
      <div>
        <p className="text-pink tracking-widest leading-10 font-semibold uppercase">
          Travel Point
        </p>
        <h3 className="text--black font-bold text-3xl mt-2 mb-6">
          We helping you find your dream location
        </h3>
        <p className="text-black/50 text-sm mb-4">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <section
          className="grid grid-cols-1 relative grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 gap-4"
          role="grid"
        >
          {services.map(({ count, servicename }) => (
            <ServiceCard count={count} servicename={servicename} />
          ))}
          <CircularButton
            icon={<Ticket />}
            backgroundColor="bg-yellow-500"
            additionalClasses={[
              "absolute",
              "md:-top-10",
              "md:-right-10",
              "-right-4",
              "-top-4",
              "md:h-16 md:w-16 w-10 h-10",
            ]}
          />
        </section>
      </div>
    </section>
  );
};

export default Services;
