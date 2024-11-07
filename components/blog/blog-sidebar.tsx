'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/data/blog-posts';

// Helper function to count categories
const getCategoryCounts = () => {
  const counts: Record<string, number> = {};
  blogPosts.forEach((post) => {
    counts[post.category] = (counts[post.category] || 0) + 1;
  });
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
};

// Helper function to get all unique tags and their counts
const getPopularTags = () => {
  const tagCounts: Record<string, number> = {};
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  
  return Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1]) // Sort by count descending
    .map(([tag, count]) => ({ tag, count }));
};

export default function BlogSidebar() {
  const categories = getCategoryCounts();
  const popularTags = getPopularTags();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>カテゴリー</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {categories.map((category) => (
              <li key={category.name} className="flex justify-between items-center">
                <span className="text-muted-foreground">{category.name}</span>
                <Badge variant="secondary">{category.count}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>人気のタグ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map(({ tag, count }) => (
              <Badge key={tag} variant="outline" className="cursor-pointer">
                {tag} ({count})
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}