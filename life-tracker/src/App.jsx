import './App.css'
import Header from './Header'
import Habits from './Habits'
import Finance from './Finance'
import { useState } from 'react'



export default function App() {
  const [activetab, setactivetab] = useState("habit")



  return (
    <div className="Appss ">
      <Header/>
     <div className=' flex justify-center items-center mt-4'>
      <div className=' flex gap-3 bg-amber-600 px-4 py-2 rounded-2xl'>
       <button onClick={()=> setactivetab("habit")}
        className={`text-white font-bold py-2 px-8 rounded ${activetab === "habit" ? "bg-green-600":" hover:bg-blue-600"}`}>
       Habits
       </button>
       <button onClick={() => setactivetab("finance")}
        className={`text-white font-bold py-2 px-8 rounded ${activetab === "finance" ? "bg-green-600":" hover:bg-blue-600"}`}>
     Finance
       </button>
      </div>

     </div>
     {activetab ==="habit" && <Habits/>}
     {activetab ==="finance" && <Finance/>}
    </div>
  )
}
