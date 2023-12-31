import React, { useContext, useEffect } from 'react'
import './App.css';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BlogPage from './Pages/BlogPage';
import TagPage from './Pages/TagPage';
import CategoryPage from './Pages/CategoryPage';
import { AppContext } from './context/AppContext';

function App() {
  const {fetchData} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tag")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchData(Number(page),tag);
    }else if(location.pathname.includes("category")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchData(Number(page),null,category);
    }else{
      fetchData(Number(page));
    }
  },[location.pathname, location.search])


  return (
    <div>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/blog/:blogId' Component={BlogPage}/>
        <Route path='/tag/:tag' Component={TagPage}/>
        <Route path='/category/:category' Component={CategoryPage}/>
      </Routes>
    </div>
  )
}

export default App
