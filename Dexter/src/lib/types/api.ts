export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface User {
  oauth: {
    wordpress: {
      accessToken: string;
      tokenType: string;
      scope: string;
      sites: any[];
    };
    google: {
      analyticsProperties: any[];
    };
    shopify: any[];
  };
  platforms: {
    wordpress: {
      sites: WordpressSite[];
    };
  };
  _id: string;
  email: string;
  ipAddress: string;
  isEmailVerified: boolean;
  emailVerificationExpires: string;
  subscription: Subscription;
  settings: UserSettings;
  __v: number;
  updatedAt: string;
}

export interface WordpressSite {
  siteId: number;
  name: string;
  url: string;
  ga4TrackingCode: string | null;
}

export interface Subscription {
  type: string;
  billingCycle: string;
  price: number;
  endDate: string;
  status: string;
  autoRenew: boolean;
  lastBillingDate: string;
  nextBillingDate: string;
  stripeSubscriptionId: string;
  stripePlanId: string;
}

export interface UserSettings {
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  privacy: {
    dataSharing: boolean;
    analytics: boolean;
  };
  business: {
    name: string;
    description: string;
    contactEmail: string;
    website: string;
    services: any[];
  };
  builderProfile: {
    expertise: string[];
    portfolioLink: string;
    hourlyRate: number;
  };
  customInstructions: {
    memoryEnabled: boolean;
    rememberedItems: any[];
  };
  verification: {
    status: string;
  };
  sharedLinks: {
    receiveFeedbackEmails: boolean;
  };
  connectedApps: {
    shopify: {
      stores: any[];
    };
    wordpress: {
      sites: any[];
    };
  };
  security: {
    mfaEnabled: boolean;
  };
  modelImprovement: {
    contributeData: boolean;
  };
  verificationStatus: {
    isVerified: boolean;
  };
  theme: string;
  archivedPosts: any[];
  language: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
