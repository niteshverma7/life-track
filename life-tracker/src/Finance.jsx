import  { useState } from 'react'
import './App.css'

export default function Finance() {
const [showfrom ,setshowfrom] =useState(false)
 const [habits, setHabits] = useState([]);
 const [habittitle, sethabitTitle] =useState("");
  const [habitAmount, setHabitAmount] = useState("");
  const [habitCategory, setHabitCategory] = useState("");
  const [habitFrequency, setHabitFrequency] = useState("income");
  const [activefilter ,setactivefilter]=useState("daily")
  const [activetab, setactivetab] = useState("habit")

  
  const handleAdd = () => {
    if (habittitle.trim() === "") return
    const newHabit = {
      id: Date.now(),
      title: habittitle,
      amount: habitAmount,
      catrgory: habitCategory,
      frequency:habitFrequency,
      tab: activetab
     
    }
     setHabits([...habits, newHabit])
    sethabitTitle("")
    setHabitAmount("")
    setHabitCategory("daily")
    setHabitFrequency("")
    setshowfrom(false)
  }
   const filter = habits
  .filter(habit=>habit.frequency===activefilter)
    .filter(habit=>habit.tab===activetab)




  return (
  <>

    <div>
     <div>
        <div className='flex justify-center items-center'>
          <div className="flex justify-center  content-center mt-4 gap-3 text-xl text-gray-300 border-2 border-transparent bg-blue-800 px-4 rounded-lg">
            <button onClick={()=>setactivetab("habit")} className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-30 rounded">Add Habits</button>
            <button onClick={()=>setactivetab("finance")} className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-30 rounded">finance</button>
          </div>
        </div>
        <div className='flex justify-evenly mt-4 items-center'>
          <div className=' flex gap-4' >
       
            <button onClick={()=>setactivefilter("daily")} className=' border-2 border-transparent rounded-xl px-3 py-0.5 bg-blue-300 hover:bg-green-600'>Daily</button>
            <button onClick={()=>setactivefilter("weekly")} className=' border-2 border-transparent rounded-xl px-3 py-0.5 bg-blue-300 hover:bg-green-600'>Weekly</button>
            <button onClick={()=>setactivefilter("monthly")} className=' border-2 border-transparent rounded-xl px-3 py-1.5 bg-blue-300 hover:bg-green-600'>Monthly</button>
          </div>
          <button className=' border-2 border-transparent rounded-xl px-3 py-0.5 bg-blue-300 hover:bg-green-600' onClick={() => setshowfrom(true)}>+Add Habit</button>
        </div>
      </div>
      
    </div>

      {showfrom && (
        <div>
        <h1>Add Finance Entry</h1>
         <div>
          <h3>Title</h3>
          <input type="text" value={habittitle} onChange={(e) =>sethabitTitle(e.target.value)} />
         </div>
        <div>
          <h3>Amount</h3>
          <input type="text" value={habitAmount} onChange={(e) => setHabitAmount(e.target.value)} />
        </div>
        <div>
          <h3>Category</h3>
          <select name="" id="" value={habitCategory} onChange={(e) => setHabitCategory (e.target.value)}>
            <option value="income">Income</option>
            <option value="finance">Finance</option>
            <option value="saving">Saving</option>
          </select>
        </div>
        <div>
          <h3>Frequency</h3>
          <input type="text" value={habitFrequency} onChange={(e) => setHabitFrequency(e.target.value)} />
        </div>
        <div>
          <button onClick={() => setshowfrom(false)}>cancel</button>
          <button onClick={handleAdd}>Add</button>
        </div>

        </div>

     )}
     <div>
      {filter.map}
     </div>

      <div className="border p-3 rounded-2xl mt-2 flex  flex-col gap-4">
              {filter.map((habit) => (
              <div
                key={habit.id}>
                <span>{habit.title}</span>
                <span>{habit.amount}</span>
                <span>{habit.category}</span>
                <span>{habit.frequency}</span>
              </div>
     

            ))}
          </div>
    
    </> 
  )
}
