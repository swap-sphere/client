import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Footer from './components/organisms/footer/Footer'
import Header from './components/organisms/header/Header'
import Home from './pages/home/Home'

function App() {
  return (
    <div className='swap-sphere__container'>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
