function ToDoItem({ title, isCompleted, onChangeStatusHandler, id }) {
    function OnChangeStatus() {
        onChangeStatusHandler(id);
    }

    return (
        <tr className={`todo ${isCompleted ? "is-completed" : ""}`}>
            <td>{title}</td>
            <td>{isCompleted ? "Complete" : "Incomplete"}</td>
            <td className="todo-action">
                <button onClick={OnChangeStatus} className="btn todo-btn">
                    Change status
                </button>
            </td>
        </tr>
    );
}

export default ToDoItem
