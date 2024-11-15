import { useEffect, useState } from 'react'

function SocietyPosts() {

    const [societyName, setSocietyName] = useState("");
    const [posts, setPosts] = useState([1,2,3,4]);

    useEffect(() => {
        const url = new URL(window.location.href);
        setSocietyName(url.searchParams.get("name"));
      }, []);

  return (
    <div> 
        <div>
            Welcome to {societyName} Hub
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

export default SocietyPosts