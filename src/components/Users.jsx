
import { useState } from "react";
import { useLoaderData } from "react-router-dom";




const Users = () => {

  

    const loadedUsers = useLoaderData()
    console.log(loadedUsers)

    const [coffeeUsers , setCoffeeUsers] = useState(loadedUsers)

    // handleDelete

    const handleDelete = (_id) => {

         console.log(_id)

         fetch(`https://coffee-store-server-hhaqnjp5z-miasumon-rus-projects.vercel.app/users/${_id}`, {
            method: "DELETE"
         })
         .then(res => res.json() )
         .then(data => {
            if(data.deletedCount > 0 ){

               

                console.log("user deleted successfully")

                const remaining = coffeeUsers.filter(user => user._id !== _id)
                setCoffeeUsers(remaining)
            }
         } )
    }
    return (
        <div>
            <h1 className="text-4xl"> Users : {coffeeUsers.length} </h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> Number </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Creation Time</th>
                            <th>Last Logged In</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            coffeeUsers.map((user, index) => <tr key={user._id}>
                                <th> {index + 1} </th>
                                <td> {user.name} </td>
                                <td > {user.email} </td>                           
                                <td> {user.createdAt} </td>
                                <td> {user?.lastLoggedAt} </td>
                                <td > 

                                    <button className="btn mr-4 btn-primary"> Edit </button>
                                    <button onClick={()=> handleDelete(user._id)} className="btn btn-primary"> Delete </button>
                                    

                                </td>
                            </tr>  )
                        }
                                    
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Users;