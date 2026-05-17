import type { CollectionEntry } from 'astro:content';

export type Locale = 'zh' | 'en';

export const siteCopy = {
  zh: {
    name: '竹子白茶的小屋',
    subtitle: '创作与工具小屋',
    description: '一间存放着故事的小屋。',
    homeLabel: '竹子白茶的小屋首页',
    menuOpen: '打开导航菜单',
    menuClose: '关闭导航菜单',
    langSwitch: '英文版',
    themeLight: '晨光',
    themeDark: '紫夜',
    themeLightAria: '当前为晨光主题，切换到紫夜主题',
    themeDarkAria: '当前为紫夜主题，切换到晨光主题'
  },
  en: {
    name: 'zhu_bai_ Studio',
    subtitle: 'Stories, games, and tools',
    description: 'A studio for stories, games, and practical tools.',
    homeLabel: 'zhu_bai_ Studio home',
    menuOpen: 'Open navigation menu',
    menuClose: 'Close navigation menu',
    langSwitch: 'Chinese',
    themeLight: 'Light',
    themeDark: 'Night',
    themeLightAria: 'Light theme is active, switch to night theme',
    themeDarkAria: 'Night theme is active, switch to light theme'
  }
} as const;

export const navItems = {
  zh: [
    { path: '/', label: '首页' },
    { path: '/portfolio/', label: '作品间' },
    { path: '/blog/', label: '书房' },
    { path: '/lab/', label: '工具房' },
    { path: '/resume/', label: '档案柜' },
    { path: '/about/', label: '关于' }
  ],
  en: [
    { path: '/en/', label: 'Home' },
    { path: '/en/portfolio/', label: 'Portfolio' },
    { path: '/en/blog/', label: 'Blog' },
    { path: '/en/lab/', label: 'Lab' },
    { path: '/en/resume/', label: 'Resume' },
    { path: '/en/about/', label: 'About' }
  ]
} as const;

export function localizedPath(pathname: string, locale: Locale) {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (locale === 'zh') {
    return normalized.replace(/^\/en(?=\/)/, '') || '/';
  }
  if (normalized === '/') return '/en/';
  if (normalized.startsWith('/en/')) return normalized;
  return `/en${normalized}`;
}

export function isActivePath(currentPath: string, itemPath: string) {
  if (itemPath === '/' || itemPath === '/en/') return currentPath === itemPath;
  return currentPath.startsWith(itemPath);
}

type WorkEntry = CollectionEntry<'works'>;
type PostEntry = CollectionEntry<'blog'>;
type TemplateKey = WorkEntry['data']['template'];

export const templateLabels: Record<Locale, Record<TemplateKey, string>> = {
  zh: {
    game: '游戏项目',
    script: '编剧叙事',
    'ai-tool': '工具系统',
    analysis: '分析文章',
    resume: '简历档案',
    default: '默认模板'
  },
  en: {
    game: 'Game project',
    script: 'Script writing',
    'ai-tool': 'Tool system',
    analysis: 'Analysis note',
    resume: 'Resume archive',
    default: 'Default template'
  }
};

