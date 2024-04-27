import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdHealthAndSafety } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { GiMeditation } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { FaTaxi } from "react-icons/fa6";
import { FaPeopleRobbery } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import Logo from '../assets/logowhite.png'
import { RxCrossCircled } from "react-icons/rx";
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
   const [menu , setMenu] = useState(true) ;
   const toogleMenu=()=>{
    setMenu(!menu);
   }
  return (
    <div className='w-full h-1/6 bg-black overflow-hidden'>
      <div className='w-full h-full '>
      
        <div className='w-full flex justify-center ' id='navbar'>
        <div className='w-4/5 justify-between   flex flex-col sm:flex-row sm:items-center'  id='options'>
<div className='sm:w-24 w-full  rounded-3xl m-2 flex justify-between mt-4 pr-6'>
  <Link to={'/'}>
  <img className='cursor-pointer object-cover w-24 h-full' src={Logo} alt="" />
  </Link>
  <div className=' text-white text-5xl sm:hidden ' onClick={toogleMenu}>
  {menu ? <MdOutlineMenu  /> : <RxCrossCircled />}
  </div>
</div>
<div className={`sm:flex sm:flex-row flex-col ${menu ? 'hidden' : 'flex'}`}>
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
}</div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
