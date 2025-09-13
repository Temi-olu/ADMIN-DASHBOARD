import React from 'react'
import { PieChart, Pie, Cell ,Tooltip } from 'recharts'
import { salesData} from "../data.mjs"
function SalesCategory() {
  return (
    <div>
       <div className='bg-white w-[334px] mt-3.5 border-0 relative left-10 h-24 shadow-sm rounded-lg p-3'>
<h1 className='font-bold'>Sales By Category</h1>
<p className='text-gray-400'>Production Distribution</p>
       <div>
       <PieChart width={334} height={250} className=' border-none relative top-7 right-3 bg-white'>
          <Pie
          
            data={salesData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={100}
          >
            {salesData.map((d, i) => (
              <Cell key={i} fill={d.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
       </div>
         </div>
 </div>
  )
}

export default SalesCategory