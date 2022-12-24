import styles from "./SelectColorInput.module.scss";
import colorNames from "colornames";

function SelectColorInput({
  color,
  setColor,
  setHex,
  isDarkText,
  setIsDarkText,
}) {
  return (
    <>
      <label>Add color name</label>
      <input
        className={styles.input}
        type="text"
        placeholder="Add color name"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHex(colorNames(e.target.value));
        }}
        autoFocus
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </>
  );
}

export default SelectColorInput;
