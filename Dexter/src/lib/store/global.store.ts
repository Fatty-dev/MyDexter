import { create } from "zustand";
import { persist } from "zustand/middleware";

type EmailStore = {
  email: string;
  setEmail: (email: string) => void;
};

type SelectionStore = {
  value: string;
  updateValue: (value: string) => void;
};

type SubscriptionType = "free" | "premium" | "enterprise" | string;

type SubscriptionStore = {
  type: SubscriptionType;
  setType: (type: SubscriptionType) => void;
  clearSubscription: () => void;
};

type SidebarStore = {
  expanded: boolean;
  toggleExpand: () => void;
};

type AuthStore = {
  expiresIn: number | null;
  accessToken: string;
  setExpiresIn: (time: number) => void;
  setAccessToken: (accessToken: string) => void;
  clearExpiresIn: () => void;
  resetAuthStore: () => void;
};

const useEmailStore = create<EmailStore>()(
  persist(
    (set) => ({
      email: "",
      setEmail: (email) => set((state) => ({ ...state, email })),
    }),
    { name: "use-email" }
  )
);

export const useSelectionStore = create<SelectionStore>((set) => ({
  value: "",
  updateValue: (value) => set({ value }),
}));

type PlatformSiteStore = {
  sites: Record<string, unknown>;
  setSite: (platform: string, site: unknown) => void;
  resetPlatforms: () => void;
};

export const useUserPlatformSiteStore = create<PlatformSiteStore>()(
  persist(
    (set) => ({
      sites: {},
      setSite: (platform, site) =>
        set((state) => ({
          sites: {
            ...state.sites,
            [platform]: site,
          },
        })),
      resetPlatforms: () => set({ sites: {} }),
    }),
    { name: "use-platformsite" }
  )
);

export const useUserSubscriptionTypeStore = create<SubscriptionStore>()(
  persist(
    (set) => ({
      type: "free",
      setType: (type) => set({ type }),
      clearSubscription: () => set({ type: "free" }),
    }),
    { name: "use-subscriptiontype" }
  )
);

export const useSidebar = create<SidebarStore>()(
  persist(
    (set, get) => ({
      expanded: true,
      toggleExpand: () => {
        set({ expanded: !get().expanded });
      },
    }),
    { name: "use-sidebar" }
  )
);

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      expiresIn: null,
      accessToken: "",
      setExpiresIn: (time) => set({ expiresIn: time }),
      setAccessToken: (accessToken) =>
        set((state) => ({ ...state, accessToken })),
      clearExpiresIn: () => set({ expiresIn: null }),
      resetAuthStore: () => set({ expiresIn: null, accessToken: "" }),
    }),
    { name: "use-auth-dex" }
  )
);

export default useEmailStore;
