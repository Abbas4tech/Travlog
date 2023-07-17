import React from "react";
import Photo from "./Photo";

const Testimonial = () => {
  return (
    <article className="px-6 my-6">
      <Photo
        bucketUrl="testimonial-extra"
        width={30}
        height={75}
        alt="testmonial-showcase"
        classes={["hidden", "xl:block", "absolute", "left-0", "top-[22.5%]"]}
      />
      <section className="flex justify-between w-full gap-4 flex-1 flex-wrap content-start">
        <Photo
          bucketUrl="testimonial"
          width={150}
          height={50}
          autoWidth={true}
          classes={["cursor-pointer"]}
          alt="testimonials"
        />
      </section>
    </article>
  );
};

export default Testimonial;
