import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    useEffect(() => {
        // Update the state with the loadedUsers when it changes
        setUsers(loadedUsers);
    }, [loadedUsers]);

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                            const remaining = users.filter((user) => user._id !== id); // Use _id consistently
                            setUsers(remaining);
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting user:", error);
                    });
            }
        });
    }

    return (
        <div>
            <h2 className="text-center text-2xl mt-2">Users: {loadedUsers.length}</h2>
            <div className="overflow-x-auto lg:p-5 border mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Created At</th>
                            <th>Last Logged At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="p-5">
                        {
                            users?.map((user) => (
                                <tr key={user._id}>
                                    <th>{user._id}</th>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.lastLoggedAt}</td>
                                    <td>
                                        <button onClick={() => handleDelete(user._id)} className="btn">X</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
