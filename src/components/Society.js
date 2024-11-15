import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Society() {

    const [name, setName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const url = new URL(window.location.href);
        setName(url.searchParams.get("name"));
    },[])

  return (
    <div>
        <div className="p-7 text-2xl font-bold">
            Welcome to {name} Hub
        </div>

        <div className="p-10">
            <div className="p-10">
                <div className="p-4">
                    <button className="m-3 border border-black px-2 text-lg hover:bg-gray-400" onClick={() => {
                        navigate(`/createPost?name=${name}`);
                    }}> Create a Post  </button>
                    <button className="m-3 border border-black px-2 text-lg hover:bg-gray-400" onClick={() => {
                        navigate(`/updatePost?name=${name}`);
                    }}> Update a Post </button>
                    <button className="m-3 border border-black px-2 text-lg hover:bg-gray-400" onClick={() => {
                        navigate(`/deletePost?name=${name}`);
                    }}> Delete a Post </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Society