
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Dashboard from './Dashboard/Dashboard'

import { useState } from 'react';

function App() {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className=' bg-gray-200 flex overflow-x-hidden overflow-y-hidden '>
     <Sidebar
       collapsed={sideBarCollapsed}
      onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
      onPageChange={setCurrentPage}
       currentPage={currentPage}
      />
       <Header sideBarCollapsed={sideBarCollapsed} onToggleSideBar={()=> setSideBarCollapsed(!sideBarCollapsed)}/> 
       {/* mainpages */}
     <main className='relative top-20 right-[1430px]' >
      <div>
        {currentPage === "dashboard" && <Dashboard/>}
       
      </div>
      </main>      
    


    </div>
  )
}

export default App
