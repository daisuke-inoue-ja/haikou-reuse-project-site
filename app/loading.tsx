import { School } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <School className="h-12 w-12 mx-auto mb-4 text-primary animate-pulse" />
        <p className="text-lg text-muted-foreground">読み込み中...</p>
      </div>
    </div>
  );
}