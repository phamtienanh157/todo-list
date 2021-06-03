import PropTypes from "prop-types";
import { useState } from "react";
import "./Input.scss";

Input.prototype = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default function Input(props) {
  const { callBack, handleAdd } = props;
  const [added, setAdded] = useState(false);

  const sendData = (e) => {
    callBack(e.target.value);
  };

  const onClick = () => {
    handleAdd();
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
  };

  return (
    <form className="form">
      <div class="input-group mb-3">
        <input
          id="input"
          type="text"
          class="form-control"
          placeholder="Add your task"
          aria-label="Add your task"
          aria-describedby="button-add"
          onChange={(e) => sendData(e)}
        />
        <button
          class="btn btn-primary"
          type="button"
          id="button-add"
          onClick={onClick}
        >
          <i class="fa fa-plus-circle"></i>
        </button>
      </div>
    </form>
  );
}
