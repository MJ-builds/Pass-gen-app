import React, { useContext } from "react";
import { PasswordContext } from "../context/PasswordContext";

export default function GeneratedPass() {
  const { password } = useContext(PasswordContext);

  return (
    <div className="mb-6">
      <div className="bg-gray-200 p-4 rounded-lg">
        <p className="text-gray-700 font-mono">{password}</p>
      </div>
    </div>
  );
}
