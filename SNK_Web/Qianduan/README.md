# 新闻聚合系统

一个现代化的新闻资讯聚合平台，整合来自36kr、BBC、腾讯新闻、网易新闻的财经科技资讯。

## ✨ 功能特性

### 🏠 首页功能
- **新闻展示** - 卡片式图文布局，清晰展示新闻信息
- **分类筛选** - 支持按财经、科技等分类快速筛选
- **来源筛选** - 可选择特定新闻来源
- **时间排序** - 按发布时间或相关度排序
- **搜索功能** - 支持标题、摘要、标签搜索
- **加载更多** - 无限滚动加载更多新闻

### 📰 详情页功能
- **完整内容** - 展示新闻详细内容
- **分享功能** - 支持原生分享API和链接复制
- **原文链接** - 跳转到原始新闻页面
- **相关推荐** - 智能推荐相关新闻
- **返回导航** - 便捷的返回首页功能

### 📱 响应式设计
- **桌面端** (>1024px) - 网格式布局，每行3-4个卡片，侧边栏导航
- **平板端** (768px-1024px) - 网格式布局，每行2-3个卡片，可折叠导航
- **移动端** (<768px) - 单列卡片布局，汉堡菜单导航，触摸优化

## 🎨 设计风格

- **简约白色基调** - 参考Google News的简洁设计
- **清晰层次感** - 合理的留白和间距设计
- **卡片式设计** - 16:9图片比例，优雅的阴影效果
- **统一字体系统** - 使用Inter字体，确保良好的可读性
- **色彩系统** - 不同新闻来源使用不同颜色标识

## 🛠 技术栈

### 前端技术
- **框架** - Next.js 14 + React 18
- **语言** - TypeScript
- **样式** - Tailwind CSS
- **图标** - Lucide React
- **日期处理** - date-fns
- **HTTP客户端** - Axios

### 后端技术（规划中）
- **爬虫系统** - 新闻数据采集
- **API服务** - 数据接口服务
- **数据存储** - 新闻数据管理
- **缓存系统** - 性能优化

## 🚀 快速开始

### 环境要求
- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```

### 构建生产版本
```bash
npm run build
# 或
yarn build
```

### 启动生产服务器
```bash
npm start
# 或
yarn start
```

## 📁 项目结构

```
news-aggregator/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── about/             # 关于页面
│   └── news/[id]/         # 新闻详情页
├── components/             # React组件
│   ├── Header.tsx         # 头部导航组件
│   ├── NewsCard.tsx       # 新闻卡片组件
│   └── NewsFilter.tsx     # 新闻筛选组件
├── types/                  # TypeScript类型定义
│   └── news.ts            # 新闻相关类型
├── public/                 # 静态资源
├── package.json            # 项目配置
├── tailwind.config.js      # Tailwind配置
├── tsconfig.json           # TypeScript配置
└── README.md               # 项目说明
```

## 🔧 配置说明

### Tailwind CSS配置
项目使用Tailwind CSS进行样式管理，主要配置包括：
- 自定义颜色系统（primary、accent）
- 响应式断点配置
- 字体系统配置
- 组件样式扩展

### 图片配置
Next.js图片组件配置了以下域名：
- `images.unsplash.com` - 示例图片
- `via.placeholder.com` - 占位图片

## 📊 数据模型

### NewsItem接口
```typescript
interface NewsItem {
  id: string;              // 新闻ID
  title: string;           // 新闻标题
  summary: string;         // 新闻摘要
  content: string;         // 新闻内容
  publishedAt: string;     // 发布时间
  source: NewsSource;      // 新闻来源
  category: NewsCategory;  // 新闻分类
  imageUrl: string;        // 配图URL
  tags: string[];          // 相关标签
  url: string;             // 原文链接
}
```

## 🔮 未来规划

### 短期目标
- [ ] 实现真实的新闻API对接
- [ ] 添加用户认证系统
- [ ] 实现新闻收藏功能
- [ ] 添加新闻评论系统

### 长期目标
- [ ] 构建新闻爬虫系统
- [ ] 实现智能推荐算法
- [ ] 添加多语言支持
- [ ] 开发移动端应用

## 🤝 贡献指南

欢迎提交Issue和Pull Request来帮助改进这个项目！

### 开发流程
1. Fork项目到你的GitHub账户
2. 创建功能分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'Add amazing feature'`
4. 推送到分支：`git push origin feature/amazing-feature`
5. 创建Pull Request

## 📄 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

- 项目主页：https://github.com/news-aggregator
- 问题反馈：https://github.com/news-aggregator/issues
- 邮箱：contact@news-aggregator.com

---

如果这个项目对你有帮助，请给我们一个⭐️！
