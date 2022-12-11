import React from "react";
import Image from "next/image";
const Download = () => {
  return (
    <div className="mb-20">
      <img src="/image.png" alt="image" />
      <a className="bg-red-500 text-white rounded px-5 py-2" href="/image.png" download>
        Download Image
      </a>

    </div>
  );
};

export default Download;
