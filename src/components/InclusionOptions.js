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
    <div className="mb-6 font-jbmono_normal font-light tracking-normal text-gray-700">
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="includeUppercase"
          name="includeUppercase"
          checked={options.includeUppercase}
          onChange={handleOptionChange}
        />
        <label htmlFor="includeUppercase" className="ml-2 ">
          Include Uppercase Letters
        </label>
      </div>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="includeLowercase"
          name="includeLowercase"
          checked={options.includeLowercase}
          onChange={handleOptionChange}
        />
<label htmlFor="includeLowercase" className="ml-2">
          Include Lowercase Letters
        </label>
      </div>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="includeNumbers"
          name="includeNumbers"
          checked={options.includeNumbers}
          onChange={handleOptionChange}
        />
<label htmlFor="includeNumbers" className="ml-2">
          Include Numbers
        </label>
      </div>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="includeSymbols"
          name="includeSymbols"
          checked={options.includeSymbols}
          onChange={handleOptionChange}
        />
        <label htmlFor="includeSymbols" className="ml-2">
          Include Symbols
        </label>
      </div>
    </div>
  );
}

