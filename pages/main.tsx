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
      <main className="container max-w-5xl mx-auto p-6 grid gap-4 grid-cols-1 relative">
        <Introduction />
        <Services />
        <Testimonial />
        <Subscribe />
        <Footer />
      </main>
    </>
  );
};

export default MainPage;
