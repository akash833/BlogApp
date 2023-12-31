import React from 'react'
import Header from './components/Header'
import Blog from './components/Blog'
import Pagination from './components/Pagination';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Blog/>
      <Pagination/>
    </div>
  )
}

export default App
