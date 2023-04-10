import React, { useContext, useEffect } from "react";
import { PasswordContext } from "../context/PasswordContext";
import zxcvbn from "zxcvbn";

export default function PasswordStrengthMeter() {
  const { password } = useContext(PasswordContext);

  const passwordStrength = zxcvbn(password);
  const score = passwordStrength.score;

  const getStrengthLabel = (score) => {
    switch (score) {
      case 0:
      case 1:
        return "TOO WEAK!";
      case 2:
        return "WEAK";
      case 3:
        return "MEDIUM";
      case 4:
        return "STRONG";
      default:
        return "";
    }
  };

  const getStrengthIcons = (score) => {
    const icons = [];
    const hollowColor = "bg-darkgrey";

    const getColor = (index) => {
      if (index < score) {
        switch (score) {
          case 1:
            return "bg-red";
          case 2:
            return "bg-orange";
          case 3:
            return "bg-yellow";
          case 4:
            return "bg-green";
          default:
            return "";
        }
      } else {
        return hollowColor;
      }
    };

    for (let i = 0; i < 4; i++) {
      icons.push(
        <div
          key={i}
          className={`w-2 h-6 mx-1 border-lightgrey border-custom  ${getColor(
            i
          )}`}
        ></div>
      );
    }
    return icons;
  };

  return (
    <div className="mb-6">
      <div className="relative mb-2">
        <div className="text-lightgrey text-m font-normal">
          <div className="bg-darkgrey p-4">
            <div className="flex items-center justify-between">
              <div className="text-grey">STRENGTH:</div>
              <div className="flex items-center">
                <div className="mr-5 font-normal text-xl">
                  {getStrengthLabel(score)}
                </div>{" "}
                {getStrengthIcons(score)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
