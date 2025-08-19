#!/bin/bash

echo "🚀 启动新闻聚合系统..."

# 检查Node.js版本
if ! command -v node &> /dev/null; then
    echo "❌ 错误：未安装Node.js，请先安装Node.js 18.0或更高版本"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ 错误：Node.js版本过低，需要18.0或更高版本"
    echo "当前版本：$(node -v)"
    exit 1
fi

echo "✅ Node.js版本检查通过：$(node -v)"

# 检查是否已安装依赖
if [ ! -d "node_modules" ]; then
    echo "📦 正在安装依赖..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ 依赖安装失败"
        exit 1
    fi
    echo "✅ 依赖安装完成"
else
    echo "✅ 依赖已安装"
fi

# 启动开发服务器
echo "🌐 启动开发服务器..."
echo "📱 访问地址：http://localhost:3000"
echo "🔄 按 Ctrl+C 停止服务器"
echo ""

npm run dev
