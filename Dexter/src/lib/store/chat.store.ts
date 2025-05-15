import { create } from "zustand";

interface ChatStore {
  isNewChat: boolean;
  setIsNewChat: (isNewChat: boolean) => void;
}

const useChatStore = create<ChatStore>((set) => ({
  isNewChat: false,
  setIsNewChat: (isNewChat) => set({ isNewChat }),
}));

export default useChatStore;
