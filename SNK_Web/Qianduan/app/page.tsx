'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';
import NewsFilter from '@/components/NewsFilter';
import { NewsItem, NewsFilter as NewsFilterType } from '@/types/news';

// 模拟新闻数据
const mockNews: NewsItem[] = [
  {
    id: '1',
    title: '特斯拉Q3财报超预期，股价大涨15%',
    summary: '特斯拉发布第三季度财报，营收和利润均超分析师预期，主要得益于Model Y的强劲销售表现。',
    content: '特斯拉今日发布第三季度财报，营收达到233.5亿美元，同比增长9%，净利润为18.53亿美元...',
    publishedAt: '2024-01-15T10:30:00Z',
    source: '36kr',
    category: '财经',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop',
    tags: ['特斯拉', '财报', '新能源汽车'],
    url: 'https://example.com/news/1'
  },
  {
    id: '2',
    title: 'OpenAI发布GPT-5预览版，性能大幅提升',
    summary: 'OpenAI宣布GPT-5预览版即将发布，新版本在理解能力和生成质量方面有显著提升。',
    content: 'OpenAI今日宣布，GPT-5预览版即将向部分用户开放测试。据官方介绍，GPT-5在多个基准测试中...',
    publishedAt: '2024-01-15T09:15:00Z',
    source: 'BBC',
    category: '科技',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    tags: ['OpenAI', 'GPT-5', '人工智能'],
    url: 'https://example.com/news/2'
  },
  {
    id: '3',
    title: '央行降准0.25个百分点，释放长期资金约5000亿元',
    summary: '中国人民银行决定下调金融机构存款准备金率0.25个百分点，预计释放长期资金约5000亿元。',
    content: '为保持流动性合理充裕，引导金融机构加大对实体经济的支持力度，中国人民银行决定...',
    publishedAt: '2024-01-15T08:45:00Z',
    source: '腾讯新闻',
    category: '财经',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop',
    tags: ['央行', '降准', '货币政策'],
    url: 'https://example.com/news/3'
  },
  {
    id: '4',
    title: '苹果Vision Pro将于2月2日在美国上市',
    summary: '苹果公司宣布，其首款空间计算设备Vision Pro将于2024年2月2日在美国市场正式发售。',
    content: '苹果公司今日宣布，Vision Pro将于2024年2月2日在美国市场正式发售，售价3499美元起...',
    publishedAt: '2024-01-15T07:30:00Z',
    source: '网易新闻',
    category: '科技',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop',
    tags: ['苹果', 'Vision Pro', 'AR/VR'],
    url: 'https://example.com/news/4'
  },
  {
    id: '5',
    title: '全球芯片短缺问题持续，台积电扩大产能',
    summary: '台积电宣布扩大先进制程产能，以应对全球芯片短缺问题，预计2024年产能提升20%。',
    content: '全球芯片短缺问题仍在持续，台积电今日宣布将扩大先进制程产能，计划在2024年将产能提升20%...',
    publishedAt: '2024-01-15T06:15:00Z',
    source: '36kr',
    category: '科技',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop',
    tags: ['台积电', '芯片', '半导体'],
    url: 'https://example.com/news/5'
  },
  {
    id: '6',
    title: '新能源汽车补贴政策延续，行业迎来新机遇',
    summary: '财政部宣布新能源汽车补贴政策将延续至2025年，预计将推动行业持续快速发展。',
    content: '财政部今日宣布，新能源汽车补贴政策将延续至2025年，补贴标准将根据技术进步和成本变化...',
    publishedAt: '2024-01-15T05:00:00Z',
    source: '腾讯新闻',
    category: '财经',
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=450&fit=crop',
    tags: ['新能源汽车', '补贴政策', '政策利好'],
    url: 'https://example.com/news/6'
  }
];

export default function Home() {
  const searchParams = useSearchParams();
  const [news, setNews] = useState<NewsItem[]>(mockNews);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(mockNews);
  const [filters, setFilters] = useState<NewsFilterType>({});
  const [loading, setLoading] = useState(false);

  // 处理URL参数
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters({ category: [category as any] });
    }
  }, [searchParams]);

  // 应用筛选器
  useEffect(() => {
    let result = [...news];

    // 来源筛选
    if (filters.source && filters.source.length > 0) {
      result = result.filter(item => filters.source!.includes(item.source));
    }

    // 分类筛选
    if (filters.category && filters.category.length > 0) {
      result = result.filter(item => filters.category!.includes(item.category));
    }

    // 搜索筛选
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // 排序
    if (filters.sortBy === 'publishedAt') {
      result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }

    setFilteredNews(result);
  }, [filters, news]);

  const handleFilterChange = (newFilters: NewsFilterType) => {
    setFilters(newFilters);
  };

  const loadMoreNews = async () => {
    setLoading(true);
    // 模拟加载更多新闻
    setTimeout(() => {
      const moreNews = mockNews.map(item => ({
        ...item,
        id: `${item.id}-${Date.now()}`,
        title: `${item.title} (续)`
      }));
      setNews(prev => [...prev, ...moreNews]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">最新新闻</h1>
          <p className="text-gray-600">获取来自36kr、BBC、腾讯新闻、网易新闻的最新财经科技资讯</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧筛选器 */}
          <div className="lg:w-80 flex-shrink-0">
            <NewsFilter onFilterChange={handleFilterChange} currentFilters={filters} />
          </div>

          {/* 右侧新闻列表 */}
          <div className="flex-1">
            {/* 结果统计 */}
            <div className="mb-6">
              <p className="text-gray-600">
                共找到 <span className="font-semibold text-gray-900">{filteredNews.length}</span> 条新闻
              </p>
            </div>

            {/* 新闻网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item) => (
                <NewsCard key={item.id} news={item} />
              ))}
            </div>

            {/* 加载更多 */}
            {filteredNews.length > 0 && (
              <div className="mt-8 text-center">
                <button
                  onClick={loadMoreNews}
                  disabled={loading}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? '加载中...' : '加载更多新闻'}
                </button>
              </div>
            )}

            {/* 无结果提示 */}
            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📰</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">暂无相关新闻</h3>
                <p className="text-gray-600">请尝试调整筛选条件或搜索关键词</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
