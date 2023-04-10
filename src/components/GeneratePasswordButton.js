import React, { useContext, useState } from "react";
import { PasswordContext } from "../context/PasswordContext";

export default function GeneratePasswordButton() {
  const { length, options, generateRandomPassword } =
    useContext(PasswordContext);
  const [buttonColor, setButtonColor] = useState("#A4FFAF");
  const [buttonTextColor, setButtonTextColor] = useState("text-darkgrey");
  const [buttonBorderColor, setButtonBorderColor] = useState("");
  const [svgColor, setSvgColor] = useState("#18171F");

  const genRandomPass = () => {
    generateRandomPassword(length, options);
  };

  const buttonColorTransition = () => {
    setButtonColor("#24232C");
    setButtonTextColor("text-green");
    setButtonBorderColor("border border-solid border-green");
    setSvgColor("#A4FFAF");
    setTimeout(() => {
      setButtonColor("#A4FFAF");
      setButtonTextColor("text-darkgrey");
      setButtonBorderColor("");
      setSvgColor("#18171F");
    }, 150);
  };

  const handleClick = () => {
    buttonColorTransition();
    genRandomPass();
  };

  return (
    <div className="">
      <button
        className={`text-m font-normal w-full h-14 flex items-center justify-center ${buttonTextColor} ${buttonBorderColor}`}
        style={{ backgroundColor: buttonColor }}
        onClick={() => {
          handleClick();
        }}
      >
        GENERATE
        <div className="ml-5">
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
              fill={svgColor}
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
