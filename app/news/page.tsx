'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import NewsCard from '@/components/news/news-card';
import NewsSidebar from '@/components/news/news-sidebar';
import { newsItems } from '@/lib/data/news-items';

const NEWS_PER_PAGE = 4;

export default function News() {
  const [visibleNews, setVisibleNews] = useState(NEWS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleNews(prev => prev + NEWS_PER_PAGE);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">ニュース</h1>
          <p className="text-lg text-muted-foreground text-center mb-8">
            プロジェクトの最新情報やお知らせをお届けします
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {newsItems.slice(0, visibleNews).map((item) => (
                  <NewsCard key={item.id} news={item} />
                ))}
              </div>
              {visibleNews < newsItems.length && (
                <div className="mt-8 flex justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleLoadMore}
                  >
                    ニュースをもっと見る
                  </Button>
                </div>
              )}
            </div>
            <NewsSidebar />
          </div>
        </div>
      </section>
    </div>
  );
}