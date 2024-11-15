import React, { useEffect, useState } from 'react'

function DeletePost() {

    const [name, setName] = useState('');
    const [posts, setPosts] = useState([1,2,3,4]);

    useEffect(() => {
        const url = new URL(window.location.href);
        setName(url.searchParams.get('name'));
    }, [])

  return (
    <div>
        <div>
            Delete Post for {name}
        </div>
        <div className='flex'>
            {
                posts.map((e,i) => {
                    return <div className='p-10' key={i}>
                        <div className='border-black border p-10'>
                            Post {e}
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default DeletePost