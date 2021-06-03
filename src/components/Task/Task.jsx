import PropTypes from "prop-types";
import "./Task.scss";

Task.prototype = {
  task: PropTypes.string,
  handleCheck: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default function Task(props) {
  const { task, handleCheck, handleDelete } = props;
  const getTextClass = () => {
    if (task.state) return "completed";
  };
  console.log(getTextClass());
  return (
    <div className="task">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        onClick={() => handleCheck(task)}
        checked={task.state}
      />
      <p className={getTextClass()}>{task.value}</p>
      <span onClick={() => handleDelete(task.id)}>
        <i className="fa fa-times"></i>
      </span>
    </div>
  );
}
