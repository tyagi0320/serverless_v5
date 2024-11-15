import { useState } from "react";

const RoomChatPage = () => {

    const [message,setMessage] = useState('');

    const [userName, setUsername] = useState('Me');
    // const [Socket, setsocketId] = useState('');

    const [chats,setChats] = useState([]);
    // const [roomname,setRoomname] = useState('');

    // useEffect(() => {
    //     if(!socket){
    //         navigate('/main');   
    //     }

    //     socket.on("getSocket",({ socketId }) => {
    //         setsocketId(socketId);
    //     })

    //     socket.on("getUsername" ,({ username }) => {
    //         console.log(username);
    //         setUsername(username);
    //     })

    //     // socket.on("userJoined",({ username }) => {
    //     // })

    //     socket.on("roomName" ,({ NameofRoom, socketid }) => {
    //         setRoomname(NameofRoom);
    //         setsocketId(socketid);
    //     })

    //     socket.on("recieveRoom-message", ({ Message, username }) => {
    //         setChats(prevChats => [...prevChats, { from:username, Message }]);
    //     })

    //     socket.on('disconnect', () => {
    //         navigate('/main');
    //     });

    //     return () => {
    //         socket.disconnect();
    //     };

    // },[])

    return (
        <div className="h-svh font-serif">

            <div className="fixed pt-20 pb-24 flex flex-col p-5 w-full h-full overflow-y-auto border border-white">
                {
                    
                    chats.map((e,i) => {
                        if(e.from === userName){
                             return (<div className="m-1 self-end p-2 border border-black rounded-md max-w-sm md:max-w-md lg:max-w-lg" key={i}>
                                {`${e.Message}`}
                            </div>)
                        }
                        else{
                            return (<div className="m-1 self-start bg-gray-300 border border-black p-2 rounded-md max-w-sm md:max-w-md lg:max-w-lg" key={i}>
                                <div className="text- font-bold font-serif">
                                    {e.from}
                                </div>
                                <div className="font-serif pl-1">
                                    {e.Message}
                                </div>
                            </div>)
                        }
                    })
                }

            </div>
            <form onSubmit={ (e) => {
                e.preventDefault();
                if(message){
                    // socket.emit("sendRoom-message",{ Message : message, username : userName, Socket});
                    setMessage('');
                    setChats([...chats,{'Message': message, 'from':'Me'}])

                }
            } } className="fixed bottom-0 w-full flex h-20 items-center justify-center border border-white">
                <input type="text" value={message} onChange={ (e) => { setMessage(e.target.value) } } className="outline-none  w-full p-2 h-12 rounded-lg my-2 ml-2 mr-1 border border-black" />
                <button type="submit" className=" h-12 w-20 my-2 mr-2 ml-1 active:shadow-inner active:shadow-white shadow-sm shadow-white rounded-md border border-black select-none cursor-pointer">Send</button>
            </form>
        </div>
    )
}

export default RoomChatPage;