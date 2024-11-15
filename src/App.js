import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';  // Importing the correct component
import User from './components/User';
import SocietyPosts from './components/SocietyPosts';
import RoomChatPage from './components/LiveChat';
import SocietyHead from './components/SocietyHeadAuth';
import Society from './components/Society';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import DeletePost from './components/DeletePost';

function App() {
    return (
        <Router>
            <Routes>
                {/* Make sure the component name matches */}
                <Route path="/" element={<LandingPage />} />  
                <Route path="/User" element={<User />} />
                <Route path="/society-head" element={<SocietyHead />} />
                <Route path="/societyPosts" element={<SocietyPosts />} />
                <Route path="/livechat" element={<RoomChatPage />} />
                <Route path="/society" element={<Society />} />
                <Route path="/createPost" element={<CreatePost />} />
                <Route path="/updatePost" element={<UpdatePost />} />
                <Route path="/deletePost" element={<DeletePost />} />
            </Routes>
        </Router>
    );
}

export default App;
