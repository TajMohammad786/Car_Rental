import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons from Font Awesome

function ContactUs() {
  return (
    <section className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col justify-center bg-opacity-20">
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
          <div className="flex items-center mb-4">
            <FaPhone className="text-xl mr-4 text-gray-100" />
            <p className='text-gray-100'>Phone: +1234567890</p>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-xl mr-4 text-gray-100" />
            <p className='text-gray-100'>Email: info@example.com</p>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-xl mr-4 text-gray-100" />
            <p className='text-gray-100'>Address: 123 Street, City, Country</p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-8 bg-opacity-20">
          <h3 className="text-xl font-semibold mb-4 text-white">Send us a Message</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-100">Your Name:</label>
              <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-100">Your Email:</label>
              <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-100">Message:</label>
              <textarea id="message" name="message" rows="4" className="w-full border-gray-300 rounded-md px-4 py-2"></textarea>
            </div>
            <button type="submit" className=" text-white py-2 px-4 rounded-md bg-cyan-600 hover:bg-cyan-700 transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
