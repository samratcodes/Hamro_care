import React, { useState, useEffect } from 'react';
import { FaChair, FaBrain, FaLaptop, FaUsers } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { FaPeopleRobbery } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";

const Recreational = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activities = [
    {
      icon: <FaPaintBrush />,
      title: 'Arts and Craft',
      description: 'With our Arts & Crafts classes, you may unleash your creative side. Come participate in enjoyable and engaging craft activities that are ideal for self-expression and building relationships with other art enthusiasts.',
      location: 'Art Studio, Baluwatar',
      instructor: 'Jane Doe',
      cost: '100 per session',
      date: '2024-02-20',
    },
    {
      icon: <FaChair />,
      title: 'Religious Events',
      description: 'These events cater to diverse spiritual needs, fostering a sense of community and connection. Whether its attending worship services, participating in prayer circles, or engaging in discussions about faith, our platform aims to create a supportive environment.',
      location: 'Pashupati Area',
      instructor: 'John Smith',
      cost: 'Free',
      date: '2024-02-21',
    },
    {
      icon: <GrYoga />,
      title: 'Yoga and Meditation',
      description: 'Find peace and balance through our Yoga and Meditation classes. Embrace the serenity of guided meditation and the rejuvenating benefits of yoga. Join us on a journey to enhance both your physical and mental well-being.',
      location: 'Yoga Studio, Balkhu',
      instructor: 'Emily White',
      cost: '200 per session',
      date: '2024-02-22',
    },
    {
      icon: <FaBrain />,
      title: 'Memory Games',
      description: 'Challenge your mind and have fun with our Memory Games. Engage in stimulating activities like trivia, crossword puzzles, and more. Join us for a mentally invigorating experience that promotes cognitive health.',
      location: 'Community Center',
      instructor: 'David Johnson',
      cost: '250 per session',
      date: '2024-02-23',
    },
    {
      icon: <FaLaptop />,
      title: 'Digital Awarness',
      description: 'Embrace the digital age with our Tech Workshops. Learn essential tech skills, from social media basics to online shopping. Join us for interactive sessions designed to boost your confidence in navigating the digital world.',
      location: 'Tech Hub, Gaucharan',
      instructor: 'Alex Brown',
      cost: '300 per session',
      date: '2024-02-24',
    },
    {
      icon: <FaUsers />,
      title: 'Community Sessions',
      description: 'Connect with others in our Community Sessions. Engage in delightful conversations, enjoy guest speaker series, and participate in talent shows. Join us for a sense of community and camaraderie.',
      location: 'Baluwatar',
      instructor: 'Community locals',
      cost: 'Free',
      date: '2024-02-25',
    },
  ];

  const openModal = (activity) => {
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const handleClickOutside = (event) => {
      if (event.target.classList.contains('bg-opacity-50')) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='w-4/5 mx-auto flex flex-wrap justify-start'>
      <div className='w-full font-semibold text-4xl text-center pl-5' id='textColor'>
        <div className='flex my-4'>
          <FaPeopleRobbery /> &nbsp; &nbsp;
          <h1 className='text-4xl font-medium'>Recreational Activities</h1>
        </div>
      </div>

      {activities.map((activity, index) => (
        <div key={index} className='w-1/2 sm:w-1/3 lg:w-1/3 xl:w-1/3 p-4 flex items-stretch'>
          <div className='bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out w-full'>
            <div className='flex items-center mb-4'>
              {activity.icon} &nbsp; &nbsp;
              <h2 className='text-2xl font-medium'>{activity.title}</h2>
            </div>
            <p className='text-gray-600 my-2'>{activity.description}</p>
            <div className='flex justify-end'>
              <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out' onClick={() => openModal(activity)}>Book Now</button>
            </div>
          </div>
        </div>
      ))}

      {selectedActivity && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white px-8 pt-8 rounded-md w-1/2 h-3/5">
            <h2 className="text-2xl font-semibold mb-4">{selectedActivity.title}</h2>
            <p className="text-gray-600 mb-4">{selectedActivity.description}</p>
            <p className="text-gray-600 mb-4"><strong>Location:</strong> {selectedActivity.location}</p>
            <p className="text-gray-600 mb-4"><strong>Date:</strong> {selectedActivity.date}</p>
            <p className="text-gray-600 mb-4"><strong>Instructor:</strong> {selectedActivity.instructor}</p>
            <p className="text-gray-600 mb-4"><strong>Cost:</strong> Rs. {selectedActivity.cost}</p>
            <div className='flex justify-end'>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out" onClick={closeModal}>Book Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recreational;
