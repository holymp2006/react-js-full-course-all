import { useState } from "react";
import styles from "./App.module.scss";
import ColorSquare from "./ColorSquare";
import SelectColorInput from "./SelectColorInput";

function App() {
  const [color, setColor] = useState("");
  const [hex, setHex] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <ColorSquare color={color} hex={hex} isDarkText={isDarkText} />
        <SelectColorInput
          color={color}
          setColor={setColor}
          setHex={setHex}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}
        />
      </div>
    </section>
  );
}

export default App;
