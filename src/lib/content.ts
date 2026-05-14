import type { CollectionEntry } from 'astro:content';

export function sortWorks(works: CollectionEntry<'works'>[]) {
  return [...works].sort((a, b) => {
    const orderA = a.data.order ?? 999;
    const orderB = b.data.order ?? 999;
    if (orderA !== orderB) return orderA - orderB;
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return a.data.title.localeCompare(b.data.title, 'zh-CN');
  });
}

export function sortPosts(posts: CollectionEntry<'blog'>[]) {
  return [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
}

export function uniqueValues(values: string[]) {
  return [...new Set(values)].filter(Boolean);
}
