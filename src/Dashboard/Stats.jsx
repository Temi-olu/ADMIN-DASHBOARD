import React from 'react'
import  {stats} from "../data.mjs";
import { ArrowUpDown, ArrowUpRight } from 'lucide-react';
function Stats() {
  return (
<div className="grid grid-cols-4 gap-74 ml-5 mt-2 ">
  {stats.map((item, index) => (
    <div
      key={index}
      className="bg-white shadow-sm w-64 h-43 relative  p-2 rounded-lg "
    >
      <div className='relative left-3'>
      <h1 className="font-bold mb-2">{item.title}</h1>
      <h1 className="mb-2 font-black text-3xl mt-3">{item.value}</h1>
      {<item.icon className={`ml-38 relative bottom-15 rounded m-2 left-8 ${item.textColor} ${item.bgColor}`}/>}
      <div className="flex items-center mt-4 relative bottom-8">
        {item.trend === "up" ? <ArrowUpRight className='text-green-400' /> :
         <ArrowUpDown className='text-red-400'/>}
        <h4 className="font-bold ml-2">{item.change}</h4>
        <h6 className="ml-3 text-gray-400">vs last</h6>
        </div>
      </div>
  
   <div className = {`p-2 relative bottom-2 rounded-xl ${item.bgColor} `}
   style={{width: item.trend === "up" ? "75% " :"45%"}}>
      </div>
    </div>
  ))}
</div>

 
  )
}

export default Stats