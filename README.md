# 左文清 · 策略产品经理 个人站

面向互联网产品经理（策略方向）求职的个人作品集网站。

## 本地预览

```bash
# 方式一：Python 内置服务器
python3 -m http.server 8080

# 方式二：npx（需 Node.js）
npx serve .
```

浏览器访问 [http://localhost:8080](http://localhost:8080)

## 部署

纯静态站点，可部署至：

- **GitHub Pages**：推送到 `gh-pages` 分支或在仓库 Settings → Pages 中启用
- **Vercel / Netlify**：连接仓库后自动部署
- **Cloudflare Pages**：上传或绑定 Git 仓库

## 文件结构

```
personal-site/
├── index.html      # 主页面
├── styles.css      # 样式
├── script.js       # 页面切换与导航
└── assets/         # 简历与作品集 PDF
    ├── zuowenqing resume.pdf
    ├── internship.pdf
    ├── marketing planner.pdf
    └── L'ORÉAL.pdf
```

## 自定义

- 修改 `index.html` 中的文案、经历与联系方式
- 在 `styles.css` 的 `:root` 中调整配色（`--accent` 等变量）
- 替换 `assets/` 中的 PDF 文件即可更新简历与作品集
