import React, { useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";
import { blurDataURL } from "../contants/index";

const KBlurImage = (props: ImageProps) => {
  const [isLoading, setLoading] = useState(true);

  const [src, setSrc] = useState(props.src);

  useEffect(() => setSrc(props.src), [props.src]); // update the `src` value when the `prop.src` value changes

  return (
    <Image
      {...props}
      src={src}
      alt={props.alt}
    //   className={`${props.className} transition ${
    //     isLoading
    //       ? "grayscale blur-xl scale-100"
    //       : "grayscale-0 blur-0 scale-100"
    //   }`}
      // className={`${props.className}`}
      placeholder="blur"
      blurDataURL={blurDataURL}
      onLoadingComplete={async () => {
        setLoading(false);
      }}
    />
  );
};

export default React.memo(KBlurImage);
