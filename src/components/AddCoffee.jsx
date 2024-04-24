import Swal from 'sweetalert2'

const AddCoffee = () => {

    // https://i.postimg.cc/Z5w7PSWq/1.png
    // https://i.postimg.cc/q7gmj5Kx/2.png
    // https://i.postimg.cc/TPStSJqM/3.png
    // https://i.postimg.cc/k4bTdRfV/4.png
    // https://i.postimg.cc/L4jxCfJw/5.png
    // https://i.postimg.cc/jdXZKbQh/6.png
    

    const handleAddCoffee = (event) => {

        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = { name, quantity, supplier, taste, category, details, photo
        }

        console.log(newCoffee)

        // sending the newCoffee to the server via post method

        fetch('https://coffee-store-server-hhaqnjp5z-miasumon-rus-projects.vercel.app/coffee', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee has been successfully added',
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
                    <h1 className="text-5xl font-bold">Add Coffee</h1>

                </div>
                <div className="card shrink-0 w-full  bg-base-100">
                    <form onSubmit={handleAddCoffee} className="card-body rounded-3xl border w-full bg-[#F4F3F0]">


                        {/* name and quantity row */}
                        <div className="flex w-full gap-4">
                            <div className="form-control w-full  ">
                                <label className="label">
                                    <span className="label-text">Coffee Name</span>
                                </label>
                                <input type="text" name="name"  placeholder="Coffee Name" className="input input-bordered  " required />
                            </div>

                            <div className="form-control w-full  ">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered " required />

                            </div>
                        </div>
                        {/* supplier and taste row */}
                        <div className="flex w-full gap-4 ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" name="supplier"  placeholder="Supplier" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input type="text" name="taste" placeholder="Taste" className="input input-bordered" required />

                            </div>
                        </div>
                        {/* category and details row */}
                        <div className="flex w-full gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name="category"  placeholder="Category" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" name="details" placeholder="Details" className="input input-bordered" required />

                            </div>

                        </div>

                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />

                            </div>

                      


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Coffee</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;