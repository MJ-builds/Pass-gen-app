import React from 'react';
import { PasswordProvider } from './context/PasswordContext';
import CharacterLengthSlider from './components/CharacterLengthSlider';
import CopyButton from './components/CopyButton';
import PasswordStrengthMeter from './components/PasswordStrengthMeter';
import InclusionOptions from './components/InclusionOptions';
import styles from './App.module.css';

function App() {
  return (
    <PasswordProvider>
       <div className={`min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 ${styles.App}`}>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h1 className="text-4xl font-bold text-center mb-8">Password Generator</h1>
            <PasswordStrengthMeter />
        <CharacterLengthSlider />
        <InclusionOptions />
        
        <CopyButton />
      </div>
      </div>
      </div>
    </PasswordProvider>
  );
}

export default App;
