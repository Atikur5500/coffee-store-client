import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name,  quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Coffee Update Successfully.',
                        showConfirmButton: false,
                        timer: 3000,
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                }
            })


    }

    return (
        <div className="mt-2">
            <h2 className="text-2xl underline text-center">Update coffee: {name}</h2>
            <div>
                <div className="p-0 md:p-10 mt-5 bg-slate-300">
                    <div className=" flex-col lg:flex-row-reverse">
                        <div className="md:w-3/4 mx-auto p-5">
                            <form onSubmit={handleUpdateCoffee}>
                                <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Name</span>
                                        </label>
                                        <input type="text" name="name" defaultValue={name} placeholder="Enter coffee Name" className="input input-bordered rounded-sm" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Quantity</span>
                                        </label>
                                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Enter available quantity" className="input input-bordered rounded-sm" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Supplier</span>
                                        </label>
                                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered rounded-sm" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Taste</span>
                                        </label>
                                        <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered rounded-sm" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Category</span>
                                        </label>
                                        <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered rounded-sm" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Details</span>
                                        </label>
                                        <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered rounded-sm" required />
                                    </div>
                                    <div className="form-control lg:col-span-2">
                                        <label className="label">
                                            <span className="label-text text-lg">Photo URL</span>
                                        </label>
                                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo url" className="input input-bordered rounded-sm" required />
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <input type="submit" className="w-full btn btn-neutral rounded-sm" value="Update Coffee" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;