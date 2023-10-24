import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, details, photo } = coffee;

    const handleDelete = (_id) =>{
        console.log(_id)
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
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(item => item._id !== _id);
                            setCoffees(remaining)
                        }
                 })
            }
        })
    }

    return (
        <div>
            <div className="card card-side h-full rounded-sm bg-base-100 border shadow-xl w-full">
                <figure className="w-full lg:w-1/4 h-full">
                    <img src={photo} alt={name} style={{ width: '100%', height: 'auto' }} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                </div>
                <div className="flex items-center">
                    <div className="btn-group btn-group-vertical space-y-3 rounded-sm p-5">
                        <button className="btn">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn">X</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CoffeeCard;