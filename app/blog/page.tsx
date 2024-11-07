'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import BlogCard from '@/components/blog/blog-card';
import BlogSidebar from '@/components/blog/blog-sidebar';
import { blogPosts } from '@/lib/data/blog-posts';

const POSTS_PER_PAGE = 4;

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

  // Filter posts based on search query
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle load more
  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + POSTS_PER_PAGE);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">ブログ</h1>
          <p className="text-lg text-muted-foreground text-center mb-8">
            廃校活用プロジェクトの最新情報や知見を発信しています
          </p>
          <div className="max-w-lg mx-auto relative">
            <Input
              type="search"
              placeholder="記事を検索..."
              className="pl-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    検索条件に一致する記事が見つかりませんでした。
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid gap-8">
                    {filteredPosts
                      .slice(0, visiblePosts)
                      .map((post) => (
                        <BlogCard key={post.id} post={post} />
                      ))}
                  </div>
                  {visiblePosts < filteredPosts.length && (
                    <div className="mt-8 flex justify-center">
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={handleLoadMore}
                      >
                        記事をもっと見る
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
    </div>
  );
}