import React, { useState } from 'react';
import { GiMeditation } from "react-icons/gi";

const PersonalizedForm = () => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    setTitle('');
    setAddress('');
    setEmail('');
    setContact('');
    setDescription('');
  };

  return (
    <div className='w-full flex justify-center flex-col items-center' >
      <div className='w-4/5 font-semibold text-4xl' id='textColor'>
                <div className='flex my-4'>
                    < GiMeditation/> &nbsp; &nbsp;
                     <h1 className='text-4xl font-medium'>Personalized</h1>
                </div>
            </div>
      
    
        <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="title" className="block text-gray-700 font-semibold mb-2 text-2xl">Title</label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="block w-full rounded-md bg-gray-100 border border-gray-300 px-4 py-2 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter title"
                  required  
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-gray-700 font-semibold mb-2 text-2xl">Address</label>
                <input
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="block w-full rounded-md bg-gray-100 border border-gray-300 px-4 py-2 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter address"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-2xl">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-gray-100 border border-gray-300 px-4 py-2 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-gray-700 font-semibold mb-2 text-2xl">Contact</label>
                <input
                  id="contact"
                  type="tel"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="block w-full rounded-md bg-gray-100 border border-gray-300 px-4 py-2 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter contact"
                  required
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="description" className="block text-gray-700 font-semibold mb-2 text-2xl">Description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full rounded-md bg-gray-100 border border-gray-300 px-4 py-2 focus:outline-none focus:border-indigo-500"
                  rows="4"
                  placeholder="Enter description"
                  required
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className=" text-2xl w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      
    </div>
  );
};

export default PersonalizedForm;
