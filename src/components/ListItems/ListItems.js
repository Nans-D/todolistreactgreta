import { useState } from "react";
import "./ListItems.css";

const ListItems = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(["toto", "tata", "titi"]);

  const addTask = (e) => {
    e.preventDefault();
    const newArray = JSON.parse(JSON.stringify(tasks));
    newArray.push(newTask);
    setTasks(newArray);
  };

  const deleteTask = (index) => {
    const newArray = JSON.parse(JSON.stringify(tasks));
    newArray.splice(index, 1);
    setTasks(newArray);
    console.log(newArray);
  };

  return (
    <div className="full-container">
      <h1>TO DO LIST</h1>
      <div className="list-items-container">
        {tasks.map((item, index) => {
          return (
            <div key={index} className="item">
              <img
                onClick={() => {
                  deleteTask(index);
                }}
                src="https://cdn4.iconfinder.com/data/icons/flat-icons-for-web-and-seo/342/12-512.png"
                alt=""
              />
              {item}
            </div>
          );
        })}
      </div>
      <form className="form-container" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Entrez votre tache"
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <button onClick={addTask}>Envoyer</button>
      </form>
    </div>
  );
};

export default ListItems;
