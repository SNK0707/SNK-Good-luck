export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  publishedAt: string;
  source: NewsSource;
  category: NewsCategory;
  imageUrl: string;
  tags: string[];
  url: string;
}

export type NewsSource = '36kr' | 'BBC' | '腾讯新闻' | '网易新闻';

export type NewsCategory = '财经' | '科技' | '综合';

export interface NewsFilter {
  source?: NewsSource[];
  category?: NewsCategory[];
  searchQuery?: string;
  sortBy?: 'publishedAt' | 'relevance';
}

export interface NewsResponse {
  data: NewsItem[];
  total: number;
  page: number;
  hasMore: boolean;
}
