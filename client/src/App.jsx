import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Home,Userlogin,Adminlogin, Userregister,FligtForm,Adminhome,RemoveFlight,ViewFlights,Userhome,MyBooking,BookingTickets,SearchFlight,Logout} from './pages'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Router>
      <Logout className="nav"/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/userlogin' element={<Userlogin/>}/>
    <Route path='/adminlogin' element={<Adminlogin/>}/>
    <Route path='/useregister' element={<Userregister/>}/>
    <Route path='/adminhome' element={<Adminhome/>}/>
    <Route path='/admin/regflight' element={<FligtForm/>}/>
    <Route path='/admin/removeflight' element={<RemoveFlight/>}/>
    <Route path='/admin/viewflights' element={<ViewFlights/>}/>
    <Route path='/:id/userhome' element={<Userhome/>}/>
    <Route path='/user/mybookings' element={<MyBooking/>}/>
    <Route path='/user/searchflight' element={<SearchFlight/>}/>
    <Route path='/user/bookingtickets' element={<BookingTickets/>}/>
  
    </Routes>
    </Router>
    </div>
  )
}

export default App
