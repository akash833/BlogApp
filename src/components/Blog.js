import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext';

function Blog() {
  const {loader, setLoader, posts, setPosts, page, setPage, totalPage, setTotalPage, fetchData} = useContext(AppContext);
  console.log('posts',posts);

  useEffect(()=>{
    fetchData(page);
  },[page]);

  return (
    <div className='w-1/2 mx-auto mb-20'>
      {
        loader ? 
        <div className='flex justify-center items-center h-full'>
          <div className='loader'></div>
        </div> : 
        <div>
          { posts.map((post)=>(
            <div key={post.id} className='mb-6'>
              <div className='font-bold text-lg'>{post.title}</div>
              <div>By {post.author} on <span className='font-bold'>{post.category}</span></div>
              <div className='mb-2'>Posted On {post.date}</div>
              <div>{post.content}</div>
              <div className='flex flex-wrap'>
                {post.tags.map((tag,idx)=>(
                  <div key={idx} className='text-blue-600 underline mr-2'>#{tag}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Blog