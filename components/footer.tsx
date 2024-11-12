import Link from 'next/link';
import { School, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <School className="h-6 w-6" />
              <span className="font-bold">廃校利活用プロジェクト</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              持続可能な地域づくりを目指し、教育施設の利活用を通じて、コミュニティの活性化に貢献します。
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">サイトマップ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">プロジェクト概要</Link></li>
              <li><Link href="/team">チームメンバー</Link></li>
              <li><Link href="/services">サービス</Link></li>
              <li><Link href="/blog">ブログ</Link></li>
              <li><Link href="/news">ニュース</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">お問い合わせ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact">お問い合わせフォーム</Link></li>
              <li><Link href="/faq">よくある質問</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">SNS</h3>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://facebook.com" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} 廃校利活用プロジェクト. All rights reserved.
        </div>
      </div>
    </footer>
  );
}