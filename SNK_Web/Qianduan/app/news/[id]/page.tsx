'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { ArrowLeft, Share2, ExternalLink, Clock, Tag } from 'lucide-react';
import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';
import { NewsItem } from '@/types/news';

// 模拟新闻详情数据
const mockNewsDetail: NewsItem = {
  id: '1',
  title: '特斯拉Q3财报超预期，股价大涨15%',
  summary: '特斯拉发布第三季度财报，营收和利润均超分析师预期，主要得益于Model Y的强劲销售表现。',
  content: `
    <p>特斯拉今日发布第三季度财报，营收达到233.5亿美元，同比增长9%，净利润为18.53亿美元，每股收益为0.58美元。</p>
    
    <h2>主要财务指标</h2>
    <p>第三季度，特斯拉的汽车交付量达到435,059辆，同比增长27%。其中，Model Y和Model 3的交付量占比超过95%，显示出这两款车型在市场上的强劲表现。</p>
    
    <p>营收方面，汽车业务营收为196.3亿美元，同比增长5%。能源存储和发电业务营收为15.6亿美元，同比增长40%。服务和其他业务营收为21.6亿美元，同比增长32%。</p>
    
    <h2>毛利率表现</h2>
    <p>第三季度，特斯拉的毛利率为17.9%，虽然相比去年同期的25.1%有所下降，但环比第二季度的18.2%保持稳定。公司表示，毛利率的下降主要是由于新工厂的产能爬坡和原材料成本上涨等因素影响。</p>
    
    <h2>未来展望</h2>
    <p>特斯拉预计2024年全年交付量将达到180万辆，同比增长约37%。公司将继续扩大产能，特别是在德克萨斯州和柏林的新工厂。</p>
    
    <p>在技术方面，特斯拉将继续推进自动驾驶技术的研发，预计将在2024年推出更高级别的自动驾驶功能。同时，公司也在积极开发新的车型，包括Cybertruck和下一代Roadster。</p>
    
    <h2>市场反应</h2>
    <p>财报发布后，特斯拉股价在盘后交易中大涨15%，显示出市场对公司业绩的认可。分析师普遍认为，特斯拉在电动汽车市场的领先地位将进一步巩固。</p>
  `,
  publishedAt: '2024-01-15T10:30:00Z',
  source: '36kr',
  category: '财经',
  imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop',
  tags: ['特斯拉', '财报', '新能源汽车', 'Model Y', '电动汽车'],
  url: 'https://example.com/news/1'
};

// 模拟相关新闻
const mockRelatedNews: NewsItem[] = [
  {
    id: '2',
    title: 'OpenAI发布GPT-5预览版，性能大幅提升',
    summary: 'OpenAI宣布GPT-5预览版即将发布，新版本在理解能力和生成质量方面有显著提升。',
    content: 'OpenAI今日宣布，GPT-5预览版即将向部分用户开放测试...',
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
    content: '为保持流动性合理充裕，引导金融机构加大对实体经济的支持力度...',
    publishedAt: '2024-01-15T08:45:00Z',
    source: '腾讯新闻',
    category: '财经',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop',
    tags: ['央行', '降准', '货币政策'],
    url: 'https://example.com/news/3'
  }
];

export default function NewsDetail() {
  const params = useParams();
  const router = useRouter();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟API调用
    setTimeout(() => {
      setNews(mockNewsDetail);
      setRelatedNews(mockRelatedNews);
      setLoading(false);
    }, 500);
  }, [params.id]);

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'yyyy年MM月dd日 HH:mm', { locale: zhCN });
    } catch {
      return '未知时间';
    }
  };

  const getSourceColor = (source: string) => {
    const colors = {
      '36kr': 'bg-blue-100 text-blue-800',
      'BBC': 'bg-red-100 text-red-800',
      '腾讯新闻': 'bg-green-100 text-green-800',
      '网易新闻': 'bg-orange-100 text-orange-800',
    };
    return colors[source as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      '财经': 'bg-yellow-100 text-yellow-800',
      '科技': 'bg-purple-100 text-purple-800',
      '综合': 'bg-gray-100 text-gray-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: news?.title,
          text: news?.summary,
          url: window.location.href,
        });
      } catch (error) {
        console.log('分享失败:', error);
      }
    } else {
      // 复制链接到剪贴板
      navigator.clipboard.writeText(window.location.href);
      alert('链接已复制到剪贴板');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="h-96 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">新闻未找到</h1>
          <button
            onClick={() => router.push('/')}
            className="btn-primary"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 返回按钮 */}
        <button
          onClick={() => router.push('/')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回首页</span>
        </button>

        {/* 新闻内容 */}
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* 标题区域 */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSourceColor(news.source)}`}>
                {news.source}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(news.category)}`}>
                {news.category}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {news.title}
            </h1>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{formatDate(news.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Tag className="w-4 h-4" />
                  <span>{news.tags.join(', ')}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-1 text-gray-600 hover:text-accent-600 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>分享</span>
                </button>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-600 hover:text-accent-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>原文</span>
                </a>
              </div>
            </div>
          </div>

          {/* 配图 */}
          <div className="relative w-full h-96">
            <Image
              src={news.imageUrl}
              alt={news.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 正文内容 */}
          <div className="p-6">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </div>
        </article>

        {/* 相关新闻 */}
        {relatedNews.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">相关新闻</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedNews.map((item) => (
                <NewsCard key={item.id} news={item} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
