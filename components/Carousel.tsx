import React from "react";
import Photo from "./Photo";

const Carousel = () => {
  return (
    <>
      <section className="w-full grid md:grid-cols-[0.75fr,1.5fr] grid-cols-1 p-4">
        <article className="text-box">
          <p className="text-pink tracking-widest leading-10 font-semibold uppercase">
            Services
          </p>
          <h3 className="text--black font-bold text-3xl mt-2 mb-6">
            Our top value categories for you
          </h3>
        </article>
        <div className="slider after:right-0 before:left-0 before:top-0 after:top-0 after:rotate-180 bg-white h-full w-full m-auto overflow-hidden relative">
          <div className="slide-track flex justify-center w-max">
            {Array.from({ length: 10 }, (e, i) => (
              <div key={i} className="slide h-full w-1/2 max-w-[250px] p-4">
                <section className="p-8 cursor-pointer shadow rounded-xl shadow-gray-400 flex flex-col items-center justify-between">
                  <Photo
                    width={32}
                    height={32}
                    bucketUrl="card-1"
                    alt="service-icon"
                  />
                  <p className="font-bold text-lg my-4 text--black">
                    Best Tour Guide
                  </p>
                  <p className="text-black/50 font-sm font-semibold">
                    What looked like a small patch of purple grass, above five
                    feet.
                  </p>
                </section>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
