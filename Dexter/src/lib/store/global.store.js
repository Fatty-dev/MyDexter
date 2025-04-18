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

export const useSelectionStore = create((set) => ({
  value: "",
  updateValue: (value) => set({ value }),
}));

export const useUserPlatformSiteStore = create()(
  persist(
    (set) => ({
      sites: {},
      setSite: (platform, site) =>
        set((state) => ({
          sites: {
            ...state.sites,
            [platform]: site, // Store the entire site object
          },
        })),
      resetPlatforms: () => set({ sites: {} }),
    }),
    { name: "use-platformsite" }
  )
);

export const useUserSubscriptionTypeStore = create()(
  persist(
    (set) => ({
      type: "free",
      setType: (type) => set({ type }),
      clearSubscription: () => set({ type: "free" }),
    }),
    {
      name: "use-subscriptiontype",
    }
  )
);

export const useSidebar = create()(
  persist(
    (set, get) => ({
      expanded: true,
      toggleExpand: () => {
        const state = get();
        set({ expanded: !state.expanded });
      },
    }),
    { name: "use-sidebar" }
  )
);

export const useAuthStore = create()(
  persist(
    (set, get) => ({
      expiresIn: null,
      accessToken: "",
      setExpiresIn: (time) => {
        set({ expiresIn: time });
      },
      setAccessToken: (accessToken) =>
        set((state) => ({ ...state, accessToken })),
      clearExpiresIn: () => set({ expiresIn: null }),
      resetAuthStore: () => set({ expiresIn: null, accessToken: "" }),
    }),
    { name: "use-auth-dex" }
  )
);
