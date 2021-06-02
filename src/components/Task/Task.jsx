import PropTypes from "prop-types";
import "./Task.scss";

Task.prototype = {
  task: PropTypes.string,
  handleCheck: PropTypes.func,
  handleClick: PropTypes.func,
};

export default function Task(props) {
  const { task, handleCheck, handleClick } = props;
  return (
    <div className="task">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        onClick={handleCheck}
      />
      <p>{task.value}</p>
      <span onClick={handleClick}>
        <i className="fa fa-times"></i>
      </span>
    </div>
  );
}
