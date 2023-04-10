import React, { useContext } from "react";
import { PasswordContext } from "../context/PasswordContext";

export default function InclusionOptions() {
  const { options, setOptions, length, generateRandomPassword } =
    useContext(PasswordContext);

  const handleOptionChange = (event) => {
    const { name, checked } = event.target;
    setOptions((prevOptions) => ({ ...prevOptions, [name]: checked }));
    generateRandomPassword(length, { ...options, [name]: checked });
  };

  return (
    <div className="custom-checkbox mb-6 font-jbmono_normal font-light tracking-normal">
      <div className=" flex items-center mb-2">
        <input
          type="checkbox"
          id="includeUppercase"
          name="includeUppercase"
          checked={options.includeUppercase}
          onChange={handleOptionChange}
        />
        <label htmlFor="includeUppercase">Include Uppercase Letters</label>
      </div>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="includeLowercase"
          name="includeLowercase"
          checked={options.includeLowercase}
          onChange={handleOptionChange}
        />
        <label htmlFor="includeLowercase">Include Lowercase Letters</label>
      </div>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="includeNumbers"
          name="includeNumbers"
          checked={options.includeNumbers}
          onChange={handleOptionChange}
        />
        <label htmlFor="includeNumbers">Include Numbers</label>
      </div>
      <div className=" items-center mb-2">
        <input
          type="checkbox"
          id="includeSymbols"
          name="includeSymbols"
          checked={options.includeSymbols}
          onChange={handleOptionChange}
        />
        <label htmlFor="includeSymbols">Include Symbols</label>
      </div>
    </div>
  );
}
