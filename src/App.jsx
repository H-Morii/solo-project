import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import { AuthContextProvider } from './context/Authcontext.jsx'
import SingleMovie from './components/SingleMovie.jsx'

function App() {

  return (
    <>
    <AuthContextProvider>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/singlemovie' element={<SingleMovie/>}/>
      </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App
