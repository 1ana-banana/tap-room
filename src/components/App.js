import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import KombuchaControl from "./KombuchaControl";

export default function App() {
  const [isDrunk, setIsDrunk] = useState(false);

  const onHoverDrunk = (value) => {
    setIsDrunk(value);
  }

  return (
    <>
      <Header/>
      <main
        className={isDrunk ? "drunk" : ""}
      >
        <h1>Infamous Banana's Kombucha Den</h1>
        <p>We have two kombuchas on tap. We have bacteria in the back. If you'd like to brew your own stuff, feel free to try!</p>
        <p
          style={{fontSize: "50%"}}
        >
          Please do not drink responsibly.
        </p>
        <p>(Click the name of a kombucha to open the description, and taste it.)</p>
        <KombuchaControl />
      </main>
      <Footer
        onHoverDrunk={onHoverDrunk}
      />
    </>
  );
}