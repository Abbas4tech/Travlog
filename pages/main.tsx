import Header from "@/components/Header";
import Photo from "@/components/Photo";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import React from "react";

const MainPage = () => {
  return (
    <>
      <Header />
      <Photo
        bucketUrl="background"
        width={500}
        height={200}
        isPrority={true}
        alt="banner"
      />
      <Services />
      <Testimonial />
      <Subscribe />
    </>
  );
};

export default MainPage;
