import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Details from './views/Details'
import Home from './views/Home'
import Pattern from './views/pattern'


function App() {

  const [searchValue, setSearchValue] = useState("")
  return (
    <>
      <Header onSubmit={inputValue=>setSearchValue(inputValue)}/>
      <Routes>
        <Route index element={<Home searchMovie={searchValue} />} />
        <Route path='detalhamento/:id' element={<Details />} />
      </Routes>
    </>
  )
}

export default App
