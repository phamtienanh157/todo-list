import PropTypes from "prop-types";
import { useRef } from "react";
import "./Input.scss";
Input.prototype = {
  callBack: PropTypes.func,
  handleAdd: PropTypes.func,
};

export default function Input(props) {
  const { callBack, handleAdd } = props;

  const input = useRef(null);

  const sendData = (e) => {
    callBack(e.target.value);
  };

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
          onChange={(e) => sendData(e)}
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
