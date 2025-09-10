import React from 'react'
import  {stats} from "../data.mjs";
import { IoIosAdd } from "react-icons/io";
import { ArrowDown, ArrowUp, ArrowUp01, ArrowUpDown, ArrowUpRight } from 'lucide-react';
function Stats() {
  return (
<div className="grid grid-cols-4 gap-74 ml-5 mt-2">
  {stats.map((item, index) => (
    <div
      key={index}
      className="bg-white shadow-sm w-56 p-4 rounded-lg "
    >
      <h1 className="font-bold mb-2">{item.title}</h1>
      <h1 className="mb-2 font-black text-3xl mt-3">{item.value}</h1>
      <div className="flex items-center mt-4">
        {item.trend === "up" ? <ArrowUpRight className='text-green-400' /> :
         <ArrowUpDown className='text-red-400'/>}
        <h4 className="font-bold ml-2">{item.change}</h4>
        <h6 className="ml-3 text-gray-400">vs last</h6>
      </div>
    </div>
  ))}
</div>

 
  )
}

export default Stats