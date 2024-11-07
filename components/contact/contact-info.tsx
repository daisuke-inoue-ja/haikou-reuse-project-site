import { Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">お問い合わせ先</h2>
        <p className="text-muted-foreground">
          お電話やメールでのお問い合わせも承っております。
        </p>
      </div>

      <div className="space-y-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Phone className="h-5 w-5 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">お電話</h3>
                <p className="text-muted-foreground">平日 9:00-18:00</p>
                <p className="text-lg font-semibold mt-1">03-1234-5678</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-5 w-5 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">メール</h3>
                <p className="text-muted-foreground">24時間受付</p>
                <p className="text-lg font-semibold mt-1">info@example.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-5 w-5 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">所在地</h3>
                <p className="text-muted-foreground">
                  〒100-0001<br />
                  東京都千代田区千代田1-1-1
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-medium mb-2">ご注意事項</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• お問い合わせの内容により、回答までにお時間をいただく場合がございます。</li>
          <li>• 営業時間外のお問い合わせについては、翌営業日以降の対応となります。</li>
          <li>• お急ぎの場合は、お電話でのお問い合わせをお勧めいたします。</li>
        </ul>
      </div>
    </div>
  );
}