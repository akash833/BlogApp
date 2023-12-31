import React from 'react'
import Pagination from '../components/Pagination';
import Blog from '../components/Blog';
import Header from '../components/Header';

function HomePage() {
  return (
    <div>
        <Header/>
        <Blog/>
        <Pagination/>
    </div>
  )
}

export default HomePage;