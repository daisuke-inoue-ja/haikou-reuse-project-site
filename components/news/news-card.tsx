import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays } from 'lucide-react';
import { NewsItem } from '@/types/news';

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="relative h-48 md:h-full">
          <Image
            src={news.image}
            alt={news.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="md:col-span-2 p-6">
          <div className="flex items-center gap-3 mb-3">
            <Badge>{news.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4 mr-1" />
              {news.date}
            </div>
          </div>
          <h2 className="text-xl font-bold mb-3">{news.title}</h2>
          <p className="text-muted-foreground">{news.content}</p>
        </div>
      </div>
    </Card>
  );
}