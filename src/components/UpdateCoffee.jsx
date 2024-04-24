import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";




const UpdateCoffee = () => {

    const [coffee , setCoffee] = useState({})

    const  {id} = useParams()
  


    useEffect(()=> {
        fetch(`https://coffee-store-server-hhaqnjp5z-miasumon-rus-projects.vercel.app/coffee/${id}`)
        .then(res => res.json())
        .then(data => {
            setCoffee(data)
        })

    },[])

    const { name, _id, quantity, supplier, taste, category, details, photo } = coffee

    const handleUpdateCoffee = (event) => {

        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo
        }

        console.log(updatedCoffee)

        // sending the updatedCoffee to the server via post method

        fetch(`https://coffee-store-server-hhaqnjp5z-miasumon-rus-projects.vercel.app/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {

            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee has been successfully updated',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })

                  form.reset()
            }
        } )


    }

 
    return (
        <div className="">
            <div className="hero-content flex-col w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update Coffee</h1>

                </div>
                <div className="card shrink-0 w-full  bg-base-100">
                    <form onSubmit={handleUpdateCoffee} className="card-body rounded-3xl border w-full bg-[#F4F3F0]">


                        {/* name and quantity row */}
                        <div className="flex w-full gap-4">
                            <div className="form-control w-full  ">
                                <label className="label">
                                    <span className="label-text">Coffee Name</span>
                                </label>
                                <input type="text" defaultValue={name}  name="name"  placeholder="Coffee Name" className="input input-bordered  " required />
                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" defaultValue={quantity} name="quantity" placeholder="Quantity" className="input input-bordered " required />

                            </div>
                        </div>
                        {/* supplier and taste row */}
                        <div className="flex w-full gap-4 ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" defaultValue={supplier} name="supplier"  placeholder="Supplier" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input type="text" defaultValue={taste} name="taste" placeholder="Taste" className="input input-bordered" required />

                            </div>
                        </div>
                        {/* category and details row */}
                        <div className="flex w-full gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" defaultValue={category} name="category"  placeholder="Category" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" defaultValue={details} name="details" placeholder="Details" className="input input-bordered" required />

                            </div>

                        </div>

                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" defaultValue={photo} name="photo" placeholder="Photo URL" className="input input-bordered" required />

                            </div>

                      


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Coffee</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;