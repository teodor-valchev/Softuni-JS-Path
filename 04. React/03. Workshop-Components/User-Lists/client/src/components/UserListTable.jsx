import { useEffect, useState } from "react";
import UserListItem from "./UserListItem";
import * as userService from "../services/userService.js";
import NoUsersOverlap from "./NoUsersOverlap.jsx";
import NoContentOverlap from "./NoContentOverlap.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import UserDetailsModal from "./UserDetailsModal.jsx";
import UserDeleteModal from "./UserDeleteModal.jsx";
import UserCreateModal from "./UserCreateModal.jsx";

const UserListTable = () => {
    const [users, setUsers] = useState([]);
    const [user,setUser] = useState({})
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showInfo, setShowInfo] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showCreate, setShowCreate] = useState(false)
    const [deleteUser, setDeleteUser] = useState('')

    useEffect(() => {
        userService
            .getAll()
            .then((result) => setUsers(result))
            .catch((err) => {
                setIsError(true)
            }).finally(()=> setIsLoading(false));
    }, []);

    const onInfoClickHandler = (id) => {
        setShowInfo(true);
        userService.getOne(id).then(res => setUser(res))
    }

    const onDeleteClickHandler = (userId) => {
        setDeleteUser(userId);
        setShowDelete(true);
    };

    const deleteHandler = () => {
        setUsers(users.filter((u) => u._id !== deleteUser));
        userService.deleteUser(deleteUser).then(res => alert('User is successfully deleted!'))
    }

    const onCreateClickHandler = () => {
        setShowCreate(true);
    }

    const onCreate = (e) => {
        e.preventDefault()
        
        const formData = Object.fromEntries(new FormData(e.target))
        
        userService.createUser(formData).then(res => setUsers((state) => [...state, res]))

        setShowCreate(false)

    }

    console.log(users);
    return (
        <div className="table-wrapper">
            {isLoading && <LoadingSpinner />}

            {showInfo && (
                <UserDetailsModal
                    {...user}
                    onCloseModal={() => setShowInfo(false)}
                />
            )}

            {showDelete && (
                <UserDeleteModal
                    OnCloseModal={() => setShowDelete(false)}
                    onDeleteClickHandler={onDeleteClickHandler}
                    deleteHandler={deleteHandler}
                />
            )}

            {showCreate &&
                <UserCreateModal
                onCloseModal={() => setShowCreate(false)}
                onCreate={onCreate}
            />}

            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>
                            First name
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                ></path>
                            </svg>
                        </th>
                        <th>
                            Last name
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                ></path>
                            </svg>
                        </th>
                        <th>
                            Email
                            <svg
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                ></path>
                            </svg>
                        </th>
                        <th>
                            Phone
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                ></path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-down"
                                className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                ></path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <UserListItem
                            key={user._id}
                            {...user}
                            onInfoClickHandler={onInfoClickHandler}
                            onDeleteClickHandler={onDeleteClickHandler}
                        />
                    ))}
                </tbody>
            </table>
            {!users.length && !isError && <NoUsersOverlap />}
            {isError && <NoContentOverlap />}

            <button onClick={onCreateClickHandler} className="btn-add btn">Add new user</button>
        </div>
    );
};

export default UserListTable;
