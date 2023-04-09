import React, { useContext } from "react";
import { PasswordContext } from "../context/PasswordContext";

export default function GeneratedPass() {
  const { password } = useContext(PasswordContext);

  return (
    <div>
      <div className="p-4 ">
        <p className="text-xl">{password}</p>
      </div>
    </div>
  );
}
