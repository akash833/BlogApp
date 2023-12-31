import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext';

function Pagination() {
  const { loader, setLoader, posts, setPosts, page, setPage, totalPage, setTotalPage, fetchData } = useContext(AppContext);
  return (
    <div className='p-2 px-4 bg-white fixed bottom-0 w-full'>
      <div className='flex justify-between w-1/2 mx-auto'>
        <div className='flex'>
          {page > 1 &&
            <button onClick={() => setPage(page - 1)} className='border border-slate-400 px-2 py-1 mr-2 rounded-md'>Prev</button>}
          {page < totalPage &&
            <button onClick={() => setPage(page + 1)} className='border border-slate-400 px-2 py-1 mr-2 rounded-md'>Next</button>}
        </div>
        <div>
          Page {page} of {totalPage}
        </div>
      </div>
    </div>
  )
}

export default Pagination