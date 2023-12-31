import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function Pagination() {
  const {page, setPage, totalPage,handlePageChange } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className='p-2 px-4 bg-white fixed bottom-0 w-full border border-t-2'>
      <div className='flex justify-between w-1/2 mx-auto'>
        <div className='flex'>
          {page > 1 &&
            <button onClick={()=>handlePageChange(page-1)} className='border border-slate-400 px-2 py-1 mr-2 rounded-md'>Prev</button>}
          {page < totalPage &&
            <button onClick={()=>handlePageChange(page+1)} className='border border-slate-400 px-2 py-1 mr-2 rounded-md'>Next</button>}
        </div>
        <div>
          Page {page} of {totalPage}
        </div>
      </div>
    </div>
  )
}

export default Pagination