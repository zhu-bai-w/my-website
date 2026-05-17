# 内容导入字段说明

这份说明用于后续导入作品、文章和图片。当前网站分为中文页面和英文页面：

- 中文内容源：`src/content/works/*.md`、`src/content/blog/*.md`
- 英文翻译源：`src/lib/i18n.ts`
- 图片资源目录：`public/images/`
- 中文预览：首页 `/`
- 英文预览：首页 `/en/`

## 一、作品字段

作品文件放在 `src/content/works/`，每个作品一个 Markdown 文件，例如：

```text
src/content/works/hakoniwa.md
```

访问路径会根据文件名生成：

```text
/portfolio/work/hakoniwa/
/en/portfolio/work/hakoniwa/
```

### 作品字段模板

```md
---
title: 作品标题
slug: hakoniwa
summary: 一句话说明这个作品是什么、解决什么问题或表达什么主题。
type: 游戏设计
role: 主策划 / 系统设计
date: 2026
status: 持续整理
tools:
  - 工具一
  - 工具二
tags:
  - 标签一
  - 标签二
cover: /images/works/hakoniwa-cover.jpg
featured: true
template: game
order: 1
---

# 项目目标

这里写作品正文。
```

### 作品字段逐项说明

`title`：作品标题。中文页面会直接显示这个标题。

`slug`：作品路径标识，建议和文件名一致。用小写英文、数字和连字符，例如 `personal-info-assistant`。不要用空格、中文、下划线。

`summary`：作品摘要。会出现在作品卡片、详情页顶部和页面描述里。建议控制在 40 到 90 个中文字符。

`type`：作品类型。用于卡片分类和详情页标签。中文端建议使用这些值：`游戏设计`、`工具系统`、`编剧叙事`、`游戏分析`、`简历经历`。

`role`：你在项目中的角色，例如 `主策划`、`系统搭建者`、`编剧助理`、`分析作者`。

`date`：项目时间。作品允许写年份或时间段，例如 `2026`、`2025-2026`、`持续整理`。

`status`：项目状态，例如 `已归档`、`持续更新`、`持续迭代`、`整理中`。

`tools`：项目中使用的方法、平台或工具。中文页面建议使用中文表达，例如 `自动化编排`、`模型接口`、`飞书`、`版本管理`。

`tags`：作品标签。卡片最多展示前三个，详情页会展示全部。

`cover`：封面图片路径。图片要放在 `public/images/` 下，填写时从 `/images/` 开始，例如 `/images/works/hakoniwa-cover.jpg`。

`featured`：是否在首页精选区展示。`true` 表示展示，`false` 表示不展示。

`template`：内容模板类型，必须使用固定值：`game`、`script`、`ai-tool`、`analysis`、`resume`、`default`。中文页面会自动显示成中文名称。

`order`：排序数字。数字越小越靠前；未填写时会排在后面。

## 二、文章字段

文章文件放在 `src/content/blog/`，每篇文章一个 Markdown 文件，例如：

```text
src/content/blog/game-system-analysis-method.md
```

访问路径会根据文件名生成：

```text
/blog/note/game-system-analysis-method/
/en/blog/note/game-system-analysis-method/
```

### 文章字段模板

```md
---
title: 文章标题
slug: game-system-analysis-method
summary: 一句话说明这篇文章的核心内容。
date: 2026-05-14
category: 游戏设计
tags:
  - 标签一
  - 标签二
readingTime: 6 分钟
cover: /images/blog/game-system-analysis-method-cover-light.png
coverDark: /images/blog/game-system-analysis-method-cover-dark.png
featured: true
---

# 正文标题

这里写文章正文。
```

### 文章字段逐项说明

`title`：文章标题。中文页面会直接显示。

`slug`：文章路径标识，建议和文件名一致。用小写英文、数字和连字符。

`summary`：文章摘要。会出现在文章卡片、详情页顶部和页面描述里。

`date`：发布日期。建议使用 `YYYY-MM-DD`，例如 `2026-05-14`。

`category`：文章分类。中文端建议使用：`游戏设计`、`工具流程`、`项目日志`、`叙事写作`、`方法论`。

`tags`：文章标签。卡片最多展示前三个，详情页会展示全部。

`readingTime`：阅读时间。中文端建议写成 `6 分钟`、`8 分钟`。

`cover`：浅色主题封面图片路径。图片放在 `public/images/` 下，填写 `/images/...` 路径。

`coverDark`：深色主题封面图片路径。建议与 `cover` 使用同一构图、同一标题和同一信息层级，只调整背景、文字和装饰色。浅色主题搭配浅色封面，深色主题搭配深色封面。

`featured`：是否进入首页近期文章区。`true` 表示展示。

## 三、正文写法

正文使用 Markdown：

```md
## 二级标题

正文段落。

### 三级标题

- 列表项一
- 列表项二
```

建议结构：

- 作品：项目目标、使用场景、工具栈、工作流结构、核心节点、实现效果、遇到的问题、后续优化。
- 文章：问题背景、核心观点、方法步骤、案例说明、复盘总结。

## 四、图片导入规则

推荐目录：

```text
public/images/works/
public/images/blog/
public/images/about/
```

推荐命名：

```text
hakoniwa-cover.jpg
hakoniwa-system-map.png
game-analysis-note-01.jpg
```

封面建议：

- 标准比例：`16:9`。网站卡片和详情页封面容器都按这个比例渲染。
- 推荐尺寸：`1672 x 941px`，或任意严格 `16:9` 的更高分辨率图片。
- 格式：照片用 `.jpg`，界面图和信息图用 `.png`，矢量占位图可用 `.svg`。
- 路径：文件放到 `public/images/works/hakoniwa-cover.jpg` 后，字段写 `/images/works/hakoniwa-cover.jpg`。
- 博客封面：每篇文章优先准备浅色、深色两张同构图封面。浅色封面写入 `cover`，深色封面写入 `coverDark`。
- 命名格式：放入对应文章目录，使用 `cover-light.png` 和 `cover-dark.png`。其他正文素材按用途命名，例如 `figure-1.png`、`workflow-overview.png`。

正文中插图写法：

```md
![图片说明](/images/works/hakoniwa-system-map.png)
```

## 五、英文页面怎么填

英文页面中，作品仍读取 `src/lib/i18n.ts` 里的翻译副本；博客文章直接复用中文 Markdown 正文和 frontmatter，不再单独维护英文博客正文或摘要。

新增作品后，需要在 `workEn` 中增加同名 `slug`：

```ts
'hakoniwa': {
  title: 'English Title',
  summary: 'English summary.',
  type: 'Game Design',
  role: 'Lead Designer',
  status: 'Prototype archive',
  tools: ['Design document', 'System analysis'],
  tags: ['Game planning', 'Narrative design'],
  body: [
    'First English paragraph.',
    'Second English paragraph.'
  ]
}
```

新增文章后，只需要维护 `src/content/blog/*.md`。中文博客和英文博客路径都会渲染同一份文章内容。

## 六、导入后的检查步骤

新增或修改内容后，建议检查：

1. 文件名和 `slug` 是否一致。
2. `cover` 路径是否从 `/images/` 开始。
3. 博客是否同时准备了 `cover` 和 `coverDark`，并确认浅色主题显示浅色封面、深色主题显示深色封面。
4. 图片文件是否真的放在 `public/images/` 下。
5. 中文字段是否没有混入英文展示词。
6. 运行 `npm run build`，确认没有字段缺失或路径错误。
7. 打开中文和英文预览页检查排版。
