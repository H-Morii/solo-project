import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Main from './components/Main.jsx'
import { AuthContextProvider } from './content/AuthContent.js'
import SignIn from './pages/SignIn.jsx'
import Login from './pages/Login.jsx'

function App() {

  return (
    <>
    <AuthContextProvider>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App
