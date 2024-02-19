import React from 'react'
import { Chart } from "react-google-charts";
import { MdDashboard } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaChair, FaBrain, FaLaptop, FaUsers } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { FaPeopleRobbery } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
const Home = () => {
  

  const events = [
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
      title: 'Light/Chair Exercises',
      description: 'Stay active and healthy with our Light/Chair Exercises. Tailored for all abilities, these sessions focus on gentle movements to improve flexibility and strength. Join us to boost your well-being in a supportive environment.',
      location: 'Fitness Center, Bhaisepati',
      instructor: 'John Smith',
      cost: '200 per session',
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
  ];
  const user= {
    "name": "John Doe",
    "age": 70,
    "healthCondition": "Good overall health with occasional joint pain",
    "hobbies": ["Gardening", "Reading", "Walking in the park"],
    "otherDetails": "Retired teacher, loves spending time with family and grandchildren."
  }
  
  const data = [
    ["Task", "Hours per Day"],
    ["Stress Levels", 11],
    ["Physical Activity", 2],
    ["Sleep Duration", 2],
    ["Nutritional Intake", 5],
    ["Mood and Emotional State", 8],
  ];

  const options = {
    title: "My Monthly Activities",
  };
  const lineChartData = [
    ['Months', 'past year', 'this year'],
    ['january-march', 600, 400],
    ['april-june', 650, 560],
    ['july -september', 460, 700],
    ['october-december',300, 750]
  ];

  const lineChartOptions = {
    title: ' Health score',
    curveType: 'function',
    legend: { position: 'bottom' }
  };
  return (
    <div className='w-full'>
      <div className=" w-4/5 mx-auto justify-center px-4 py-8">
        <div className=' rounded-full w-24 h-24'>
        <img className=' object-cover w-full h-full rounded-full' src="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <h1 className="text-3xl font-bold mb-4">{user.name}'s Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Age</h2>
          <p className="text-gray-700">{user.age} years old</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Health Condition</h2>
          <p className="text-gray-700">{user.healthCondition}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Hobbies</h2>
          <ul className="list-disc text-gray-700">
            {user.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Other Details</h2>
          <p className="text-gray-700">{user.otherDetails}</p>
        </div>
      </div>
    </div>

    <div className='w-full flex flex-col items-center justify-center mt-4'>
      <div className='w-4/5 flex justify-start items-center  font-semibold text-4xl ' id='textColor'>
      <MdDashboard /> &nbsp; &nbsp;
     <h1 className=' text-4xl font-medium' >
     Activities
     </h1>
      </div>
    <div className='flex w-full '>
    
      <Chart
        width={'800px'}
        height={'600px'}
        chartType="PieChart"
        data={data}
        options={options}
      />
      <Chart
        width={'700px'}
        height={'600px'}
        chartType="LineChart"
        data={lineChartData}
        options={lineChartOptions}
      />

    </div>
    </div>
<div className='w-full  flex flex-col justify-center items-center '>
<div className='w-4/5 flex justify-start items-center  font-semibold text-2xl' id='textColor'>
    <FaBookmark />   &nbsp; &nbsp;
      <h1 className='text-4xl font-medium'>
      Booked Events
      </h1>
    </div>
<div className='flex w-4/5'>

              {events.map((activity, index) => (
        <div key={index} className='w-1/2 sm:w-1/3 lg:w-1/3 xl:w-1/3 p-4 flex items-stretch'>
          <div className='bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out w-full'>
            <div className='flex items-center mb-4'>
              {activity.icon} &nbsp; &nbsp;
              <h2 className='text-2xl font-medium'>{activity.title}</h2>
            </div>
            <p className='text-gray-600 my-2'>{activity.description}</p>
            <div className='flex justify-end'>
              <button className='bg-green-500 text-white px-4 py-2 rounded' onClick={() => openModal(activity)}>Booked </button>
            </div>
          </div>
        </div>
      ))}
</div>
</div>

    </div>
  
  )
}

export default Home
