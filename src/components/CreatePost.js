import React, { useEffect, useState } from 'react'

function CreatePost() {

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const url = new URL(window.location.href);
        setName(url.searchParams.get('name'));
    }, [])

    const submit = () => {
        console.log(`${title}`)
        console.log(`${content}`)
    }

  return (
    <div>
        <div>
            Create Post for {name}
        </div>
        <div className='p-10'>
            <div className='p-10'>
                <div className='p-2'>
                    Title <input className='border border-black' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='p-2'>
                    Content <input className='border border-black' value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div>
                    Attachment <input type='file' />
                </div>
            </div>

            <div className="p-10">

                <button className='border border-black px-2' onClick={submit}> Submit </button>

            </div>
        </div>
    </div>
  )
}

export default CreatePost