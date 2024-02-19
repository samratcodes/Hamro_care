import React, { useState } from 'react';
import { MdHotel } from "react-icons/md";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import Modal from 'react-modal';
import Hostel1Image from '../assets/Hostel1.jpeg';
import Hostel2Image from '../assets/Hostel2.jpeg';
import Hostel3Image from '../assets/Hostel3.jpeg';
import Hostel4Image from '../assets/Hostel4.jpeg';

const Hostel = () => {
  const [showModal, setShowModal] = useState(false);  
  const [activeIndex, setActiveIndex] = useState(0);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: ''
  });

  const images = [
    {
      image: Hostel1Image,
      title: 'Hostel 1',
    },
    {
      image: Hostel2Image,
      title: 'Hostel 2',
    },
    {
      image: Hostel3Image,
      title: 'Hostel 3',
    },
    {
      image: Hostel4Image,
      title: 'Hostel 4',
    },
  ];

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const handleBookNow = () => {
    setShowModal(!showModal);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // You can handle the booking submission here, for now, let's just log the data
    console.log("Booking Data:", bookingData);
    // Close the modal
    setShowModal(false);
  };

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='w-4/5 font-semibold text-4xl' id='textColor'>
        <div className='flex my-4'>
          <MdHotel /> &nbsp; &nbsp;
          <h1 className='text-4xl font-medium'>Hostels</h1>
        </div>
      </div>
      <div className='w-4/5 flex'>
        <div className='w-1/2'>
          {images.map((image, index) => (
            <div key={index} style={{ display: activeIndex === index ? 'block' : 'none' }}>
              <img src={image.image} alt={image.title} className='w-4/5 h-96 object-cover rounded-lg' />
            </div>
          ))}
          <div className='flex mt-4'>
            {images.map((image, index) => (
              <div key={index} onClick={() => handleImageClick(index)}>
                <img
                  src={image.image}
                  alt={image.title}
                  className={`w-5/5 h-24 object-cover rounded-lg ${
                    activeIndex === index ? 'border-8 border-blue-900' : 'border-2 border-white'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='w-1/2 flex flex-col items-center'>
          <div>
            <h1 className='font-bold text-4xl'>Hostel - Kathmandu, Nepal</h1>
            <div className='mt-4 font-normal text-2xl'>
              Description: Regular Health Service, Nutrition diets, Personalized care
            </div>
            <div className='flex text-3xl mt-4 text-yellow-400'>
              <IoIosStar/>
              <IoIosStar/>
              <IoIosStar/>
              <IoIosStar/>
              <IoIosStarHalf/>
            </div>
            <div className='my-4 font-semibold text-gray-500 text-2xl'>
              (4.5/5) rating
            </div>
            <div className='text-green-500 font-medium text-2xl'>
              Price: रु 500/Night
            </div>
            <div>
              <button className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-4' onClick={handleBookNow}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
  <Modal
    isOpen={showModal}
    onRequestClose={() => setShowModal(false)}
    style={{
      content: {
        width: '50%',
        height: 'fit-content', // Adjusted height for better responsiveness
        margin: 'auto',
        padding: '20px', // Added padding
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Added overlay background color
      },
    }}
  >
    <h1 className="text-center text-2xl font-bold mb-4">Booking Form</h1>
    <form onSubmit={handleBookingSubmit} className="flex flex-col items-center">
      <div className="mb-2">
        <label htmlFor="name" className="mr-2">Name:</label>
        <input type="text" id="name" name="name" value={bookingData.name} onChange={handleInputChange} placeholder="Your Name" className="border focus:outline-none rounded-lg px-2 py-1" required />
      </div>

      <div className="mb-2">
        <label htmlFor="email" className="mr-2">Email:</label>
        <input type="email" id="email" name="email" value={bookingData.email} onChange={handleInputChange} placeholder="Your Email" className="border focus:outline-none rounded-lg px-2 py-1" required />
      </div>

      <div className="mb-2">
        <label htmlFor="checkInDate" className="mr-2">Check In Date:</label>
        <input type="date" id="checkInDate" name="checkInDate" value={bookingData.checkInDate} onChange={handleInputChange} placeholder="Check-in Date" className="border focus:outline-none rounded-lg px-2 py-1" required />
      </div>

      <div className="mb-2">
        <label htmlFor="checkOutDate" className="mr-2">Check Out Date:</label>
        <input type="date" id="checkOutDate" name="checkOutDate" value={bookingData.checkOutDate} onChange={handleInputChange} placeholder="Check-out Date" className="border focus:outline-none rounded-lg px-2 py-1" required />
      </div>

      <div className="flex justify-end py-2 bottom-4 right-4">
      <button
        className='border px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 mr-2'
        onClick={() => setShowModal(false)}
      >
        Cancel
      </button>
      <button
        className='border px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white'
        type='submit'
      >
        Book Now
      </button>
    </div>
    </form>

  </Modal>
)}

    </div>
  );
};

export default Hostel;
