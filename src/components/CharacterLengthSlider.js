import React, { useContext } from 'react';
import { PasswordContext } from '../context/PasswordContext';

function CharacterLengthSlider() {
  const { length, setLength, options, generateRandomPassword } = useContext(PasswordContext);

  const handleLengthChange = (event) => {
    const newLength = event.target.value;
    setLength(newLength);
    generateRandomPassword(newLength, options);
  };

  return (
    <div className="mb-6">
      <label htmlFor="character-length" className="block text-sm font-medium text-gray-700 mb-1">Character length: {length}</label>
      <input
      className="w-full h-2 bg-gray-300 rounded-lg focus:bg-gray-400 cursor-pointer"
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

export default CharacterLengthSlider;
