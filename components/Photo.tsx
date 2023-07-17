"use client";
import { storage } from "@/firebase";
import { ref, getDownloadURL, list } from "firebase/storage";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PhotoProps } from "./types/interfaces";

const Photo = ({
  bucketUrl,
  height,
  width,
  alt,
  classes,
  autoWidth,
}: PhotoProps) => {
  const [imageUrl, setImageUrl] = useState<string[]>([]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageRef = ref(storage, bucketUrl);
        const images = await list(imageRef);
        const urls = await Promise.all(
          images.items.map((image) => getDownloadURL(image))
        );
        setImageUrl(urls);
      } catch (error) {
        console.error("Error occured in fetching images:", error);
      }
    };

    fetchImage();
  }, [bucketUrl]);

  const checkAutoWidth = (): string => (autoWidth ? "auto" : "");
  return (
    <>
      {imageUrl.map((url) => {
        return (
          <Image
            className={classes?.join(" ")}
            key={Math.random()}
            alt={alt}
            src={url}
            style={{
              height: "auto",
              width: checkAutoWidth(),
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
