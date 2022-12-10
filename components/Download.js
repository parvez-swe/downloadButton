import React from "react";
import Image from "next/image";
const Download = () => {
  return (
    <div>
    <div className="">
      <Image className="mb-5" src="/image.png" height={250} width={250} />
      <a className="bg-red-500 px-2 py-1 rounded text-white" href="/image.png" download>Download Image</a>
    </div>
    <div className="my-10">
    <a href="/cv.pdf" className="bg-red-500 px-2 py-1 rounded text-white" download>Download CV</a>
    </div>
    </div>
  );
};

export default Download;
