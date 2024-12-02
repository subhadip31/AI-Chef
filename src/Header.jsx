import React from "react";
import chef from "./assets/ChefBiteBuddyIcon.png";

export default function Header() {
  return (
    <header className="header">
      <div>
        <img src={chef} alt="icon" />
      </div>
      <h1>Bite Buddy</h1>
    </header>
  );
}
