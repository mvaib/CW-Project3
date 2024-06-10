import './App.css'
import Footer from './Component/Footer'
import LoginNav from './Component/LoginNav'
import Main from './Component/Main'
import Navbar from './Component/Navbar'
import Topbar from './Component/Topbar'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();

  console.log('Current Page', location.pathname);

  return (
    <>
      {location.pathname !== '/login'? <><Topbar/><Navbar/></>: <LoginNav/>}
      <Main/>
      {location.pathname !== '/login' ? <Footer/> : null}
    </>
  )
}

export default App
