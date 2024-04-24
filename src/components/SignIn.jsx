import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const SignIn = () => {

    const {signIn} = useContext(AuthContext)


    const handleSignIn = event => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
         const password = form.password.value

         console.log(email, password)

        //  sign in

        signIn(email, password)
        .then(result => {
            console.log(result.user)

            const lastLoggedAt = result.user?.metadata?.lastSignInTime

            // update the user 
            const user = {
                email , lastLoggedAt
            }

            fetch('https://coffee-store-server-hhaqnjp5z-miasumon-rus-projects.vercel.app/users', {

                method: "PATCH",
                headers : {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(user)
                
            })
            .then(res => res.json())
            .then(data => console.log(data))


        })
        .catch(error => {
            console.log(error.message)
        })



        }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now</h1>
               
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
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
                          
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;