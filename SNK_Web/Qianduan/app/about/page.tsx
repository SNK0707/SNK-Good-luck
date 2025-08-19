import Header from '@/components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">关于新闻聚合系统</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>项目简介</h2>
            <p>
              新闻聚合系统是一个现代化的新闻资讯平台，整合了来自多个权威新闻源的最新财经和科技资讯。
              我们致力于为用户提供高质量、多样化的新闻内容，帮助用户快速获取行业动态和重要信息。
            </p>

            <h2>新闻来源</h2>
            <ul>
              <li><strong>36kr</strong> - 专注于科技创业和商业创新的媒体平台</li>
              <li><strong>BBC</strong> - 英国广播公司，提供全球视角的新闻报道</li>
              <li><strong>腾讯新闻</strong> - 腾讯旗下的综合性新闻平台</li>
              <li><strong>网易新闻</strong> - 网易旗下的新闻资讯服务</li>
            </ul>

            <h2>内容特色</h2>
            <ul>
              <li><strong>财经新闻</strong> - 涵盖股市、基金、房地产、宏观经济等财经领域</li>
              <li><strong>科技新闻</strong> - 关注人工智能、互联网、硬件设备等科技前沿</li>
              <li><strong>实时更新</strong> - 定期从各新闻源获取最新内容</li>
              <li><strong>智能筛选</strong> - 支持按来源、分类、时间等多维度筛选</li>
            </ul>

            <h2>技术特点</h2>
            <ul>
              <li><strong>响应式设计</strong> - 完美适配桌面、平板和移动设备</li>
              <li><strong>现代化架构</strong> - 基于React和Next.js构建</li>
              <li><strong>性能优化</strong> - 图片懒加载、无限滚动等优化技术</li>
              <li><strong>用户体验</strong> - 简洁美观的界面设计，流畅的交互体验</li>
            </ul>

            <h2>使用说明</h2>
            <ol>
              <li>在首页浏览最新新闻，支持按分类快速筛选</li>
              <li>使用筛选器按来源、分类、时间等条件精确查找</li>
              <li>点击新闻卡片查看详细内容</li>
              <li>在详情页可以分享新闻或查看原文链接</li>
              <li>浏览相关新闻推荐，发现更多感兴趣的内容</li>
            </ol>

            <h2>联系我们</h2>
            <p>
              如果您有任何建议或反馈，欢迎通过以下方式联系我们：
            </p>
            <ul>
              <li>邮箱：contact@news-aggregator.com</li>
              <li>GitHub：github.com/news-aggregator</li>
            </ul>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-0">
                <strong>免责声明：</strong>
                本系统仅作为新闻聚合工具，所有新闻内容版权归原作者和发布平台所有。
                我们不对新闻内容的准确性、完整性和时效性承担责任。
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
