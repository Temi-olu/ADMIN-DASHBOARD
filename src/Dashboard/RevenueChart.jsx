import { BarChart, Bar, Tooltip, ResponsiveContainer, CartesianGrid, XAxis,YAxis } from "recharts"
 import { monthlyData } from "../data.mjs"

function RevenueChart() {
  return (
    <div>
      <div className='bg-white w-[750px]  shadow-sm mt-3 ml-5 rounded-lg p-2'>
        <h1 className='font-black text-xl'>Revenue Chart</h1>
        <p className='text-gray-300'>Monthly and Revenue Expenses</p>
        <div className='flex items-center gap-1.5 relative bottom-10 mr-3 justify-end  '>
            <span className=' border-none rounded-full w-3 h-3 bg-blue-600'></span>
            <h1 className=''>Renvenue</h1>
            <span className=' border-none rounded-full w-3 h-3 bg-blue-900'></span>
            <h1 className=''>Expenses</h1>
        </div>
      <div>
       <BarChart width={700} height={250} data={monthlyData}>
        <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="month" />
       <YAxis />
         <Tooltip />
        <Bar dataKey="revenue" fill="#f542e9" />
        <Bar dataKey="expenses" fill="#7a2179" />
     </BarChart>

      </div>
      </div>
    </div>
  )
}

export default RevenueChart
