import { useState, useEffect } from 'react';

const WEBSOCKET_URL = "wss://jp99drwy2e.execute-api.ap-south-1.amazonaws.com/production";

function ChatComponent() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]); // Array of { username, message }
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Establish the WebSocket connection
    const ws = new WebSocket(WEBSOCKET_URL);
    
    ws.onopen = () => {
      console.log("WebSocket connection established");
    };
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received message:", data);

      // Assuming the message includes { username, message }
      setMessages((prevMessages) => [...prevMessages, { username: data.username, message: data.message }]);
    };
    
    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    setSocket(ws);

    try {
      const username = localStorage.getItem("CognitoIdentityServiceProvider.1d127dkgs6v4ad0lloog0vh5ff.LastAuthUser");
      setUsername(username);
    } catch (error) {
      setUsername("User");
    }

    // Cleanup the connection on unmount
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (socket && input.trim()) {
      socket.send(
        JSON.stringify({
          action: "send",
          username: username, 
          message: input,
        })
      );
      setInput(""); // Clear the input after sending
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100 font-oxygen">
      <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
        {/* Chat Room Heading */}
        <h3 className="text-2xl font-semibold text-teal-600 text-center mb-6">Chat Room</h3>
        
        {/* Messages Container */}
        <div className="border border-gray-300 p-4 mb-4 h-80 overflow-y-auto bg-gray-50 rounded-lg">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-4 ${msg.username === username ? 'text-right' : 'text-left'}`}>
              {/* Username displayed separately */}
              <div className={`text-xs font-semibold ${msg.username === username ? 'text-teal-800' : 'text-gray-700'}`}>
                {msg.username}
              </div>

              {/* Separator Line */}
              <div className="my-1 border-t border-gray-300"></div>

              {/* Message Content */}
              <div
                className={`inline-block px-3 py-2 rounded-lg max-w-xs ${msg.username === username ? 'bg-teal-100 text-teal-800' : 'bg-gray-200 text-gray-800'}`}
              >
                {msg.message}
              </div>
            </div>
          ))}
        </div>

        {/* Input and Send Button */}
        <form onSubmit={sendMessage} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
          <button
            onClick={sendMessage}
            className="p-3 bg-teal-600 text-white rounded-r-lg hover:bg-teal-700 transition-all duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatComponent;
