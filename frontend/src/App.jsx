import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/createpage" element={<CreatePage/>}></Route>
      </Routes>
    </div>
  )
}

export default App