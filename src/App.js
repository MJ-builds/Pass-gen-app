import React from "react";

import { PasswordProvider } from "./context/PasswordContext";
import CharacterLengthSlider from "./components/CharacterLengthSlider";
import CopyButton from "./components/CopyButton";
import PasswordStrengthMeter from "./components/PasswordStrengthMeter";
import InclusionOptions from "./components/InclusionOptions";
import GeneratedPass from "./components/GeneratedPass";
import GeneratePasswordButton from "./components/GeneratePasswordButton";

import "./custom.css";


function App() {
  return (
    <PasswordProvider>
      <div className="MAIN-DIV bg-darkgrey font-jbmono_normal font-light tracking-normal text-lightgrey">
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <h1 className="HEADER font-normal text-center mb-5 text-grey text-xl tracking-wider">
              Password Generator
            </h1>
            <div className="PASS-CONT font-bold mb-5 bg-semidarkgrey flex items-center justify-between min-w-[20rem] sm:min-w-[25rem] md:min-w-[30rem]">
              <GeneratedPass />
              <div>
                <CopyButton />
              </div>
            </div>
            <div className="CONTAINER bg-semidarkgrey min-w-[20rem] sm:min-w-[25rem] md:min-w-[30rem]">
            <div className="px-10 py-10">
              <CharacterLengthSlider/>
              <InclusionOptions/>
              <PasswordStrengthMeter />
              <GeneratePasswordButton />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </PasswordProvider>
  );
}

export default App;
