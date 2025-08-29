
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Home from './component/Home'

function App() {
  return (
    <div className='flex'>
     
      <Sidebar/>
       <Header/>
      <Home/>
    </div>
  )
}

export default App
