import PropTypes from "prop-types";
import Task from "./Task/Task";

ListTask.prototype = {
  listTask: PropTypes.array,
  handleCheck: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default function ListTask(props) {
  const { listTask, handleCheck, handleDelete } = props;
  return (
    <div>
      {listTask.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
