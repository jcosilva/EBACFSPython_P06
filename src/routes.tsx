import { Routes, Route } from 'react-router-dom'

import Home from './pages/01_Home'
import MenuDisplay from './pages/02_Menu'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<MenuDisplay />} />
  </Routes>
)

export default Rotas
