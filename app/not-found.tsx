import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { School } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <School className="h-16 w-16 mx-auto mb-6 text-primary" />
        <h1 className="text-4xl font-bold mb-4">ページが見つかりません</h1>
        <p className="text-lg text-muted-foreground mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Button asChild>
          <Link href="/">トップページへ戻る</Link>
        </Button>
      </div>
    </div>
  );
}