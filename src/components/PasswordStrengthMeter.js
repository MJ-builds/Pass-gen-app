import React, { useContext, useEffect } from 'react';
import { PasswordContext } from '../context/PasswordContext';
import zxcvbn from 'zxcvbn';

export default function PasswordStrengthMeter() {
  const { password } = useContext(PasswordContext);

  const passwordStrength = zxcvbn(password);
  const score = passwordStrength.score;

  const getStrengthLabel = (score) => {
    switch (score) {
      case 0:
      case 1:
        return 'Weak';
      case 2:
        return 'Average';
      case 3:
        return 'Strong';
      case 4:
        return 'Strongest';
      default:
        return '';
    }
  };

return (
    <div className="mb-6">
  {/* <div className="bg-gray-200 p-4 rounded-lg">
<p className="text-gray-700 font-mono">{password}</p> */}
       
        <p className = "mb-2"></p>
        <p className="text-gray-700 font-bold">
          Password strength: {getStrengthLabel(score)} ({score} / 4)
        </p>
   </div>

  );
};

