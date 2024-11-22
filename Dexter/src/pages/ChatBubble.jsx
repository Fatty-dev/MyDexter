import React, { useState } from "react";
import { FiUser } from "react-icons/fi";

import profile_logo from "../assets/logo.svg"; 
import InputField from "../components/InputField";
import ResponseHeader from "../components/ResponseHeader";

const ChatBubblePage = () => {

  const [messages, setMessages] = useState([
    { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet neque nec tellus vulputate aliquam tincidunt sit amet risus. Vestibulum luctus dapibus ex in pellentesque. Proin placerat suscipit tellus ut iaculis. Nulla dictum aliquet tellus.", sender: "incoming" },
    // { id: 2, text: "I'm good, thanks! What about you?", sender: "outgoing" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([
      ...messages,
      { id: messages.length + 1, text: input, sender: "outgoing" },
    ]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-4">
      
      <ResponseHeader />

      {/* Chat body */}
      <div className="w-full sm:w-[80%] mt-[8rem] lg:mt-[5rem] md:w-[70%] lg:w-[60%]  flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "outgoing" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            {/* AI Logo for incoming messages */}
            {message.sender === "incoming" ? (
              <div className="flex items-start mr-2">
                <img src={profile_logo} alt="AI Logo" className="w-8 h-8" />
              </div>
            ) : (
              <div className="flex items-center ml-2">
                <FiUser className="text-gray-500 text-xl" />
              </div>
            )}

            <div
              className={`${
                message.sender === "outgoing" ? "text-black" : "text-black"
              } rounded-lg px-3 max-w-lg `}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Chat footer */}
      <div className="fixed bottom-2 w-full">
      <InputField input={input} setInput={setInput} sendMessage={sendMessage} />
      <p className="text-secondary text-center text-sm mt-2 px-4 ">
        3 searches left today. Reloads daily.
      </p>
      </div>

      {/* Footer text */}
    
    </div>
  );
};

export default ChatBubblePage;
