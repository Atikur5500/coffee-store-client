import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './components/CoffeeCard';
import { useState, useEffect } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  useEffect(() => {
    // Update the state with the loadedCoffees when it changes
    setCoffees(loadedCoffees);
  }, [loadedCoffees]);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 p-5'>
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} />
      ))}
    </div>
  );
}

export default App;
