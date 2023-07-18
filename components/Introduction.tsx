import React from "react";
import Button from "./Button";
import BagIcon from "@/Icons/bag";
import PlayIcon from "@/Icons/PlayIcon";
import Photo from "./Photo";
import Location from "@/Icons/Location";
import CircularButton from "./CircularButton";
import AddPeople from "@/Icons/AddPeople";
import Message from "@/Icons/Message";

const Introduction = () => {
  return (
    <>
      <section
        role="grid"
        className="md:p-8 grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-4 md:gap-0 my-4"
      >
        <article id="intro-texts" className="py-0 md:py-12">
          <div>
            <Button
              classes={[
                "px-4",
                "py-2",
                "font-semibold",
                "text-gray-500",
                "text-sm",
                "hover:rounded-full",
                "hover:bg-gray-50",
                "w-[11rem]",
                "mb-4",
              ]}
              position="after"
              Icon={<BagIcon />}
            >
              Explore the world
            </Button>
          </div>
          <h1 className="text-5xl text--black font-bold">
            Travel <span className="text-pink">top destination</span> of the
            world
          </h1>
          <p className="text-sm text-pink font-semibold my-5">
            we always make our customer happy by providing as many choices as
            possible
          </p>
          <div className="flex gap-4">
            <Button
              classes={[
                "px-4",
                "py-2",
                "font-semibold",
                "text-white",
                "text-sm",
                "rounded-full",
                "bg-schbang-blue",
                "w-[9rem]",
                "hover:scale-110",
                "ease-in-out",
                "transition-all",
                "hover:shadow-md",
                "hover:shadow-gray-400",
              ]}
            >
              Get Started
            </Button>
            <Button
              Icon={<PlayIcon />}
              classes={[
                "px-4",
                "py-2",
                "font-semibold",
                "text--black",
                "text-sm",
                "rounded-full",
                "w-[9rem]",
                "border-gray-100",
                "border-2",
                "hover:scale-110",
                "ease-in-out",
                "transition-all",
                "hover:shadow-md",
                "hover:shadow-gray-400",
              ]}
            >
              Watch Demo
            </Button>
          </div>
        </article>
        <article className="relative w-full h-full banner p-4 flex justify-center items-center">
          <article className="md:w-[80%] w-full h-full grid gap-6 grid-cols-2 self">
            <Photo
              bucketUrl="intro-cards"
              classes={[
                "hover:scale-105",
                "brightness-75",
                "hover:brightness-100",
                "ease-in-out",
                "transition-all",
                "cursor-pointer",
                "[&:nth-child(2)]:row-span-2",
                "[&:nth-child(2)]:self-center",
              ]}
              width={400}
              height={400}
              alt="intro-images"
            />
            <Button
              Icon={<Location />}
              classes={[
                "px-4",
                "py-2",
                "bg-white",
                "rounded-full",
                "border-2",
                "border-gray-200",
                "absolute",
                "right-0",
                "top-1/2",
                "text-sm",
                "font-semibold",
              ]}
              position="before"
            >
              Top Places
            </Button>
            <CircularButton
              additionalClasses={["absolute", "right-1/4", "bottom-0","md:h-10 md:w-10 w-7 h-7"]}
              icon={<AddPeople />}
              backgroundColor="bg-orange-500"
            />
            <CircularButton
              additionalClasses={["absolute", "top-[40%]", "md:left-10","md:h-10 md:w-10 w-7 h-7"]}
              icon={<Message />}
              backgroundColor="bg-pink-500"
            />
          </article>
        </article>
      </section>
    </>
  );
};

export default Introduction;
