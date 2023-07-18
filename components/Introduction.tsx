import React from "react";
import Button from "./Button";
import BagIcon from "@/Icons/bag";
import PlayIcon from "@/Icons/PlayIcon";
import Photo from "./Photo";

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
          <article className="w-[80%] h-[80%] grid gap-6 grid-cols-2 self">
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
          </article>
        </article>
      </section>
    </>
  );
};

export default Introduction;
