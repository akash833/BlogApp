import React from 'react';
import Blog from '../components/Blog';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

function TagPage() {
    return (
        <div>
            <Header />
            <Blog type="tag"/>
            <Pagination />
        </div>
    )
}

export default TagPage;