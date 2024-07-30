import React from "react";
import "./DeleteModal.css";

const DeleteModal = ({  onClose, onDelete }) => {
  return (
    <>
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this task?</p>
            <div className="modal-buttons">
              <button className="modal-button" onClick={onDelete}>
                Yes
              </button>
              <button className="modal-button" onClick={onClose}>
                No
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default DeleteModal;
