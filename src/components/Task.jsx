import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";

const Task = ({ id, index, name, editTask, deleteTask }) => {
  return (
    <div key={index} className="task-row">
      <div className="id-no">
        <p>{id}</p>
      </div>
      <div className="task-name">
        <p>{name}</p>
      </div>
      <div className="status">
        <p>
          {" "}
          <select>
            <option value="Pending">Pending</option>

            <option value="Done">Done</option>

            <option value="In Process">In Process</option>
          </select>
        </p>
      </div>
      <div className="edit">
        <button id="butn" onClick={() => editTask(index)}>
          <BsPencilSquare size={20} />
        </button>
      </div>
      <div className="remove">
        <button id="butn" onClick={() => deleteTask(index)}>
          <RiDeleteBin5Line size={20} />
        </button>
      </div>
    </div>
  );
};

export default Task;
