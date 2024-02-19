import {React, useState, useEffect} from 'react';
import { GiFruitBowl } from "react-icons/gi";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

import { Client,Databases,ID} from 'appwrite';

const Nutritions = () => {

  const [selectedFood, setSelectedFood] = useState(null);
  const [foodsData, setFoodsData] = useState([]);

  const client = new Client();
const DATABASE_ID = '65d000ffb100eb0ced84';
const COLLECTION_ID_TASKS = '65d002b23c5ecf0dcaee';

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65cfffdaaae3147652b7');

    const db = new Databases(client);

  const openModal = (food) => {
    setSelectedFood(food);
  };

  const closeModal = () => {
    setSelectedFood(null);
  };

  useEffect(() => {
    async function getTasks() {
      try {
        const response = await db.listDocuments(DATABASE_ID, COLLECTION_ID_TASKS);
        console.log(response.documents);
        setFoodsData(response.documents);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getTasks();
  }, []);

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
    <div className='w-4/5 mx-auto flex flex-wrap justify-start mb-10'>
      <div className='w-full font-semibold text-4xl text-center' id='textColor'>
        <div className='flex my-4'>
          <GiFruitBowl /> &nbsp; &nbsp;
          <h1 className='text-4xl font-medium'>Nutrients</h1>
        </div>
      </div>

      <div className='w-full grid grid-cols-3 gap-4'>
        {foodsData.map((food, index) => (
          <div key={index} className='border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out w-full'>
            <img src={food.Image} alt={foodsData.name} className='w-full h-48 object-cover mb-4 rounded-md' />

            <h2 className='text-xl font-semibold mb-2'>{food.name}</h2>
            <p className='text-sm mb-4'>{food.Description}</p>

            <div className='flex justify-between items-center'>
              <span className='text-lg font-medium'>Rs. {food.Cost}</span>
              <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600' onClick={() => openModal(food)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedFood && (
<div className="fixed inset-0 bg-gray-800 bg-opacity-50 pb-0 mb-0 flex items-center justify-center">
  <div className="bg-white px-8 pt-8 mb-0 pb-0 rounded-md w-2/5 h-[75%]">
    <img src={selectedFood.Image} alt={`Image of ${selectedFood.name}`} className='w-full h-60 object-cover mb-4 rounded-md' />
    <h2 className="text-2xl font-semibold mb-2">{selectedFood.name}</h2>
    <p className="text-sm mb-4">{selectedFood.Description}</p>
    <div className='flex'>
    <div className='flex mt-4 mr-2 text-2xl text-yellow-400'>
              <IoIosStar/>
              <IoIosStar/>
              <IoIosStar/>
              <IoIosStar/>
              <IoIosStarHalf/>
            </div>
            <div className='my-4 font-semibold text-gray-500'>
              (4.5/5) rating
            </div>
            </div>
    <div className='flex justify-between items-center'>
      <p className="text-2xl font-bold">Rs. {selectedFood.Cost}</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={closeModal}>
        Buy Now
      </button>
    </div>
  </div>
</div>
)}

    </div>
  );
};

export default Nutritions;