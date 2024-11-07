import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Building2, Users2, CalendarDays, Lightbulb, BookOpen, HandshakeIcon } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: '廃校施設の再生',
    description: '地域のニーズに合わせた施設のリノベーションと活用プランの策定を行います。歴史ある建物の魅力を活かしながら、新しい価値を創造します。',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80',
  },
  {
    icon: Users2,
    title: 'コミュニティ形成',
    description: '地域住民や関係者との対話を通じて、持続可能なコミュニティづくりをサポートします。多世代交流の場を創出し、地域の絆を深めます。',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80',
  },
  {
    icon: CalendarDays,
    title: 'イベント企画・運営',
    description: '地域の特色を活かしたイベントの企画から運営までをトータルでサポート。文化祭や市民講座など、多様な催しを実現します。',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80',
  },
];

const features = [
  {
    icon: Lightbulb,
    title: '専門家による支援',
    description: '建築、地域開発、教育など各分野の専門家がプロジェクトをサポートします。',
  },
  {
    icon: BookOpen,
    title: '豊富な実績',
    description: '全国各地での廃校活用プロジェクトの経験を活かし、最適なソリューションを提供します。',
  },
  {
    icon: HandshakeIcon,
    title: '継続的なサポート',
    description: 'プロジェクト完了後も、運営アドバイスや課題解決のサポートを継続して提供します。',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">サービス内容</h1>
            <p className="text-lg text-muted-foreground">
              私たちは、廃校を地域の新たな価値創造の拠点として再生するために、
              包括的なサービスを提供しています。
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service) => (
              <Card key={service.title} className="border-none shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">プロジェクトのご相談</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            廃校活用プロジェクトについて、お気軽にご相談ください。
            経験豊富な専門家が、地域の特性に合わせた最適なプランをご提案いたします。
          </p>
          <Button size="lg" className="font-semibold">
            お問い合わせ
          </Button>
        </div>
      </section>
    </div>
  );
}