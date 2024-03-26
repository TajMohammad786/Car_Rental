import React, { useState } from 'react';
import './App.css';
import Card from './component/Card';
import Home from './Images/Home.jpg';
import SearchComponent from './component/SearchComponent';
import { FaCar, FaRoad, FaGasPump, FaCreditCard, FaBars, FaTimes } from 'react-icons/fa';
import ContactUs from './component/ContactUs';


function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
       <div className='gradient-background'>
        <nav>
          <div className="flex justify-between items-center px-4 py-2 md:px-10 md:py-4 bg-black text-gray-200 shadow-md">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-bold">Car Rental Company</span>
            </div>
            <div className="md:hidden">
              {isMobileMenuOpen ? (
                <FaTimes className="text-white text-2xl cursor-pointer" onClick={toggleMobileMenu} />
              ) : (
                <FaBars className="text-white text-2xl cursor-pointer" onClick={toggleMobileMenu} />
              )}
            </div>
            <ul className={`hidden md:flex space-x-4 md:space-x-10 bg-black text-gray-200`}>
              <li className='cursor-pointer'>About</li>
              <li className='cursor-pointer'>Services</li>
              <li className='cursor-pointer'>Contact</li>
            </ul>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul className="md:hidden bg-black text-gray-200 text-center py-2">
              <li className='block py-2 border-b border-gray-400 cursor-pointer' onClick={toggleMobileMenu}>About</li>
              <li className='block py-2 border-b border-gray-400 cursor-pointer' onClick={toggleMobileMenu}>Services</li>
              <li className='block py-2 cursor-pointer' onClick={toggleMobileMenu}>Contact</li>
            </ul>
          )}
        </nav>

        {/* Home Page with Background Image */}
        <header className="bg-cover bg-center h-screen relative" style={{backgroundImage : `url(${Home})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col mt-16 items-center text-white">
            <h1 className="m-3 text-center text-3xl md:text-5xl font-bold">Welcome to our Car Rental Company!</h1>
            <p className="text-lg">Rent your dream car at affordable prices.</p>
            <div className='mt-60 md:mt-72'>
              <SearchComponent />
            </div>
          </div>
        </header>

        {/* Card Component */}
        <main className='container mx-auto py-8 px-4'>
          <h2 className="text-3xl font-bold mb-4 text-white">Our Rides</h2>
          <Card />
        </main>

        {/* Services Section */}
        <section className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-4 text-white">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center justify-center text-center text-white bg-opacity-20">
            <FaCar className="text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Luxury Car Rental</h3>
            <p className="text-gray-200">Indulge in luxury with our premium selection of rental cars.</p>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center justify-center text-center text-white bg-opacity-20">
            <FaRoad className="text-5xl mb-4" />
            <h3 className="text-xl font-semibold">24/7 Roadside Assistance</h3>
            <p className="text-gray-200">Get help anytime, anywhere with our reliable roadside assistance service.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center justify-center text-center text-white bg-opacity-20">
            <FaGasPump className="text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Fuel Flexibility</h3>
            <p className="text-gray-200">Choose from various fuel options tailored to your preferences.</p>
          </div>
          
          {/* Service 4 */}
          <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center justify-center text-center text-white bg-opacity-20">
            <FaCreditCard className="text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Flexible Payment Options</h3>
            <p className="text-gray-200">Enjoy convenient payment methods for hassle-free transactions.</p>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-8 px-4">
        <ContactUs/>
      </section>
       {/* Copyright */}
       <section className="container mx-auto py-4 px-4 text-center text-gray-500 text-sm">
          &copy; 2024 Car Rental Company. Made with  &#10084; by Taj Mohammad Khan
        </section>

      </div>
    </>
  );
}

export default App;
