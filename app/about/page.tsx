'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart, Quote } from 'lucide-react';
import { useEffect } from 'react';

const values = [
  {
    icon: Users,
    title: 'コミュニティ重視',
    description: '地域の皆様との対話を大切にし、共に未来を創造します。',
  },
  {
    icon: Target,
    title: '持続可能性',
    description:
      '長期的な視点で、環境と地域社会に配慮したプロジェクトを推進します。',
  },
  {
    icon: Heart,
    title: '地域愛',
    description: '地域の歴史と文化を大切にしながら、新しい価値を生み出します。',
  },
];

export default function About() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: 2.0,
      transition: { duration: 10, ease: 'easeInOut' },
    });
  }, [controls]);

  return (
    <div className="min-h-screen">
      {/* Mission Section */}
      <section id="mission" className="relative py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">私たちのミッション</h1>
            <p className="text-lg text-muted-foreground mb-12">
              廃校を地域の新たな価値創造の拠点として再生し、
              持続可能な地域社会の実現に貢献します。
              私たちは、歴史ある学び舎に新しい命を吹き込み、
              世代を超えたコミュニティの架け橋となることを目指しています。
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section id="ceo-message" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                animate={controls}
                className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 overflow-hidden rounded-full"
              >
                <Image
                  src="/images/team/fukuda.jpeg"
                  alt="福田 代表取締役"
                  fill
                  className="object-cover rounded-full"
                />
              </motion.div>
              <div>
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-lg mb-6">
                    私たちは、廃校という歴史ある建物に新しい命を吹き込み、地域の未来を創造する活動を行っています。
                    一つひとつの廃校には、その地域ならではの物語があり、可能性が眠っています。
                    その可能性を最大限に引き出し、地域の皆様と共に新しい価値を生み出していくことが、
                    私たちの使命です。
                  </p>
                  <p className="text-lg">
                    教育施設としての歴史を大切にしながら、
                    現代のニーズに応える空間として再生させることで、
                    世代を超えた交流の場を創出し、
                    持続可能な地域づくりに貢献してまいります。
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-lg">代表取締役</p>
                  <p className="text-2xl font-bold">福田</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="core-values" className="relative py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">私たちのビジョン</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            革新と献身を通じて明日を形作る
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value) => (
              <Card
                key={value.title}
                className="group hover:scale-105 transition-transform duration-300 bg-white/70 backdrop-blur border-none shadow-xl"
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-full p-4 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      </section>

      {/* Company Info Section */}
      <section id="company-info" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            プロジェクト情報
          </h2>
          <div className="max-w-2xl mx-auto">
            <dl className="divide-y">
              <div className="py-4 flex">
                <dt className="w-1/3 font-medium">プロジェクト名</dt>
                <dd className="w-2/3">廃校利活用プロジェクト</dd>
              </div>
              <div className="py-4 flex">
                <dt className="w-1/3 font-medium">開始時期</dt>
                <dd className="w-2/3">2024年11月1日</dd>
              </div>
              <div className="py-4 flex">
                <dt className="w-1/3 font-medium">実施期間</dt>
                <dd className="w-2/3">2024年11月〜</dd>
              </div>
              <div className="py-4 flex">
                <dt className="w-1/3 font-medium">実施場所</dt>
                <dd className="w-2/3">
                  〒100-0001 東京都千代田区千代田1-1-1 旧千代田小学校
                </dd>
              </div>
              <div className="py-4 flex">
                <dt className="w-1/3 font-medium">プロジェクト内容</dt>
                <dd className="w-2/3">
                  <ul className="list-disc list-inside space-y-2">
                    <li>廃校施設のリノベーション</li>
                    <li>地域コミュニティスペースの設置</li>
                    <li>文化・芸術イベントの開催</li>
                    <li>地域住民との協働ワークショップ</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
