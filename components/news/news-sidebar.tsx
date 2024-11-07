'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { newsItems } from '@/lib/data/news-items';

// Helper function to count categories
const getCategoryCounts = () => {
  const counts: Record<string, number> = {};
  newsItems.forEach((item) => {
    counts[item.category] = (counts[item.category] || 0) + 1;
  });
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
};

// Helper function to get archive months
const getArchiveMonths = () => {
  const months: Record<string, number> = {};
  newsItems.forEach((item) => {
    const date = new Date(item.date);
    const monthKey = `${date.getFullYear()}年${date.getMonth() + 1}月`;
    months[monthKey] = (months[monthKey] || 0) + 1;
  });
  
  return Object.entries(months)
    .sort((a, b) => b[0].localeCompare(a[0])) // Sort by date descending
    .map(([month, count]) => ({ month, count }));
};

export default function NewsSidebar() {
  const categories = getCategoryCounts();
  const archives = getArchiveMonths();

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
          <CardTitle>アーカイブ</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {archives.map((archive) => (
              <li key={archive.month} className="flex justify-between items-center">
                <span className="text-muted-foreground">{archive.month}</span>
                <Badge variant="secondary">{archive.count}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}