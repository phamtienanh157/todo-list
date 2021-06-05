import PropTypes from "prop-types";
import { useRef } from "react";
import "./Input.scss";
Input.prototype = {
  handleChange: PropTypes.func,
  handleAdd: PropTypes.func,
};

export default function Input(props) {
  const { handleAdd, handleChange } = props;

  const input = useRef(null);

  const onClick = () => {
    handleAdd();
    input.current.value = null;
  };

  return (
    <form>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add your task"
          aria-label="Add your task"
          aria-describedby="button-add"
          onChange={handleChange}
          ref={input}
        />
        <button
          className="btn btn-primary"
          type="button"
          id="button-add"
          onClick={onClick}
        >
          <i className="fa fa-plus-circle"></i>
        </button>
      </div>
    </form>
  );
}
