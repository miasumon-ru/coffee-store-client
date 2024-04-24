import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

  

        // creating User 
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            const createdAt = result.user?.metadata?.creationTime

            const user = {name, email , createdAt }

            // new user has been created

            fetch("https://coffee-store-server-hhaqnjp5z-miasumon-rus-projects.vercel.app/users", {
                method: "POST",
                headers : {
                    "content-type" : " application/json"
                },
                body : JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    console.log(data)
                    alert("User Added Successfully")
                }
            })

        })
        .catch(error => {
            console.log(error.message)
        })

        


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now</h1>
                 
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Name </span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                          
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                          
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary"> Sign Up </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;