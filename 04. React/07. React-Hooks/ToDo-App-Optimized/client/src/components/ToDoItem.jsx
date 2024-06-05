import { useContext } from "react";
import { TodoContext } from "./contexts/TodoContext";

function ToDoItem({ title, isCompleted, id }) {
    const onChangeStatusHandler = useContext(TodoContext);

    return (
        <tr className={`todo ${isCompleted ? "is-completed" : ""}`}>
            <td>{title}</td>
            <td>{isCompleted ? "Complete" : "Incomplete"}</td>
            <td className="todo-action">
                <button onClick={() => onChangeStatusHandler(id)} className="btn todo-btn">
                    Change status
                </button>
            </td>
        </tr>
    );
}

export default ToDoItem
