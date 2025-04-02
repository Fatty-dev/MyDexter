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
      setSite: (platform, site, siteId) =>
        set((state) => ({
          sites: { 
            ...state.sites, 
            [platform]: { site, siteId } 
          },
        })),
      resetPlatforms: () => set({ sites: {} })
    }),
    { name: "use-platformsite" }
  )
);

export const useUserSuscriptionTypeStore = create()(
  persist(
    (set) => ({
      type: "free",
      setType: (type) => set({ type }),
    }),
    {
      name: "use-suscriptiontype",
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
