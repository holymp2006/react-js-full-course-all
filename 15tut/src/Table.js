import styles from "./Table.module.scss";
import Row from "./Row";

const Table = ({ body }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {body && body[0]
            ? Object.keys(body[0]).map((key, id) => {
                return <th key={id}>{key}</th>;
              })
            : null}
        </tr>
      </thead>
      <tbody>
        {body.map((item) => {
          return <Row key={item.id} item={item} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
