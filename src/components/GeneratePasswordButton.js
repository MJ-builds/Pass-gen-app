import React, { useContext, useEffect } from "react";
import { PasswordContext } from "../context/PasswordContext";

export default function GeneratePasswordButton() {
const { length, options, generateRandomPassword } = useContext(PasswordContext);

    useEffect(() => {
        generateRandomPassword(length, options);
      }, []); // Pass an empty dependency array to run this effect only on mount

  return (
    <div className="mb-6">
      <div className="relative mb-2">
        <div className="">
          <div className="">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-5 font-normal text-xl"></div>{" "}
                <button text-lightgrey text-m font-normal bg-darkgrey p-4>Generate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
