import React from "react";
import Photo from "./Photo";
import Button from "./Button";

const Subscribe = () => {
  return (
    <>
      <Photo
        bucketUrl="subscribe-extra"
        width={75}
        height={75}
        alt="subscribe-box-design"
        classes={["absolute", "right-0", "bottom-[10%]","hidden", "xl:block"]}
      />
      <section className="relative flex justify-center items-center">
        <Photo
          bucketUrl="subscribe"
          width={75}
          height={75}
          alt="showcase-dots"
          classes={["absolute", "top-0", "left-0", "z-10"]}
        />
        <article className="bg-off-white rounded-3xl w-[90%] h-[90%] flex flex-col justify-center items-center p-8 md:p-12 min-h-[12rem]">
          <div className="text-pink tracking-widest leading-10 font-semibold uppercase text-center md:text-start">
            Subscribe to our newsletter
          </div>
          <div className="text--black my-2 text-center text-3xl font-bold leading-10">
            Prepare yourself & let’s explore the beauty of the world
          </div>
          <div className="flex flex-col md:flex-row mt-4 gap-4 w-full md:w-auto items-center">
            <input
              type="text"
              placeholder="Email"
              className="md:min-w-[20rem] md:max-w-[90%] w-full max-w-xs h-14 py-1 text-sm font-semibold text-opaque-black rounded-2xl outline-none px-4 border-yellow-50 border-2"
            />
            <Button
              classes={[
                "bg-schbang-blue",
                "rounded-full",
                "text-sm",
                "px-6",
                "py-3",
                "text-white",
                "text-center",
                "hover:scale-110",
                "ease-in-out",
                "transition-all",
                "hover:shadow-md",
                "hover:shadow-gray-400",
              ]}
            >
              Subscribe
            </Button>
          </div>
        </article>
      </section>
    </>
  );
};

export default Subscribe;
