import { useState } from 'react'
import './App.css'
import Sidebar from './Pages/Sidebar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' flex flex-col'>
<Sidebar/>
<Outlet/>
   </div>
  )
}

export default App
