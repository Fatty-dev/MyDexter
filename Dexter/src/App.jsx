import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from './components/Layout'
import Provider from './pages/Provider';
import Prompt from './pages/Prompt';
import ChatBubble from './pages/ChatBubble';
import Signup from './pages/Onboard/Signup';
import Login from './pages/Onboard/Login';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>

    <Route
          path="/"
          element={
            <Provider>
              <Layout />
            </Provider>
          }
        >
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Prompt/>}/>
          <Route path="/chat" element={<ChatBubble/>}/>

          </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App