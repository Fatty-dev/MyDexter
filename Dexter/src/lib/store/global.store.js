import { create } from "zustand";
import { persist } from "zustand/middleware";

const useEmailStore = create()(
  persist(
    (set) => ({
      email: "",

      setEmail: (email) => set((state) => ({ ...state, email })),
    }),
    {
      name: "use-email",
    }
  )
);

export default useEmailStore;
