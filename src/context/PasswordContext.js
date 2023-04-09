import { createContext, useState, useEffect } from 'react';

export const PasswordContext = createContext();

export const PasswordProvider = ({ children }) => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8); // Default length
  const [options, setOptions] = useState({
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });

  const generateRandomPassword = (length, options) => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,./<>?';

    let characters = '';
    if (options.includeUppercase) characters += uppercase;
    if (options.includeLowercase) characters += lowercase;
    if (options.includeNumbers) characters += numbers;
    if (options.includeSymbols) characters += symbols;

    let result = '';

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setPassword(result);
  };

  useEffect(() => {
    generateRandomPassword(length, options);
  }, []); // Pass an empty dependency array to run this effect only on mount

  return (
    <PasswordContext.Provider value={{ password, setPassword, length, setLength, options, setOptions, generateRandomPassword }}>
      {children}
    </PasswordContext.Provider>
  );
};
