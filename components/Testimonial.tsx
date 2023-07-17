import React from "react";
import Photo from "./Photo";

const Testimonial = () => {
  return (
    <article className="px-6 my-8 relative">
      <Photo
        bucketUrl="testimonial-extra"
        width={30}
        height={75}
        alt="testmonial-showcase"
        classes={["hidden", "md:block"]}
      />
      <section className="flex justify-between w-[75%] gap-y-4 flex-wrap content-start absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Photo
          bucketUrl="testimonial"
          width={350}
          height={175}
          classes={["cursor-pointer"]}
          alt="testimonials"
        />
      </section>
    </article>
  );
};

export default Testimonial;
