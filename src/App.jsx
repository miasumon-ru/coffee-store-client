
import { useLoaderData, useParams } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {

  const {id} = useParams()

  console.log(id)
  

  const loadedCoffees = useLoaderData()

  const [coffees, setCoffees] = useState(loadedCoffees)



  return (
    <>
   
  
      <h1 className='text-4xl font-bold'> Coffee Store : {coffees.length}  </h1>

      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard coffees={coffees} setCoffees={setCoffees} key={coffee._id} coffee = {coffee}></CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
