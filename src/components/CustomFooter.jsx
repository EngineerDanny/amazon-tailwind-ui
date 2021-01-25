import React from "react";

const CustomFooter = () => {
  return (
    <footer className="bg-gray-100 w-full flex flex-col items-center py-7">
      <ul className="flex content-between my-4 ">
        <li className="  text-xs text-blue-600"> Conditions of Use </li>
        <li className=" pl-5 text-xs text-blue-600">Privacy Notice </li>
        <li className=" pl-5 text-xs text-blue-600">Help</li>
      </ul>
      <small className="text-xs">
        © 1996-2021, Amazon.com, Inc. or its affiliates
      </small>
    </footer>
  );
};

export default CustomFooter;
