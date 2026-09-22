"use client";
import React from "react";
import Image, { type ImageProps } from "next/image";
import { getPathWithBasePath } from "@/utils/path";

const PreviewImage = (props: ImageProps) => {
  const src =
    typeof props.src === "string" && props.src.startsWith("/")
      ? getPathWithBasePath(props.src)
      : props.src;

  const handlePreview = () => {
    if (typeof src === "string") {
      window.open(src);
    }
  };

  return <Image {...props} src={src} onClick={handlePreview} />;
};

export default PreviewImage;
