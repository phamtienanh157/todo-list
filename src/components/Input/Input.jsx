import PropTypes from "prop-types";
import "./Input.scss";

Input.prototype = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default function Input(props) {
  const { onChange, onClick } = props;

  return (
    <form className="form">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Add your task"
          aria-label="Add your task"
          aria-describedby="button-add"
          onChange={onChange}
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
