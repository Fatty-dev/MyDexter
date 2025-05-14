import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import profile_logo from "../../../assets/logo.svg";
import ResponseHeader from "../../../components/Dashboardcomp/ResponseHeader";
import InputField from "../../../components/Dashboardcomp/InputField";
import { authApi, publicApi } from "../../../lib/config/axios-instance";
import { toast } from "sonner";
import SkeletonLoader from "../../../components/Dashboardcomp/SkeletonLoader";
import type { Message } from "@/lib/types/chat";

const ChatBubblePage = () => {
  const location = useLocation();
  const { chatId } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [dailyUsage, setDailyUsage] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(0);
  const [chatTitle, setChatTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchChat = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await authApi.get(`/chat/detail?chatId=${chatId}`);
      if (response.data.success) {
        const chatData = response.data.data;
        setChatTitle(chatData.title);
        setMessages(
          chatData.messages.map((msg: any, index: number) => ({
            id: index + 1,
            text: msg.content,
            sender: msg.role === "user" ? "outgoing" : "incoming",
            timestamp: new Date(msg.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          }))
        );
        setDailyUsage(chatData.usage.dailyUsage);
        setDailyLimit(chatData.usage.dailyLimit);
      } else {
        toast.error("Failed to fetch chat");
      }
    } catch (error) {
      console.error("Error fetching chat:", error);
      // toast.error("An error occurred while fetching chat");
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };
  useEffect(() => {
    if (!chatId) return;
    fetchChat();
  }, [chatId]);

  const fetchPublicChat = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await publicApi.get(`/chat/detail?chatId=${chatId}`);
      if (response.data.success) {
        const chatData = response.data.data;
        setChatTitle(chatData.title);
        setMessages(
          chatData.messages.map((msg: any, index: number) => ({
            id: index + 1,
            text: msg.content,
            sender: msg.role === "user" ? "outgoing" : "incoming",
            timestamp: new Date(msg.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          }))
        );
        setDailyUsage(chatData.usage.dailyUsage);
        setDailyLimit(chatData.usage.dailyLimit);
      } else {
        toast.error("Failed to fetch chat");
      }
    } catch (error) {
      console.error("Error fetching chat:", error);
      // toast.error("An error occurred while fetching chat");
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };
  useEffect(() => {
    if (!chatId) return;
    fetchPublicChat();
  }, [chatId]);

  const addMessage = (newMessage: Message) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const updateUsage = (usage: number, limit: number) => {
    setDailyUsage(usage);
    setDailyLimit(limit);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-4 pb-20">
      <ResponseHeader
        chatTitle={chatTitle || "Chat"}
        timestamp={new Date().toLocaleString()}
      />

      {/* Chat body */}
      <div className="w-full sm:w-[80%] mt-[1rem] lg:mt-[2rem] md:w-[70%] lg:w-[65%] mx-auto flex-1 overflow-y-auto p-4">
        {loading ? (
          <SkeletonLoader />
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "outgoing" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              {message.sender === "outgoing" ? (
                <div className="flex items-center lg:ml-2 ml-1">
                  <FiUser className="text-gray-500 text-xl" />
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

              <div
                className={`${
                  message.sender === "outgoing"
                    ? "text-[#344054] bg-[#F0F0F9]"
                    : "text-black"
                } rounded-lg lg:px-3 whitespace-pre-line px-2 max-w-lg py-2`}
              >
                {message.content}
                <div className="text-xs text-gray-500 mt-1">
                  {message.timestamp}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Chat footer */}
      <div className="fixed bg-gray-100 bottom-0 w-full">
        <InputField addMessage={addMessage} updateUsage={updateUsage} />
        <p className="text-secondary text-center text-sm mt-2 px-4 mb-2">
          {dailyUsage}/{dailyLimit} searches left today. Reloads daily.
        </p>
      </div>
    </div>
  );
};

export default ChatBubblePage;
