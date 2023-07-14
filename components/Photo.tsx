"use client";
import { storage } from "@/firebase";
import { ref, getDownloadURL, list } from "firebase/storage";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PhotoProps } from "./types/interfaces";

const Photo = ({ bucketUrl, height, width, alt }: PhotoProps) => {
  const [imageUrl, setImageUrl] = useState<string[]>([]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageRef = ref(storage, bucketUrl);
        const images = await list(imageRef);
        const urls = await Promise.all(
          images.items.map((image) => getDownloadURL(image))
        );
        console.log(urls);
        setImageUrl(urls);
      } catch (error) {
        console.error("Error occured in fetching images:", error);
      }
    };

    fetchImage();
  }, [bucketUrl]);

  return (
    <>
      {imageUrl.map((url) => {
        return (
          <Image
            key={Math.random()}
            alt={alt}
            src={url}
            style={{
              width: "auto",
              height: "auto",
            }}
            height={height}
            width={width}
            priority={true}
          />
        );
      })}
    </>
  );
};

export default Photo;
