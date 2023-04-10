import React, { useContext } from "react";
import { PasswordContext } from "../context/PasswordContext";

export default function GeneratedPass() {
  const { password } = useContext(PasswordContext);

  const placeholderStyle = password ? "" : "text-grey italic text-xs opacity-40";

  return (
    <div>
      <div className="p-4">
        <p className={`text-2xl font-normal ml-5 break-all ${placeholderStyle}`}>
        {password || "To Generate: Tick Options > 0 & Length > 0"}</p>
      </div>
    </div>
  );
}
