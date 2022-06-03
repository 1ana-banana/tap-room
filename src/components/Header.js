import React from "react";

const headerStyles = {
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto"
}

export default function Header() {
  return (
    <header>
      <div>
        <h1 style={headerStyles}>
          Epicodus: Infamous Banana's Kombucha Den
        </h1>
      </div>
    </header>
  );
}