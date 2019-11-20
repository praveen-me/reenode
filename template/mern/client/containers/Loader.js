import React from "react";
import * as loaderSvg from "./../images/loader.svg";

const Loader = () => {
  return (
    <div
      className="loader"
      dangerouslySetInnerHTML={{ __html: loaderSvg }}
    ></div>
  );
};

export default Loader;
