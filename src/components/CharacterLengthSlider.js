import React, { useContext } from 'react';
import { PasswordContext } from '../context/PasswordContext';

export default function CharacterLengthSlider() {
  const { length, setLength, options, generateRandomPassword } = useContext(PasswordContext);

  const handleLengthChange = (event) => {
    const newLength = event.target.value;
    setLength(newLength);
    generateRandomPassword(newLength, options);
  };

  return (
    <div className="mb-6">
      <label htmlFor="character-length" className="text-sm font-medium -mt-5 mb-5 flex items-center justify-between">Character length <div className='text-green font-bold text-xl'>{length}</div></label>
      <input
      className="w-full h-2 cursor-pointer "
        type="range"
        id="character-length"
        name="character-length"
        min="1"
        max="32"
        value={length}
        onChange={handleLengthChange}
      />
    </div>
  );
}
