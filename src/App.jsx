import { Routes, Route } from 'react-router-dom'

import Main from "./pages/Main"
import Navbar from "./components/Navbar"
import Hangman from './pages/Hangman'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/logotherapia" element={<div className="p-20">Σελίδα Λογοθεραπείας</div>} />
        <Route path="/kremala" element={<Hangman />} />
      </Routes>
    </div>
  )
}

export default App
