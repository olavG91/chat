import ChatBox from './ChatBox';
import MessageList from './MessageList';
import Login from './Login';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Settings from './Settings';

function ReactRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/settings" element={<Settings />}/>
            </Routes>
        </Router>
    );
}

export default ReactRoutes;