const workEn: Record<string, Partial<WorkEntry['data']> & { body: string[] }> = {
  hakoniwa: {
    title: 'The Hakoniwa That Belongs to You',
    summary: 'A narrative simulation game project about memory, relationships, and choice.',
    type: 'Game Design',
    role: 'Lead Designer',
    date: 'Dec 2025 - Present',
    status: 'Prototype archive',
    tools: ['Design document', 'Narrative structure', 'System analysis'],
    tags: ['Game planning', 'System design', 'Narrative design'],
    body: [
      'This project explores how memory, relationships, and choice can be organized into a playable narrative simulation.',
      'The current archive focuses on design goals, system breakdown, player experience, and the reusable lessons from the prototype process.'
    ]
  },
  'golden-abacus': {
    title: 'Golden Abacus',
    summary: 'A short-form drama project around anti-fraud themes, character conflict, and public communication.',
    type: 'Writing',
    role: 'Writing Assistant / Content Creator',
    status: 'Project archive',
    tools: ['Script outline', 'Character conflict', 'Theme research'],
    tags: ['Screenwriting', 'Short drama', 'Anti-fraud content'],
    body: [
      'This project centers on anti-fraud storytelling and uses short-form drama as the main format.',
      'The archive records the theme, character conflict, script organization, and content decisions that shaped the project.'
    ]
  },
  'personal-info-assistant': {
    title: 'Personal Information Assistant',
    summary: 'A personal information processing and daily brief system built with feeds, automation, model summaries, and team-doc delivery.',
    type: 'Tool System',
    role: 'System Builder',
    status: 'In use and iterating',
    tools: ['Automation workflow', 'Model summary', 'Team-doc delivery'],
    tags: ['Workflow', 'Automation', 'Information management'],
    body: [
      'This system connects information sources, automation logic, model-based summarization, and daily delivery into a personal information pipeline.',
      'The goal is to reduce repeated manual reading work and turn scattered inputs into stable records for later review.'
    ]
  },
  'game-analysis': {
    title: 'Game System Analysis Notes',
    summary: 'A reusable framework for breaking down game mechanics, loops, player motivation, and experience design.',
    type: 'Game Analysis',
    role: 'Analyst / Writer',
    status: 'Long-term writing',
    tools: ['System breakdown', 'Experience notes', 'Reusable framework'],
    tags: ['Game analysis', 'Mechanics', 'Player experience'],
    body: [
      'This archive collects reusable methods for analyzing game systems from mechanics to player experience.',
      'It focuses on how to turn play observations into design insight, comparison notes, and practical design references.'
    ]
  },
  'ai-workflow': {
    title: 'Creative Workflow with Model Tools',
    summary: 'A practical workflow archive covering ideation, writing, coding, automation, and project organization.',
    type: 'Workflow',
    role: 'Workflow Designer',
    status: 'Continuously updated',
    tools: ['Conversation assistant', 'Code assistant', 'Automation'],
    tags: ['Workflow', 'Model tools', 'Productivity'],
    body: [
      'This project records how model tools can support creative work, writing, coding, and project organization.',
      'The focus is not a single tool, but a repeatable workflow that turns ideas into finished drafts and usable systems.'
    ]
  },
  'resume-archive': {
    title: 'Resume Archive',
    summary: 'A structured career archive for experience, projects, skills, and portfolio material.',
    type: 'Resume',
    role: 'Personal Archive',
    status: 'Being organized',
    tools: ['Portfolio', 'Resume notes', 'Project archive'],
    tags: ['Resume', 'Portfolio', 'Career archive'],
    body: [
      'This archive collects career-related material and organizes it into a web-friendly structure.',
      'It is intended to make project experience, skill structure, and future resume updates easier to maintain.'
    ]
  }
};

const postEn: Record<string, Partial<PostEntry['data']> & { body: string[] }> = {
  'ai-workflow-from-idea-to-output': {
    title: 'My Model-Tool Workflow: From Idea to Output',
    summary: 'How I use model tools to organize writing, game design, project management, and automation.',
    category: 'Workflow',
    tags: ['Code assistant', 'Automation', 'Prompting'],
    readingTime: '8 min',
    body: [
      'This note summarizes how I move from rough ideas to usable outputs with the help of model tools.',
      'The workflow covers idea expansion, structure building, draft refinement, implementation support, and final project organization.'
    ]
  },
  'n8n-rss-openai-feishu': {
    title: 'Feeds, Automation, Model Summaries, and Team Docs: My Information Assistant',
    summary: 'A personal information processing experiment that connects information sources, automation, summaries, and delivery.',
    category: 'Workflow',
    tags: ['Automation', 'Feeds', 'Model summaries'],
    readingTime: '7 min',
    body: [
      'This note records a personal information assistant experiment.',
      'The system connects source collection, automated processing, model-based summarization, and daily delivery into a repeatable information workflow.'
    ]
  },
  'game-system-analysis-method': {
    title: 'A Method for Game System Analysis: From Mechanics to Experience',
    summary: 'A reusable question framework for turning game mechanics into player-experience and design insights.',
    category: 'Game Design',
    tags: ['Game design', 'System analysis', 'Mechanics'],
    readingTime: '6 min',
    body: [
      'This note describes a reusable method for analyzing games from the level of mechanics to the level of player experience.',
      'The aim is to make design observations easier to compare, reuse, and turn into practical design references.'
    ]
  }
};

export function workCopy(work: WorkEntry, locale: Locale) {
  if (locale === 'zh') return { ...work.data, body: [] };
  return { ...work.data, ...workEn[work.slug] };
}

export function postCopy(post: PostEntry, locale: Locale) {
  if (locale === 'zh') return { ...post.data, body: [] };
  return { ...post.data, ...postEn[post.slug] };
}

export function getTemplateLabel(template: TemplateKey, locale: Locale) {
  return templateLabels[locale][template] ?? templateLabels[locale].default;
}
