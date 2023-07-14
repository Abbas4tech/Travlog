import Photo from "@/components/Photo";
import React from "react";

const MainPage = () => {
  return (
    <>
      <h1>Main Index</h1>
      <Photo
        bucketUrl="background"
        width={500}
        height={200}
        isPrority={true}
        alt="banner"
      />
    </>
  );
};

export default MainPage;
