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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 to-background">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">チームメンバー</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              私たちは、多様な専門性と経験を持つプロフェッショナルが集まり、
              地域の未来を創造するチームです。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {teamValues.map((value) => (
              <motion.div key={value.title} variants={itemVariants}>
                <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-300" />
                    <value.icon className="h-8 w-8 text-primary mb-4 relative z-10" />
                    <h3 className="text-xl font-semibold mb-2 relative z-10">{value.title}</h3>
                    <p className="text-muted-foreground relative z-10">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-24">
        <div className="container px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredMember(member.id)}
                onHoverEnd={() => setHoveredMember(null)}
              >
                <Link href={`/team/${member.id}`}>
                  <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative h-80">
                      <Image
                        src={member.image}
                        alt={`${member.firstName} ${member.lastName}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />
                    </div>
                    <CardContent className="relative p-6 bg-white bg-opacity-80 backdrop-blur-sm">
                      <motion.div
                        animate={{
                          y: hoveredMember === member.id ? -8 : 0,
                          opacity: hoveredMember === member.id ? 1 : 0.9,
                        }}
                        transition={{ duration: 0.2 }}
                      >
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
                      </motion.div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">チームに参加しませんか？</h2>
            <p className="text-lg text-muted-foreground mb-8">
              私たちは常に、情熱的で創造力豊かな仲間を募集しています。
              一緒に地域の未来を創っていきましょう。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              お問い合わせ
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
