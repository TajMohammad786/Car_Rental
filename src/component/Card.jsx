import React from 'react';
import car1 from '../Images/1.jpg';
import car2 from '../Images/2.jpg';
import car3 from '../Images/44.jpg';
import car4 from '../Images/4.jpg';


const card = () => {

    // Sample car data
  const cars = [
    {
      id: 1,
      name: 'Toyota Corolla EA',
      image: car1,
      price: '$50/day',
      features: ['Automatic Transmission', 'Air Conditioning', 'Seats 5']
    },
    {
      id: 2,
      name: 'Honda Civic',
      image: car2,
      price: '$45/day',
      features: ['Automatic Transmission', 'Air Conditioning', 'Seats 5']
    },
    {
      id: 3,
      name: 'Honda Civic',
      image: car3,
      price: '$45/day',
      features: ['Automatic Transmission', 'Air Conditioning', 'Seats 5']
    },
    {
      id: 4,
      name: 'Honda Civic',
      image: car4,
      price: '$45/day',
      features: ['Automatic Transmission', 'Air Conditioning', 'Seats 5']
    },
   
    // Add more cars as needed
  ];

  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 ">
          {cars.map(car => (
            
      <div key={car.id} className={` shadow-md rounded-lg p-4 text-white border-2 bg-white bg-opacity-10  `}>
              <img src={car.image} alt={car.name} className="w-full h-auto mb-4 rounded-lg" />
              <h2 className="text-lg font-semibold">{car.name}</h2>
              <p className="text-sm text-gray-100">{car.price}</p>
              <ul className="mt-2">
                {car.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 3a1 1 0 00-.293.057l-4.5 1.5A1 1 0 003 6.5V8a1 1 0 001 1h12a1 1 0 001-1V6.5a1 1 0 00-1.207-.943l-4.5-1.5A1 1 0 0011 3h-2z" clipRule="evenodd" />
                      <path d="M4 10a2 2 0 113.999-.001A2 2 0 014 10zm7 0a2 2 0 113.999-.001A2 2 0 0111 10zm-7 2a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 2a2 2 0 113.999-.001A2 2 0 014 14zm7 0a2 2 0 113.999-.001A2 2 0 0111 14z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </div>
  )
}

export default card
