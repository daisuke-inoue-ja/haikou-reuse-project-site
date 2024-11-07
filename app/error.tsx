'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-destructive" />
        <h1 className="text-4xl font-bold mb-4">エラーが発生しました</h1>
        <p className="text-lg text-muted-foreground mb-8">
          申し訳ありません。問題が発生しました。
        </p>
        <Button onClick={reset}>もう一度試す</Button>
      </div>
    </div>
  );
}