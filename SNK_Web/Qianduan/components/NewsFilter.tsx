'use client';

import { useState } from 'react';
import { Filter, SortAsc, SortDesc } from 'lucide-react';
import { NewsSource, NewsCategory, NewsFilter as NewsFilterType } from '@/types/news';

interface NewsFilterProps {
  onFilterChange: (filters: NewsFilterType) => void;
  currentFilters: NewsFilterType;
}

export default function NewsFilter({ onFilterChange, currentFilters }: NewsFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const sources: NewsSource[] = ['36kr', 'BBC', '腾讯新闻', '网易新闻'];
  const categories: NewsCategory[] = ['财经', '科技', '综合'];

  const handleSourceChange = (source: NewsSource) => {
    const newSources = currentFilters.source?.includes(source)
      ? currentFilters.source.filter(s => s !== source)
      : [...(currentFilters.source || []), source];
    
    onFilterChange({
      ...currentFilters,
      source: newSources.length > 0 ? newSources : undefined
    });
  };

  const handleCategoryChange = (category: NewsCategory) => {
    const newCategories = currentFilters.category?.includes(category)
      ? currentFilters.category.filter(c => c !== category)
      : [...(currentFilters.category || []), category];
    
    onFilterChange({
      ...currentFilters,
      category: newCategories.length > 0 ? newCategories : undefined
    });
  };

  const handleSortChange = (sortBy: 'publishedAt' | 'relevance') => {
    onFilterChange({
      ...currentFilters,
      sortBy
    });
  };

  const clearFilters = () => {
    onFilterChange({});
  };

  const hasActiveFilters = Object.keys(currentFilters).length > 0;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      {/* 筛选器头部 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-medium text-gray-900">筛选新闻</h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-accent-600 hover:text-accent-700 text-sm font-medium"
        >
          {isExpanded ? '收起' : '展开'}
        </button>
      </div>

      {/* 筛选器内容 */}
      {isExpanded && (
        <div className="space-y-6">
          {/* 来源筛选 */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">新闻来源</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {sources.map((source) => (
                <label key={source} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentFilters.source?.includes(source) || false}
                    onChange={() => handleSourceChange(source)}
                    className="rounded border-gray-300 text-accent-600 focus:ring-accent-500"
                  />
                  <span className="text-sm text-gray-700">{source}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 分类筛选 */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">新闻分类</h4>
            <div className="grid grid-cols-3 gap-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentFilters.category?.includes(category) || false}
                    onChange={() => handleCategoryChange(category)}
                    className="rounded border-gray-300 text-accent-600 focus:ring-accent-500"
                  />
                  <span className="text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 排序选项 */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">排序方式</h4>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="sort"
                  value="publishedAt"
                  checked={currentFilters.sortBy === 'publishedAt'}
                  onChange={() => handleSortChange('publishedAt')}
                  className="border-gray-300 text-accent-600 focus:ring-accent-500"
                />
                <SortDesc className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">最新发布</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="sort"
                  value="relevance"
                  checked={currentFilters.sortBy === 'relevance'}
                  onChange={() => handleSortChange('relevance')}
                  className="border-gray-300 text-accent-600 focus:ring-accent-500"
                />
                <SortAsc className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">相关度</span>
              </label>
            </div>
          </div>

          {/* 清除筛选器 */}
          {hasActiveFilters && (
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={clearFilters}
                className="text-gray-600 hover:text-gray-800 text-sm font-medium"
              >
                清除所有筛选器
              </button>
            </div>
          )}
        </div>
      )}

      {/* 当前筛选器显示 */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {currentFilters.source?.map((source) => (
              <span key={source} className="px-2 py-1 bg-accent-100 text-accent-800 rounded-full text-xs">
                {source}
              </span>
            ))}
            {currentFilters.category?.map((category) => (
              <span key={category} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                {category}
              </span>
            ))}
            {currentFilters.sortBy && (
              <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                {currentFilters.sortBy === 'publishedAt' ? '最新发布' : '相关度'}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
