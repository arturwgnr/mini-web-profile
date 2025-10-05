import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profiles from './pages/Profiles';
import Landing from './pages/Landing';
import './css/global.css'

function App() {
  return (
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Landing/>} />
    <Route path='/profiles' element={<Profiles/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
