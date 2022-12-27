const Row = ({ item }) => {
  return (
    <tr>
      {item
        ? Object.values(item).map((value, id) => {
            return (
              <td key={id}>
                {typeof value === "object" ? JSON.stringify(value) : value}
              </td>
            );
          })
        : null}
    </tr>
  );
};

export default Row;
