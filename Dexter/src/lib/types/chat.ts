export interface Message {
  id: number;
  content: string;
  role: "user" | "assistant";
  timestamp: string;
}

export interface ChatHistory {
  _id: string;
  userId: string;
  title: string;
  isArchived: boolean;
  lastUpdated: string;
  archivedAt: string;
  __v: number;
}

export interface ChatSession {
  chatId: string;
  chatTitle: string;
  latestMessage: Message;
  usage: {
    dailyUsage: number;
    dailyLimit: number;
  };
}

export interface ChatThread {
  _id: string;
  userId: string;
  title: string;
  messages: Message[];
  isArchived: boolean;
  lastUpdated: string;
  archivedAt: string;
  __v: number;
}
