import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { name, _id, quantity, supplier, taste, photo } = coffee

    // handle delete

    const handleDelete = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-hhaqnjp5z-miasumon-rus-projects.vercel.app/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {



                        if (data.deletedCount > 0) {


                            Swal.fire({
                                title: "Deleted!",
                                text: "Coffee has been deleted.",
                                icon: "success"
                            });

                            const remaining = coffees.filter(coffee => coffee._id !== _id)

                            setCoffees(remaining)

                        }

                    })


            }
        });

    }
    return (
        <div>

            <div className="card card-side bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-2 ">
                <figure><img className='max-w-xl object-cover md:h-96' src={photo} alt="Movie" /></figure>
                <div className="card-body">

                    <div className='flex justify-between gap-4'>
                        <div>
                            <h2 className="card-title"> {name} </h2>
                            <p> {quantity} </p>
                            <p> {supplier} </p>
                            <p> {taste} </p>
                        </div>

                        <div className="join join-vertical space-y-4">
                            <button className="btn join-item"> View </button>
                            <Link className='btn join-item' to={`/updateCoffee/${_id}`}>
                                Edit
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item"> Delete </button>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object.isRequired,
    coffees: PropTypes.array.isRequired,
    setCoffees: PropTypes.func.isRequired
}

export default CoffeeCard;