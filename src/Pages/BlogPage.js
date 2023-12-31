import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import { useSearchParams } from 'react-router-dom';

function BlogPage() {
    const [blogId,setBlogId] = useState('');
    const [searchParams,setSearchParams] = useSearchParams();

    function getIdByParams() {
        const getBlogId = searchParams.get('blogId');
        setBlogId(getBlogId);
      }

    useEffect(()=>{
        getIdByParams();
    },[searchParams]);

    return (
        <div>
            <Header />
            <Blog type="Blog"/>
            <Pagination />
        </div>
    )
}

export default BlogPage;