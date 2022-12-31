import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

export default function Modal({ isOpened, children, onClose }) {
  if (!isOpened) return null;
  else {
    return ReactDom.createPortal(
      <div className="modal-container">
        <div className="row modal-header">
          <div className="col d-flex justify-content-end">
            <button className="btn btn-warning btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>,
      document.getElementById("portal")
    );
  }
}
