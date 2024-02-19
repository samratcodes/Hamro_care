import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdHealthAndSafety } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { GiMeditation } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { FaTaxi } from "react-icons/fa6";
import { FaPeopleRobbery } from "react-icons/fa6";
const Sidebar = () => {
const [sidebar, setSidebar] = useState([{
    name: 'Home',
    icon: <FaHome />,
    link: '/home'
},
{
    name: 'Recreational',
    icon: <FaPeopleRobbery/>,
    link: '/recreational'},
    {
      name: 'Transportation',
      icon:<FaTaxi/>,
      link:'/transportation'
     },
  
  {
   name: 'Checkups',
   icon: <MdHealthAndSafety />,
   link:'/checkups'
  },
  {
    name: 'Hostel',
    icon:<MdHotel />,
    link:'/hostel'
   },
   {
    name: 'Nutrition',
    icon:<GiFruitBowl/>,
    link:'/nutrition',
   },
   {
    name: 'Personalized',
    icon:<GiMeditation/>,
    link:'/personalized'
   },
   ])

  return (
    <div className='w-full h-1/6 bg-black overflow-hidden'>
      <div className='w-full h-full '>
      
        <div className='w-full flex justify-center ' id='navbar'>
        <div className='w-4/5 justify-between items-center  flex' id='options'>
<div className='w-24 rounded-3xl m-2 mt-4 pr-6'>
  <Link to={'/'}>
    <img className='cursor-pointer object-cover w-full h-full' src="src\assets\logowhite.png" alt="" />
  </Link>
</div>
{
    sidebar.map((items, index) => {
        return (
          <Link to={items.link} key={index}>
            <div  className='w-full pl-10' id='option'>
        <div className='flex justify-start items-end py-2 text-white'>
        <div className=' text-2xl'>{items.icon}</div> &nbsp; &nbsp;
            <h1 className='text-white text-lg font-semibold'>{items.name}</h1>
        
        </div>
       </div>
          </Link>
        )
    })
}

        </div>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
