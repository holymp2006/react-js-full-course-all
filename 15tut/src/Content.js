import ContentListItem from "./ContentListItem";

const Content = ({ body }) => {
  return (
    <ul>
      {body.map((item) => {
        return <ContentListItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default Content;
