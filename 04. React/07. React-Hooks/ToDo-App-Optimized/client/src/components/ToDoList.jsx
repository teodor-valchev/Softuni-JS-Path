import ToDoItem from "./ToDoItem";
import LoadingSpinner from "./LoadingSpinner.jsx";
import { useEffect, useState } from "react";
import { TodoContext } from "./contexts/TodoContext.js";
import CreateModal from "./CreateModal.jsx";

function ToDoList() {
    const [todos, setTodo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showCreateModal, setShowCreateModal] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/todos")
            .then((data) => data.json())
            .then((result) => {
                setTodo(Object.values(result));
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    const onChangeStatusHandler = (todoId) => {
        setTodo((state) =>
            state.map((todo) =>
                todoId === todo._id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            )
        );
    };

    const OnCreateToDoHandler = (e) => {
        e.preventDefault();
        console.log('hi');
    }

    return (
        <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
                <button
                    className="btn"
                    onClick={() => setShowCreateModal(!showCreateModal)}
                >
                    + Add new Todo
                </button>
            </div>
            <TodoContext.Provider value={{onChangeStatusHandler,OnCreateToDoHandler}}>
                {showCreateModal && <CreateModal />}

                <div className="table-wrapper">
                    {isLoading ? <LoadingSpinner /> : ""}
                    {/* Todo list table  */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header-task">Task</th>
                                <th className="table-header-status">Status</th>
                                <th className="table-header-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Todo item */}
                            {todos.map((todo) => (
                                <ToDoItem
                                    key={todo._id}
                                    id={todo._id}
                                    title={todo.text}
                                    isCompleted={todo.isCompleted}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </TodoContext.Provider>
        </section>
    );
}

export default ToDoList;
