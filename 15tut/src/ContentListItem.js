import styles from "./ContentListItem.module.scss";

const ContentListItem = ({ item }) => {
  return <li className={styles.item}>{`${JSON.stringify(item)}`}</li>;
};

export default ContentListItem;
