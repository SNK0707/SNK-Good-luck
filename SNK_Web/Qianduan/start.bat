@echo off
chcp 65001 >nul
echo 🚀 启动新闻聚合系统...

REM 检查Node.js版本
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 错误：未安装Node.js，请先安装Node.js 18.0或更高版本
    pause
    exit /b 1
)

echo ✅ Node.js版本检查通过

REM 检查是否已安装依赖
if not exist "node_modules" (
    echo 📦 正在安装依赖...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ 依赖安装失败
        pause
        exit /b 1
    )
    echo ✅ 依赖安装完成
) else (
    echo ✅ 依赖已安装
)

REM 启动开发服务器
echo 🌐 启动开发服务器...
echo 📱 访问地址：http://localhost:3000
echo 🔄 按 Ctrl+C 停止服务器
echo.

npm run dev

pause
