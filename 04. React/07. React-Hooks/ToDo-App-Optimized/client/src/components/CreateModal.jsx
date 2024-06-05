import { useContext } from "react";
import { TodoContext } from "./contexts/TodoContext";

const CreateModal = () => {
    const { OnCreateToDoHandler } = useContext(TodoContext);
    
    return (
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={OnCreateToDoHandler} className="modal-body">
                        
                    <input type="text" defaultValue='dsds' name='text' value='dwwd' />
                    </form>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary">
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
    );
}

export default CreateModal