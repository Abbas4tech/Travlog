import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
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
      <main className="container absolute top-20 z-20 left-1/2 -translate-x-1/2 max-w-5xl mx-auto p-6 grid gap-4 grid-cols-1 ">
        <section className="relative">
          <Introduction />
          <Testimonial />
          <Carousel />
          <Services />
          <Subscribe />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default MainPage;
