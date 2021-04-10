import React from "react";

const TaskList = ({ tasks, handleDelete, handleComplete }) => {
  return (
    <div>
      {tasks.map((el) => (
        <div>
          <h2 id={el.isDone ? "done" : ""}> {el.action} </h2>
          <button onClick={() => handleComplete(el.id)}>
            {" "}
            {el.isDone ? "Undo" : "Complete"}{" "}
          </button>
          <button onClick={() => handleDelete(el.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
