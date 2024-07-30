import React, { useState } from "react";
import "./About.css";
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import Task from "../components/Task";
import DeleteModal from "../components/DeleteModal";

const About = () => {
  const [showInput, setShowInput] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ id: "", name: "" });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const addTask = () => {
    setShowInput(true);
    setTask({ id: "", name: "" });
    setEditMode(false);
  };

  const editTask = (index) => {
    const existingTask = tasks[index];
    const newId = prompt("Edit Task ID:", existingTask.id);
    const newName = prompt("Edit Task Name:", existingTask.name);

    if (newId && newName) {
      const updatedTask = { ...existingTask, id: newId, name: newName };
      const idExists = tasks.some((t, i) => t.id === newId && i !== index);

      if (idExists) {
        alert("This id is already there.");
      } else {
        const updatedTasks = tasks.map((t, i) =>
          i === index ? updatedTask : t
        );
        setTasks(updatedTasks);
      }
    }
  };

  const deleteTask = (index) => {
    setShowDeleteModal(true);
    setTaskToDelete(index);
  };

  const confirmDeleteTask = () => {
    if (taskToDelete !== null) {
      const updatedTasks = tasks.filter((_, i) => i !== taskToDelete);
      setTasks(updatedTasks);
      setTaskToDelete(null);
    }
    setShowDeleteModal(false);
  };

  const cancelDeleteTask = () => {
    setShowDeleteModal(false);
    setTaskToDelete(null);
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      const updatedTasks = tasks.map((t, index) =>
        index === editIndex ? task : t
      );
      setTasks(updatedTasks);
      setShowInput(false);
      setEditMode(false);
    } else {
      const idExists = tasks.some((t) => t.id === task.id);
      if (idExists) {
        alert("This id is already there.");
      } else {
        setTasks([...tasks, task]);
        setShowInput(false);
      }
    }
    setTask({ id: "", name: "" });
  };

  return (
    <div>
      <div className="container">
        <h1>TODO List Demo App</h1>
        <button id="btn" onClick={addTask}>
          {editMode ? "Edit Task" : "Add Task"}
        </button>
        {showInput && (
          <form onSubmit={handleSubmit} className="info-form">
            <label htmlFor="id">Enter Id No.</label>
            <input
              type="number"
              id="id"
              name="id"
              value={task.id}
              onChange={changeInput}
            />
            <label htmlFor="name">Task Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={task.name}
              onChange={changeInput}
            />
            <button type="submit">
              {editMode ? "Update Task" : "Add Task"}
            </button>
          </form>
        )}
        <div className="info-head">
          <div className="id-no">
            <h4>#</h4>
          </div>
          <div className="task-name">
            <h4>Task Name</h4>
          </div>
          <div className="status">
            <h4>Status</h4>
          </div>
          <div className="edit">
            <h4>Edit</h4>
          </div>
          <div className="remove">
            <h4>Remove</h4>
          </div>
        </div>
        <div className="horizontal-line"></div>
        {tasks.map((task, index) => (
          <Task
            key={index}
            {...task}
            index={index}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
        {showDeleteModal && (
          <DeleteModal
            onClose={cancelDeleteTask}
            onDelete={confirmDeleteTask}
          />
        )}
      </div>
    </div>
  );
};

export default About;
