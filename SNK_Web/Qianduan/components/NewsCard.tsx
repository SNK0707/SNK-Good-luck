'use client';

import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { NewsItem } from '@/types/news';

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MM月dd日 HH:mm', { locale: zhCN });
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

  return (
    <Link href={`/news/${news.id}`} className="block">
      <article className="news-card overflow-hidden group">
        {/* 图片区域 */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={news.imageUrl || '/placeholder-news.jpg'}
            alt={news.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* 图片加载失败时的占位符 */}
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">图片加载中...</span>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="p-4">
          {/* 标签区域 */}
          <div className="flex items-center space-x-2 mb-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSourceColor(news.source)}`}>
              {news.source}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
              {news.category}
            </span>
          </div>

          {/* 标题 */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-accent-600 transition-colors">
            {news.title}
          </h3>

          {/* 摘要 */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {news.summary}
          </p>

          {/* 底部信息 */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{formatDate(news.publishedAt)}</span>
            <div className="flex items-center space-x-1">
              {news.tags.slice(0, 2).map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 rounded text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
