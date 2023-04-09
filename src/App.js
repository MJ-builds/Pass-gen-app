import React from 'react';

import { PasswordProvider } from './context/PasswordContext';
import CharacterLengthSlider from './components/CharacterLengthSlider';
import CopyButton from './components/CopyButton';
import PasswordStrengthMeter from './components/PasswordStrengthMeter';
import InclusionOptions from './components/InclusionOptions';
import GeneratedPass from './components/GeneratedPass';


function App() {
  return (
    <PasswordProvider>
    <div className='MAIN-DIV bg-darkgrey font-jbmono_normal font-light tracking-normal text-lightgrey'>
       <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12' >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <h1 className="HEADER font-bold text-sm text-center mb-5">Password Generator</h1>
        <div className = 'PASS-CONT font-bold mb-5 bg-semidarkgrey relative '><GeneratedPass /></div>
          <div className="CONTAINER bg-semidarkgrey relative px-4 py-10 sm:p-20">

          
        <CharacterLengthSlider />
        <InclusionOptions />
        <PasswordStrengthMeter />
        <CopyButton />
      </div>
      </div>
      </div>
      </div>
    </PasswordProvider>
  );
}

export default App;
