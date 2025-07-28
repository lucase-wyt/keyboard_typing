# 英语打字练习 - React + Electron 版本

一个基于 React 和 Electron 构建的现代化英语打字练习桌面应用程序，采用单页应用（SPA）架构实现组件化和解耦设计。

## 🚀 重构说明

本项目已从原生 HTML/JavaScript 架构重构为 React 单页应用架构：

- ✅ **组件化设计** - 采用 React 组件化开发，代码结构更清晰
- ✅ **状态管理** - 使用 React Context 进行全局状态管理
- ✅ **路由管理** - 使用 React Router 实现页面路由
- ✅ **样式方案** - 采用 styled-components 进行 CSS-in-JS 开发
- ✅ **现代工具链** - 使用 Create React App 构建工具链
- ✅ **类型安全** - 支持 TypeScript 类型检查（可选）

## 🏗️ 项目架构

```
src/
├── components/          # React 组件
│   ├── App.jsx         # 主应用组件
│   ├── Sidebar.jsx     # 侧边栏导航
│   ├── LoadingScreen.jsx # 加载屏幕
│   └── AppInitializer.jsx # 应用初始化器
├── pages/              # 页面组件
│   ├── PracticePage.jsx   # 练习页面
│   ├── LibraryPage.jsx    # 词库管理页面
│   ├── StatisticsPage.jsx # 统计分析页面
│   └── SettingsPage.jsx   # 设置页面
├── contexts/           # React Context
│   ├── DatabaseContext.jsx # 数据库上下文
│   ├── SettingsContext.jsx # 设置上下文
│   └── ThemeContext.jsx    # 主题上下文
├── hooks/              # 自定义 Hooks
│   └── useBuiltinLibraries.js # 内置词库 Hook
├── styles/             # 样式文件
│   ├── GlobalStyles.js # 全局样式
│   └── index.css      # 基础样式
├── index.js           # React 应用入口
├── main.js            # Electron 主进程
├── preload.js         # Electron 预加载脚本
└── renderer/          # 原生 HTML/JS（已废弃）
```

## 🎯 功能特点

### 📝 智能打字练习

- **分级练习** - 初级、中级、高级难度分级
- **多种文本类型** - 单词、句子、编程代码
- **实时反馈** - 即时显示正确/错误字符
- **统计分析** - WPM、准确率、错误统计
- **计时练习** - 可设置练习时长

### � 词库管理系统

- **内置词库** - 预置多个精选英语词库
- **自定义词库** - 创建和编辑个人词库
- **导入导出** - 支持文件导入导出功能
- **分类管理** - 按类型和难度分类管理

### 📊 统计分析功能

- **进步追踪** - 长期练习进度跟踪
- **详细统计** - 速度、准确率、错误分析
- **历史记录** - 完整的练习历史记录
- **图表展示** - 可视化统计数据

### ⚙️ 个性化设置

- **界面定制** - 字体大小、主题选择
- **练习设置** - 难度级别、时间设置
- **音效设置** - 按键音效开关
- **语言设置** - 多语言界面支持

### � 数据持久化

- **本地存储** - 使用 IndexedDB 本地存储
- 自动保存用户练习设置
- 本地存储练习偏好和历史数据
- 数据备份和恢复功能

## 系统要求

## 🚀 开发环境

### 环境要求

- Node.js 16+ 或 18+
- pnpm 或 npm 包管理器
- Git 版本控制

### 本地开发

1. **克隆项目**

   ```bash
   git clone <repository-url>
   cd keyboard_system
   ```

2. **安装依赖**

   ```bash
   pnpm install
   # 或
   npm install
   ```

3. **启动开发环境**

   ```bash
   pnpm run dev
   # 或
   npm run dev
   ```

   这将同时启动：

   - React 开发服务器 (http://localhost:3000)
   - Electron 桌面应用

4. **仅启动 React 开发服务器**

   ```bash
   pnpm run react-dev
   ```

5. **仅启动 Electron**
   ```bash
   pnpm run electron-dev
   ```

### 生产构建

1. **构建 React 应用**

   ```bash
   pnpm run react-build
   ```

2. **构建 Electron 应用**

   ```bash
   pnpm run build
   ```

3. **打包发布版本**
   ```bash
   pnpm run dist
   ```

## 📦 技术栈

### 前端框架

- **React 18** - 现代化 UI 库
- **React Router 6** - 单页应用路由
- **styled-components** - CSS-in-JS 样式方案
- **framer-motion** - 动画效果库

### 桌面应用

- **Electron** - 跨平台桌面应用框架
- **electron-builder** - 应用打包工具

### 开发工具

- **Create React App** - React 应用脚手架
- **concurrently** - 并发运行多个命令
- **wait-on** - 等待服务启动工具

### 数据存储

- **IndexedDB** - 浏览器本地数据库

## 📝 使用说明

### 基本操作

1. **开始练习**

   - 在练习页面选择词库
   - 点击"开始练习"按钮
   - 在输入框中输入显示的文本

2. **词库管理**

   - 创建自定义词库
   - 编辑现有词库内容
   - 导入/导出词库文件

3. **查看统计**

   - 查看练习历史记录
   - 分析练习进度趋势
   - 查看详细统计数据

4. **个性化设置**
   - 调整界面主题和字体
   - 设置练习参数
   - 配置音效和提示

### 快捷操作

- **Ctrl + R** - 重新开始当前练习
- **Esc** - 结束当前练习
- **Tab** - 在设置页面切换选项

## 🔧 自定义开发

### 添加新页面

1. 在 `src/pages/` 创建新的页面组件
2. 在 `src/components/App.jsx` 中添加路由
3. 在 `src/components/Sidebar.jsx` 中添加导航项

### 扩展上下文

1. 在 `src/contexts/` 创建新的上下文
2. 在 `src/components/App.jsx` 中添加 Provider
3. 在需要的组件中使用自定义 Hook

### 自定义样式

- 修改 `src/styles/GlobalStyles.js` 全局样式
- 使用 styled-components 创建组件样式
- 在 `src/contexts/ThemeContext.jsx` 中定义主题变量

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/新功能`)
3. 提交更改 (`git commit -am '添加新功能'`)
4. 推送到分支 (`git push origin feature/新功能`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔮 未来计划

- [ ] 添加在线词库同步功能
- [ ] 支持多人竞赛模式
- [ ] 增加语音识别练习
- [ ] 添加更多语言支持
- [ ] 集成 AI 个性化推荐

## ❓ 常见问题

**Q: 如何重置所有数据？**
A: 在设置页面点击"重置设置"，或清除浏览器数据。

**Q: 支持哪些文件格式导入？**
A: 目前支持 JSON 格式的词库文件导入。

**Q: 如何备份练习数据？**
A: 在词库管理页面使用导出功能备份数据。

**Q: 应用程序无法启动？**
A: 请检查 Node.js 版本，确保使用 16+ 版本。

- [ ] 添加语音朗读功能
- [ ] 支持自定义键盘布局
- [ ] 添加练习游戏化元素
- [ ] 多语言界面支持
- [ ] 云端数据同步
- [ ] 练习进度分析图表

## 许可证

MIT License - 详见 LICENSE 文件

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 支持

如果您觉得这个项目有用，请给它一个星标 ⭐️

---

**开始您的编程英语打字练习之旅吧！** 🚀
