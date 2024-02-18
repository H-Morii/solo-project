import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/pages/Home.jsx'
import Main from './components/Main.jsx'

function App() {

  return (
    <>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </>
  )
}

export default App
