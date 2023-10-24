import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {


        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const createdAt = result?.user?.metadata?.creationTime;
                const user = { email, password, createdAt:createdAt };
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            console.log('User added database')
                        }
                    })
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full flex-col lg:flex-row-reverse">
                    <div className="card rounded-sm lg:w-2/4  shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SingUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;