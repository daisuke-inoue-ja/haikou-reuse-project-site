'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
            alt="廃校の外観"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        
        <div className="container relative z-10 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            廃校から始まる、<br />新しい物語
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="text-lg md:text-xl mb-8 max-w-2xl"
          >
            私たちは廃校を地域の新しい価値に変える取り組みを行っています。
            持続可能な地域づくりを目指し、教育施設の利活用を通じて、
            コミュニティの活性化に貢献します。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          >
            <Button asChild size="lg" className="text-lg">
              <Link href="/about">
                詳しく見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">私たちの取り組み</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-background p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
            >
              <Building2 className="h-12 w-12 mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-4">施設の再生</h3>
              <p className="text-muted-foreground">
                地域のシンボルである学校施設を、新しい価値を持つ空間として再生します。
              </p>
            </motion.div>
            <motion.div
              className="bg-background p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
            >
              <Users className="h-12 w-12 mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-4">コミュニティの形成</h3>
              <p className="text-muted-foreground">
                多世代が集う場所として、新しいコミュニティの形成を支援します。
              </p>
            </motion.div>
            <motion.div
              className="bg-background p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
            >
              <Lightbulb className="h-12 w-12 mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-4">地域の活性化</h3>
              <p className="text-muted-foreground">
                地域資源を活用し、持続可能な地域づくりに貢献します。
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
