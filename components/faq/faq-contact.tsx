'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function FaqContact() {
  return (
    <Card className="mt-16">
      <CardContent className="pt-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            お探しの回答が見つかりませんでしたか？
          </h3>
          <p className="text-muted-foreground mb-6">
            お気軽にお問い合わせください。担当者が丁寧にご回答いたします。
          </p>
          <Button asChild>
            <Link href="/contact" className="inline-flex items-center">
              <MessageCircle className="mr-2 h-4 w-4" />
              お問い合わせ
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}