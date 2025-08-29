
import { MdAdminPanelSettings } from "react-icons/md";

function Sidebar() {
  return (
    <div className="w-48 h-screen bg-white shadow-sm">
      <MdAdminPanelSettings  size={40} className=" ml-6 text-blue-700 relative top-5"/> 
      <div className="relative left-15 bottom-5 ">
      <h1 className="text-sm font-bold ml-2">REINA</h1>
      <p className="text-sm ml-2">Admin Panel</p>
      </div>

        {/* profile */}
        <div className="relative left-6 top-[520px]">
        <img src=""  alt="user" className="w-10 h-10 rounded-full ring-2 ring-blue-400 "/> 
        <div className="relative left-12 bottom-10">
         <h1 className="text-sm font-bold">Temi Olu</h1>
         <p className="text-sm">Adminstrator</p>
      </div>
      
       </div>

    </div>
  )
}

export default Sidebar
