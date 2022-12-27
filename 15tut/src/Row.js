const Row = ({ item }) => {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return (
          <td key={key}>
            {typeof value === "object" ? JSON.stringify(value) : value}
          </td>
        );
      })}
    </tr>
  );
};

export default Row;
