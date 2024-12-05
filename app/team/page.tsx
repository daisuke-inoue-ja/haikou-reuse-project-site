'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { teamMembers } from '@/lib/data/team-members';
import { Users, Target, Sparkles } from 'lucide-react';

const teamValues = [
  {
    icon: Users,
    title: 'チームワーク',
    description: '多様な専門性を持つメンバーが、一つの目標に向かって協力します。',
  },
  {
    icon: Target,
    title: '革新性',
    description: '従来の概念にとらわれず、新しい価値を創造することに挑戦します。',
  },
  {
    icon: Sparkles,
    title: '創造性',
    description: '独創的なアイデアで、地域特有の課題解決に取り組みます。',
  },
];

export default function TeamPage() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">チームメンバー</h1>
            <p className="text-lg text-muted-foreground">
              私たちは、多様な専門性と経験を持つプロフェッショナルが集まり、地域の未来を創造するチームです。
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {teamValues.map((value) => (
              <Card key={value.title} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 rounded-full p-4 w-fit mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Link href={`/team/${member.id}`} key={member.id}>
                <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-96">
                    <Image
                      src={member.image}
                      alt={`${member.firstName} ${member.lastName}`}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />
                  </div>
                  <CardContent className="relative p-6 bg-white bg-opacity-80 backdrop-blur-sm">
                    <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">
                      {member.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {member.lastNameRomanized} {member.firstNameRomanized}
                    </p>
                    <h3 className="text-2xl font-bold mb-2">
                      {member.lastName} {member.firstName}
                      </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {member.shortBio}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">チームに参加しませんか？</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            私たちは常に、情熱的で創造力豊かな仲間を募集しています。一緒に地域の未来を創っていきましょう。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}
