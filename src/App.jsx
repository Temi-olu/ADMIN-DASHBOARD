
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Home from './component/Home'
import { useState } from 'react';

function App() {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className='flex overflow-y-hidden '>
     <Sidebar
       collapsed={sideBarCollapsed}
      onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
      onPageChange={setCurrentPage}
       currentPage={currentPage}
      />
       <Header/> 
      <Home/>
    </div>
  )
}

export default App
