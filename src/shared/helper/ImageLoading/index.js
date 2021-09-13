import React from "react";
import { Skeleton, WrapperImg } from "./styles";

export default function ImageLoading({alt, ...props}){
  
  const [showSkeleton, setShowSkeleton] = React.useState(true) 

  function handleImageLoading({target}){
    setShowSkeleton(false)
    target.style.opacity = 1
  }

  return (
    <WrapperImg>
      {showSkeleton && <Skeleton></Skeleton>}
      <img onLoad={handleImageLoading} {...props} alt={alt} />
    </WrapperImg>
  )
}