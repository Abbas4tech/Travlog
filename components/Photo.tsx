"use client";
import { storage } from "@/firebase";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import React, { useState } from "react";
import { PhotoProps } from "./types/photo.types";

const Photo = ({ bucketUrl, height, isPrority, width, alt }: PhotoProps) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const imageRef = ref(storage, bucketUrl);
  listAll(imageRef).then((images) =>
    getDownloadURL(images.items[0]).then((url) => setImageUrl(url))
  );

  return (
    <>
      {imageUrl && (
        <Image
          alt={alt}
          src={imageUrl}
          style={{
            width: "auto",
            height: "auto",
          }}
          height={height}
          width={width}
          priority={isPrority ?? false}
        />
      )}
    </>
  );
};

export default Photo;
