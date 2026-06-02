import { useState } from 'react';
import './App.css';
import { Ellipsis } from 'lucide-react';


export default function Habits() {
  const [showForm, setShowForm] = useState(false);
  const [habits, setHabits] = useState([]);
  const [habitName, setHabitName] = useState("");
  const [habitTime, setHabitTime] = useState("");
  const [habitFrequency, setHabitFrequency] = useState("daily");
  const [activefilter, setactivefilter] = useState("daily")
  const [activetab, setactivetab] = useState("habit")

  const handleAdd = () => {
    if (habitName.trim() === "") return
    const newHabit = {
      id: Date.now(),
      name: habitName,
      time: habitTime,
      frequency: habitFrequency,
      tab: activetab

    }

    setHabits([...habits, newHabit])
    setHabitName("")
    setHabitTime("")
    setHabitFrequency("daily")
    setShowForm(false)
  }

  const filterhabit = habits
    .filter(habit => habit.frequency === activefilter)
    .filter(habit => habit.tab === activetab)

  return (
    <>
      <div>
        <div className='flex justify-center items-center'>
          <div className="flex justify-center  content-center mt-4 gap-3 text-xl text-gray-300 border-2 border-transparent bg-blue-800 px-4 rounded-lg">
            <button onClick={() => setactivetab("habit")} className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-30 rounded">Add Habits</button>
            <button onClick={() => setactivetab("finance")} className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-30 rounded">finance</button>
          </div>
        </div>
        <div className='flex justify-evenly mt-4 items-center'>
          <div className=' flex gap-4' >

            <button onClick={() => setactivefilter("daily")} className=' border-2 border-transparent rounded-xl px-3 py-0.5 bg-blue-300 hover:bg-green-600'>Daily</button>
            <button onClick={() => setactivefilter("weekly")} className=' border-2 border-transparent rounded-xl px-3 py-0.5 bg-blue-300 hover:bg-green-600'>Weekly</button>
            <button onClick={() => setactivefilter("monthly")} className=' border-2 border-transparent rounded-xl px-3 py-1.5 bg-blue-300 hover:bg-green-600'>Monthly</button>
          </div>
          <button className=' border-2 border-transparent rounded-xl px-3 py-0.5 bg-blue-300 hover:bg-green-600' onClick={() => setShowForm(true)}>+Add Habit</button>
        </div>
      </div>

      {showForm && (

        <div className='habit border p-3 rounded-2xl mt-2 flex flex-col gap-4 justify-center items-center w-1/2 mx-auto bg-blue-800'>
          <h1 className='text-2xl font-bold text-red-300 justify-center items-center'>Add New Habit</h1>

          <div className='flex flex-col gap-2 justify-around items-center mt-2'>
            <h3 className='text-2xl font-bold text-gray-300'>Habit Name</h3>
            <input type="text" value={habitName} onChange={(e) => setHabitName(e.target.value)} className='border-2 border-gray-300 rounded-lg px-10 py-1 mx-10 w-full bg-blue-300 text-gray-800' placeholder='eg Morning Meditation' />
          </div>


          <div className='flex flex-col gap-2 justify-around items-center'>
            <h3 className='text-2xl font-bold text-gray-300'>Frequency</h3>
            <select value={habitFrequency} onChange={(e) => setHabitFrequency(e.target.value)} className='border-2 border-gray-300 rounded-lg py-1 w-full flex justify-between px-35 bg-blue-300'>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <div className='flex flex-col gap-2 justify-around items-center'>
            <h3 className='text-2xl font-bold text-gray-300'>Time</h3>
            <input type="time" value={habitTime} onChange={(e) => setHabitTime(e.target.value)} className='border-2 border-gray-300 rounded-lg px-34 py-1 w-full bg-blue-300' />
          </div>

          <div className='flex justify-around items-center gap-4 mt-4'>
            <button onClick={() => setShowForm(false)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Cancel</button>
            <button onClick={handleAdd} className='bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-16 rounded'>Add habit</button>
          </div>

        </div>
      )}
      <div>
        {filterhabit.map((habit) => (
          <div  className='border p-3 rounded-2xl mt-2 flex gap-4 justify-evenly items-center w-1/2 mx-auto bg-blue-800'
            key={habit.id}> 
            <input type="checkbox"  />
            <span>{habit.name}</span>
            <span>{habit.time}</span>
            <span>{habit.frequency}</span>
            <span><Ellipsis /></span>
          </div>
          

        ))}
      </div>

    </>

  )

}
