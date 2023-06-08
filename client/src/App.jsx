import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Home,Userlogin,Adminlogin, Userregister} from './pages'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/userlogin' element={<Userlogin/>}/>
    <Route path='/adminlogin' element={<Adminlogin/>}/>
    <Route path='/useregister' element={<Userregister/>}/>
    </Routes>
    </Router>
    </div>
  )
}

export default App
