import React, { useContext, useEffect } from "react";
import { PasswordContext } from "../context/PasswordContext";

export default function GeneratePasswordButton() {
  const { length, options, generateRandomPassword } =
    useContext(PasswordContext);

  useEffect(() => {
    generateRandomPassword(length, options);
  }, []); // Pass an empty dependency array to run this effect only on mount

  return (
    <div className="">
      <button className="text-darkgrey text-m font-normal bg-green w-full h-14 flex items-center justify-center">
        GENERATE
        <div className="ml-5"><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg></div>
      </button>
    </div>
  );
}
