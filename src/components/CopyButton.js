import React, { useRef, useEffect, useContext } from 'react';
import { PasswordContext } from '../context/PasswordContext';
import ClipboardJS from 'clipboard';

export default function CopyButton() {
  const buttonRef = useRef(null);
  const { password } = useContext(PasswordContext);

  useEffect(() => {
    const clipboard = new ClipboardJS(buttonRef.current);

    return () => {
      clipboard.destroy();
    };
  }, [password]);

  return (
    <button 
    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
    ref={buttonRef} 
    data-clipboard-text={password}>
      Copy to clipboard
    </button>
  );
}

