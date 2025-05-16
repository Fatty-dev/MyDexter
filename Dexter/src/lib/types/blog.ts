export interface BlogPost {
  _id: string;
  userId: string;
  mainKeyword: string[];
  title: string;
  keywords: string[];
  estimatedMonthlyTraffic: number;
  content: string;
  status: string;
  generationType: string;
  seoScore: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  metadata: {
    wordCount: number;
    characterCount: number;
    mainKeyword: string;
    metaTitle: string;
    metaDescription: string;
    readingTime: number;
  };
  seoAnalysis: {
    mainKeywordPositions: {
      content: any[];
    };
    mainKeywordDensity: number;
    contentLength: number;
    readabilityScore: number;
  };
  advanced: {
    webConnectivity: {
      enabled: boolean;
      searchDepth: string;
    };
    outlineEditor: {
      enabled: boolean;
      magicBagEnabled: boolean;
      aiModel: string;
      headlines: any[];
    };
    directory: {
      path: string;
      name: string;
    };
  };
  linking: {
    internal: {
      enabled: boolean;
      wordpressSite: string;
      autoIndex: boolean;
    };
    external: {
      enabled: boolean;
      linkType: string;
      manualLinks: any[];
      autoIntegrate: boolean;
    };
  };
  structure: {
    formatting: {
      includeBold: boolean;
      includeItalics: boolean;
      includeLists: boolean;
    };
    sections: {
      includeHook: boolean;
      includeConclusion: boolean;
      includeTables: boolean;
      includeH3: boolean;
      includeKeyTakeaway: boolean;
      includeFAQ: boolean;
      includeQuotes: boolean;
      includeBulletpoint: boolean;
      includeKeyTakeaways: boolean;
      introductoryHookBrief: string;
    };
    internalLinking: {
      enabled: boolean;
      maxLinks: number;
    };
    externalLinking: {
      enabled: boolean;
      maxLinks: number;
    };
    outlineEditor: {
      enabled: boolean;
      magicBagEnabled: boolean;
    };
    _id: string;
  };
  images: BlogPostImage[];
  settings: {
    costEstimate: {
      generations: number;
      wordCount: number;
    };
    language: string;
    articleSize: string;
    articleMaxWords: number;
    toneOfVoice: string;
    aiModel: string;
    pointOfView: string;
    humanizeText: boolean;
    readingLevel: string;
    showMasterfile: boolean;
    viaAPIKeys: boolean;
    _id: string;
  };
  mediaSettings: {
    includeImages: boolean;
    imageCount: number;
    keywordInFirstImage: boolean;
    mediaPlacement: string;
    imageStyle: string;
    includeVideos: boolean;
    videoCount: number;
    brandName: string;
    aiImages: string;
    youTubeVideos: string;
    numberOfVideos: number;
    videoLayout: string;
    customInstructions: string;
  };
  performance: {
    _id: string;
    organicTraffic: number;
    pagesPerSession: number;
  };
  platformPublications: any[];

  // optional fields
  rating?: number;
}

export interface BlogPostImage {
  _id: string;
  url: string;
  altText: string;
  position: number;
}
