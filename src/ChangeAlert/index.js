import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>
            It looks like you changed your TODOs in another browser tab or
            window.
          </p>
          <p>Do you want to sync your TODOs?</p>
          <button className="TodoForm-button--add" onClick={toggleShow}>
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
