import styles from "./ColorSquare.module.scss";

const ColorSquare = ({ color, hex, isDarkText }) => {
  return (
    <div
      className={`${styles.section} ${isDarkText ? styles["dark-text"] : ""}`}
      style={{ backgroundColor: color }}
    >
      <p>{color ? color : "Empty Value"}</p>
      <p>{hex ? hex : null}</p>
    </div>
  );
};

export default ColorSquare;
