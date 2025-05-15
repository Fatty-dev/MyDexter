import React, { useState, useEffect, FC } from "react";
import { User, Bot, Copy, Check, ExternalLink } from "lucide-react";
import ReactMarkdown, { Components } from "react-markdown";

interface ApiResponse {
  response: string;
}

interface MessageProps {
  type: "user" | "assistant";
  content: string;
  typing?: boolean;
  scrollToBottom?: () => void;
}

interface TypedResponseProps {
  content: string;
  scrollToBottom?: () => void;
}

interface AIChatResponseFormatterProps {
  apiResponse?: ApiResponse;
  displayTypingEffect?: boolean;
  scrollToBottom?: () => void;
}

interface SimpleResponseFormatterProps {
  apiResponse?: ApiResponse;
}

const sampleResponse: ApiResponse = {
  response:
    "I can assist you with a variety of financial tasks, including:\n\n1. **crypto currency**: Send and receive cryptocurrencies like ETH, manage your crypto wallet, and check balances.\n\n2. **Naira transactions**: \n   - Transfer Naira to other Mr. Monei users.\n   - Withdraw funds to your bank account.\n   - Fund your wallet with Naira.\n   - Pay bills such as electricity, cable TV, and mobile data.\n   - Purchase airtime for mobile phones.\n\n3. **Wallet Management**: Check your wallet balance, transaction history, and manage your funds.\n\n4. **Bill payments**: Validate and process payments for various services, including utilities and subscriptions.\n\nIf you have a specific task in mind, just let me know, and I'll be happy to assist you!",
};

const TypedResponse: FC<TypedResponseProps> = ({ content, scrollToBottom }) => {
  const [displayedContent, setDisplayedContent] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);

  const customComponents: Components = {
    a: ({ node, ...props }) => (
      <a
        {...props}
        className="text-blue-600 hover:text-blue-800 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
        <ExternalLink size={12} className="inline ml-1" />
      </a>
    ),

    strong: ({ node, ...props }) => <strong {...props} className="font-bold" />,
    em: ({ node, ...props }) => (
      <em {...props} className="italic text-gray-800" />
    ),
    ul: ({ node, ...props }) => (
      <ul {...props} className="list-disc pl-5 my-2" />
    ),
    ol: ({ node, ...props }) => (
      <ol {...props} className="list-decimal pl-5 my-2" />
    ),
    li: ({ node, ...props }) => <li {...props} className="my-1" />,
    code: ({ node, ...props }) => (
      <code
        {...props}
        className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono"
      />
    ),
  };

  useEffect(() => {
    if (!content) return;

    setIsTyping(true);
    setDisplayedContent("");

    let i = 0;
    const typingSpeed = 5;

    const typeContent = () => {
      if (i < content.length) {
        setDisplayedContent(content.substring(0, i + typingSpeed));
        i += typingSpeed;
        setTimeout(typeContent, 10);

        scrollToBottom?.();
      } else {
        setIsTyping(false);
      }
    };

    typeContent();

    return () => {
      i = content.length;
    };
  }, [content]);

  return (
    <div className="flex-1">
      <ReactMarkdown components={customComponents}>
        {displayedContent}
      </ReactMarkdown>
      {isTyping && (
        <span className="inline-block w-2 h-4 bg-gray-500 ml-1 animate-pulse">
          &nbsp;
        </span>
      )}
    </div>
  );
};

const Message: FC<MessageProps> = ({
  type,
  content,
  scrollToBottom,
  typing = false,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex gap-4 p-4 ${type === "user" ? "bg-white" : ""}`}>
      <div className="flex flex-col flex-1">
        <div className="relative">
          {type === "assistant" && typing ? (
            <TypedResponse content={content} scrollToBottom={scrollToBottom} />
          ) : (
            <ReactMarkdown>{content}</ReactMarkdown>
          )}
        </div>
      </div>

      {type === "assistant" && (
        <button
          onClick={copyToClipboard}
          className={`self-start p-1 rounded-md hover:bg-gray-200 text-gray-500 ${
            copied ? "text-green-500" : ""
          }`}
          title="Copy to clipboard"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      )}
    </div>
  );
};

const AIChatResponseFormatter: FC<AIChatResponseFormatterProps> = ({
  apiResponse = sampleResponse,
  displayTypingEffect,
  scrollToBottom,
}) => {
  return (
    <Message
      type="assistant"
      content={apiResponse.response}
      typing={displayTypingEffect}
      scrollToBottom={scrollToBottom}
    />
  );
};

export const SimpleResponseFormatter: FC<SimpleResponseFormatterProps> = ({
  apiResponse = sampleResponse,
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border">
      <div className="flex-1">
        <ReactMarkdown>{apiResponse.response}</ReactMarkdown>
      </div>
    </div>
  );
};

export default AIChatResponseFormatter;
