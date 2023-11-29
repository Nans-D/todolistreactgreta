import "./ListItems.css";

const ListItems = () => {
  const arrTodo = ["toto", "tata", "titi"];
  return (
    <div className="list-items-container">
      <div>
        {arrTodo.map((item) => {
          return <div className="item">{item}</div>;
        })}
      </div>
    </div>
  );
};

export default ListItems;
