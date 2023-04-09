import React, { useContext, useEffect, useRef } from "react";
import { PasswordContext } from "../context/PasswordContext";

export default function CharacterLengthSlider() {
  const { length, setLength, options, generateRandomPassword } =
    useContext(PasswordContext);

    const sliderRef = useRef();

    // This function updates the slider's background color and divides the left and right sides of the slider into two colors.
    const updateSliderColor = () => {
      const value = (sliderRef.current.value - sliderRef.current.min) / (sliderRef.current.max - sliderRef.current.min) * 100;
      sliderRef.current.style.background = `linear-gradient(to right, #A4FFAF ${value}%, #18171F 0)`;
    };
    
  const handleLengthChange = (event) => {
    const newLength = event.target.value;
    setLength(newLength);
    generateRandomPassword(newLength, options);
    updateSliderColor();
  };

  useEffect(() => {
    updateSliderColor();
  }, []);
  
  return (
    <div className="mb-6">
      <label
        htmlFor="character-length"
        className="text-base font-medium -mt-5 mb-5 flex items-center justify-between"
      >
        Character Length
        {" "}
        <div className="text-green font-bold text-2xl">{length}</div>
      </label>
      <input
        ref={sliderRef}
        className="w-full h-2 cursor-pointer "
        type="range"
        id="character-length"
        name="character-length"
        min="1"
        max="24"
        value={length}
        onChange={handleLengthChange}
      />
    </div>
  );
}
