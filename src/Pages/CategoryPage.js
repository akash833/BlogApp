import React from 'react'
import Blog from '../components/Blog';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

function CategoryPage() {
    return (
        <div>
            <Header />
            <Blog type="category"/>
            <Pagination />
        </div>
    )
}

export default CategoryPage;