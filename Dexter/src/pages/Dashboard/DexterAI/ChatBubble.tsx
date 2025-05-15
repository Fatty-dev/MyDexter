import React, { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import profile_logo from "../../../assets/logo.svg";
import ResponseHeader from "../../../components/Dashboardcomp/ResponseHeader";
import InputField from "../../../components/Dashboardcomp/InputField";
import SkeletonLoader from "../../../components/Dashboardcomp/SkeletonLoader";
import type { Message } from "@/lib/types/chat";
import { useQuery } from "@tanstack/react-query";
import { getChatDetail } from "@/lib/services/chat.service";
import AIChatResponseFormatter from "@/components/Common/Chat/response-formatter";
import useChatStore from "@/lib/store/chat.store";

const ChatBubblePage = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [dailyUsage, setDailyUsage] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { data: details, isPending: loading } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: () => getChatDetail(chatId as string),
    refetchOnWindowFocus: false,
    enabled: !!chatId,
  });

  const { isNewChat } = useChatStore();

  const addMessage = (newMessage: Message) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const updateUsage = (usage: number, limit: number) => {
    setDailyUsage(usage);
    setDailyLimit(limit);
  };

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setMessages([]);
    scrollToBottom();
  }, [chatId]);

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex flex-col items-center pb-20">
      <ResponseHeader
        chatTitle={details?.title || "Chat"}
        timestamp={details?.lastUpdated}
      />

      {/* Chat body */}
      <div className="w-full sm:w-[80%] mt-[1rem] lg:mt-[2rem] md:w-[70%] lg:w-[65%] mx-auto flex-1 overflow-y-auto p-4">
        {loading ? (
          <SkeletonLoader />
        ) : (
          [...(details?.messages || []), ...messages].map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              {message.role === "user" ? (
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

              {message.role === "assistant" ? (
                <AIChatResponseFormatter
                  apiResponse={{ response: message.content }}
                  scrollToBottom={scrollToBottom}
                  displayTypingEffect={isNewChat || message.typing}
                />
              ) : (
                <div
                  className={`text-[#344054] bg-[#F0F0F9] py-2 rounded-lg lg:px-3 whitespace-pre-line px-2 max-w-lg`}
                >
                  {message.content}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <div ref={messagesEndRef} className="h-8" />

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
