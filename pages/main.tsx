import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import React from "react";

const MainPage = () => {
  return (
    <>
      <Header />
      <main className="container max-w-5xl mx-auto">
        {/* <Introduction /> */}
        <Services />
        {/* <Testimonial /> */}
        <Subscribe />
      </main>
    </>
  );
};

export default MainPage;
