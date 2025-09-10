
import { IoMenu } from "react-icons/io5";
import { BsBrightnessHigh } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import me from '../assets/me.jpg'
function Header({sideBarCollapsed, onToggleSideBar }) {
  return (
    <div className='bg-white h-18 relative top-0 left-0 right-0 shadow-sm flex items-center px-4 z-50 pl-[400px]'> 
     <div className="mr-8 flex ">
      <button onClick={onToggleSideBar} >
     <IoMenu size={20} className='hover:bg-gray-200 relative top-1 right-[380px]' />
     </button>
      <div className='relative right-[360px] '>
        <h1 className='font-bold'>Dashboard</h1>
        <p className='text-sm w-82'>Welcome back, Temi! here's what's happening today</p>
      </div>
      </div>
      {/* searchbar */}
      <input type="text" 
      className=" bg-gray-100 border right-[360px] rounded-lg relative mr-9  top-1 h-8 w-84 p-4"
      placeholder="search anything"
      />
      <div className="flex gap-2 items-center relative right-[320px]">
      <h1 className="bg-purple-800 px-6 w-20 py-2  h-10 rounded-xl text-white relative ">New</h1>
      <BsBrightnessHigh size={20}    />
      <IoIosNotifications size={20} />
       <CiSettings size={24}         />
       </div>
       {/* profile */}
       <div className=" ml-5 relative right-[320px] top-5">
         <img src={me}  alt="user" className="w-10 h-10 rounded-full ring-2 ring-blue-400 "/> 
        <div className="relative left-12 bottom-10">
         <h1 className="text-sm font-bold">Temi Olu</h1>
         <p className="text-sm">Adminstrator</p>
      </div>
       </div>
</div>
    
  )
}

export default Header