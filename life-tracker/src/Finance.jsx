import { useState } from 'react'
import './App.css'
import { Ellipsis } from 'lucide-react';

export default function Finance() {
  const [showfrom, setshowfrom] = useState(false)
  const [finances, setFinances] = useState([]);
  const [financetitle, setFinanceTitle] = useState("");
  const [financeAmount, setFinanceAmount] = useState("");
  const [financeCategory, setFinanceCategory] = useState("");
  const [financeFrequency, setFinanceFrequency] = useState("daily");
  const [activefilter, setactivefilter] = useState("income")



  const handleAdd = () => {
    if (financetitle.trim() === "") return
    const newFinance = {
      id: Date.now(),
      title: financetitle,
      amount: financeAmount,
      category: financeCategory,
      frequency: financeFrequency
    

    }
    setFinances([...finances, newFinance])
    setFinanceTitle("")
    setFinanceAmount("")
    setFinanceCategory("")
    setFinanceFrequency("daily")
    setshowfrom(false)
  }
  const filter = finances
    .filter(finance => finance.frequency === activefilter)




  return (
    <>
      <div>
          <div className='flex justify-evenly mt-4 items-center'>
            <div className=' flex gap-4' >

              <button onClick={() => setactivefilter("daily")} className=' border-2 border-transparent rounded-xl px-3 py-0.5 bg-blue-300 hover:bg-green-600'>Daily</button>
              <button onClick={() => setactivefilter("weekly")} className=' border-2 border-transparent rounded-xl px-3 py-0.5 bg-blue-300 hover:bg-green-600'>Weekly</button>
              <button onClick={() => setactivefilter("monthly")} className=' border-2 border-transparent rounded-xl px-3 py-1.5 bg-blue-300 hover:bg-green-600'>Monthly</button>
            </div>
            <button className=' border-2 border-transparent rounded-xl px-3 py-0.5 bg-blue-300 hover:bg-green-600' onClick={() => setshowfrom(true)}>+Add Finance</button>
          </div>
        </div>



      {showfrom && (
        <div className='finance border p-3 rounded-2xl mt-2 flex flex-col gap-4 justify-center items-center w-1/2 mx-auto bg-blue-800'>
          <h1 className='text-2xl font-bold text-gray-800 justify-center items-center ml-5'>Add Finance Entry</h1>
          <div>
            <h3 className='text-2xl font-bold text-gray-300 flex justify-center items-center mb-2'>Title</h3>
            <input type="text" value={financetitle} onChange={(e) => setFinanceTitle(e.target.value)} className='border-2 border-gray-300 rounded-lg px-10 py-1 mx-10 w-full bg-blue-300 text-gray-800' placeholder='eg Salary, Rent, Groceries' />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-gray-300  flex justify-center items-center mb-2'>Amount</h3>
            <input type="text" value={financeAmount} onChange={(e) => setFinanceAmount(e.target.value)} className='border-2 border-gray-300 rounded-lg px-10 py-1 mx-10 w-full bg-blue-300 text-gray-800' placeholder='eg 500' />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-gray-300 flex justify-center items-center mb-2'>Category</h3>
            <select name="" id="" value={financeCategory} onChange={(e) => setFinanceCategory(e.target.value)} className='border-2 border-gray-300 rounded-lg px-24 py-1 mx-10 w-full bg-blue-300 text-gray-800'>
              <option value="income">Income</option>
              <option value="finance">Finance</option>
              <option value="saving">Saving</option>
            </select>
          </div>
          <div>
            <h3 className='text-2xl font-bold text-gray-300 flex justify-center items-center mb-2'>Frequency</h3>
            <select name="" id="" value={financeFrequency} onChange={(e) => setFinanceFrequency(e.target.value)} className='border-2 border-gray-300 rounded-lg px-24 py-1 mx-10 w-full bg-blue-300 text-gray-800'>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className='flex justify-around items-center gap-4 mt-4 ml-20'>
            <button onClick={() => setshowfrom(false)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded'>cancel</button>
            <button onClick={handleAdd} className='bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-20 rounded'>Add</button>
          </div>

        </div>

      )}

      <div >
        {filter.map((finance) => (
          <div className='border p-3 rounded-2xl mt-2 flex gap-4 justify-evenly items-center w-1/2 mx-auto bg-blue-800'
            key={finance.id}>
              <input type="checkbox"  />
            <span>{finance.title}</span>
            <span>{finance.amount}</span>
            <span>{finance.category}</span>
            <span><Ellipsis /></span>
          </div>


        ))}
      </div>

    </>
  )
}
