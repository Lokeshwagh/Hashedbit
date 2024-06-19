import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from "./Home";
import MoviesBook from './MoviesBook';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MoviesBook/>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
