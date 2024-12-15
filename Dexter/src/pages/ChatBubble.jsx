import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import profile_logo from "../assets/logo.svg"; // AI's profile logo
import ContinueChat from "../components/Dashboardcomp/ContinueChat";
import ResponseHeader from "../components/Dashboardcomp/ResponseHeader";

const ChatBubblePage = () => {
  const location = useLocation();
  const chatData = location.state;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatData) {
      // Format the timestamp
      const formattedTime = new Date(chatData.latestMessage.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // Add the incoming message from the response to the chat
      const initialMessage = {
        id: 1,
        text: chatData.latestMessage.content,
        sender: "incoming",
        timestamp: formattedTime, // Pass formatted time here
      };
      setMessages([initialMessage]);
    }
  }, [chatData]);

  const addMessage = (newMessage) => {
    // Add the outgoing message
    const outgoingMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: "outgoing",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages((prevMessages) => [...prevMessages, outgoingMessage]);

    // Simulate the incoming response (from AI or backend)
    setTimeout(() => {
      const simulatedResponse = {
        id: messages.length + 2,
        text: "This is a simulated response from the AI.",
        sender: "incoming",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prevMessages) => [...prevMessages, simulatedResponse]);
    }, 1000); // Simulating a delay for the AI response
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-4">
      <ResponseHeader chatTitle={chatData?.chatTitle || "Chat"} timestamp={chatData?.latestMessage.timestamp} />

      {/* Chat body */}
      <div className="w-full sm:w-[80%] mt-[8rem] lg:mt-[5rem] md:w-[70%] lg:w-[50%] mx-auto flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "outgoing" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            {/* Display the icon for the person asking the question (outgoing) */}
            {message.sender === "outgoing" ? (
              <div className="flex items-center lg:ml-2 ml-1">
                <FiUser className="text-gray-500 text-xl" /> {/* Person icon */}
              </div>
            ) : (
              <div className="flex items-start mr-2 flex-shrink-0">
                <img
                  src={profile_logo}
                  alt="AI Logo"
                  className="lg:size-8 size-6"
                />
              </div>
            )}

            {/* Message bubble */}
            <div
              className={`${
                message.sender === "outgoing" ? "text-black bg-blue-100" : "text-black bg-gray-200"
              } rounded-lg lg:px-3 px-2 max-w-lg py-2`}
            >
              {message.text}
              <div className="text-xs text-gray-500 mt-1">{message.timestamp}</div> {/* Display the timestamp */}
            </div>
          </div>
        ))}
      </div>

      {/* Chat footer */}
      <div className="fixed bottom-2 w-full">
        <ContinueChat addMessage={addMessage} />
        <p className="text-secondary text-center text-sm mt-2 px-4 ">
          3 searches left today. Reloads daily.
        </p>
      </div>
    </div>
  );
};

export default ChatBubblePage;
