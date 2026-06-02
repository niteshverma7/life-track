import { useState,useRef } from 'react'

export default function Header() {
  const [date, setdate] = useState(new Date().toISOString().split("T")[0])
  const inputRef = useRef(null) 
  const handleClick =() =>{
   inputRef.current.showPicker()
  }
  const currentdate = new Date(date).toLocaleDateString(
   "en-GB",
    {
     
      day:"numeric",
      month:"long",
       year:"numeric"
    }
  )

  return (
    <div >
        <div className="head  ">
        <h1 className=" flex justify-center content-center text-4xl mt-0 font-bold text-amber-50 pt-8">Life Tracker</h1>
        <p className=" flex justify-center content-center text-1xl text-gray-300 ">Habits & Finances, side by side</p>
         <div className=" justify-center-safe flex content-center mt-4 gap-3 text-xl text-gray-300">
         <span onClick={handleClick} className='w-50 border-2 rounded-lg p-2 flex justify-center text-center'>📅{currentdate} </span>
          <input type="date"
           ref={inputRef}
           value={date}
           id='dateinput'
           onChange={(e)=>setdate(e.target.value)}
            hidden
          

          />
      
         </div>
         
        </div>
      
    </div>
  )
}
