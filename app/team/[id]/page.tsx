import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getTeamMemberById, teamMembers } from '@/lib/data/team-members';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { TeamMemberAnimation } from '@/components/team/team-member-animation';

interface TeamMemberPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }));
}

export function generateMetadata({ params }: TeamMemberPageProps) {
  const member = getTeamMemberById(params.id);
  
  if (!member) {
    return {
      title: 'メンバーが見つかりません',
    };
  }

  return {
    title: `${member.firstName} ${member.lastName} - ${member.title} | 廃校利活用プロジェクト`,
    description: member.shortBio,
  };
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const member = getTeamMemberById(params.id);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-b from-primary/10 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        <div className="container h-full px-4 flex items-center relative z-10">
          <Link
            href="/team"
            className="absolute top-4 left-4 flex items-center text-muted-foreground hover:text-foreground transition-colors md:top-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            チーム一覧に戻る
          </Link>
          
          <TeamMemberAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative w-48 h-48 md:w-80 md:h-80 mx-auto">
                <Image
                  src={member.image}
                  alt={`${member.firstName} ${member.lastName}`}
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              <div className="text-center md:text-left">
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                  {member.role}
                </Badge>
                <p className="text-lg text-muted-foreground">
                  {member.lastNameRomanized} {member.firstNameRomanized}
                </p>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {member.lastName} {member.firstName}
                </h1>
                <p className="text-xl text-primary mb-6">{member.title}</p>
                <p className="text-muted-foreground">{member.shortBio}</p>
              </div>
            </div>
          </TeamMemberAnimation>
        </div>
      </section>

      <div className="container px-4 py-16 md:py-24 space-y-16 md:space-y-24">
        {/* Background Section */}
        <TeamMemberAnimation>
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
              <Calendar className="h-6 md:h-8 w-6 md:w-8 mr-3 text-primary" />
              経歴
            </h2>
            <Card className="overflow-hidden backdrop-blur-sm bg-white/60">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-6 md:space-y-8">
                  {member.background.map((item, index) => (
                    <div
                      key={index}
                      className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-primary/20"
                    >
                      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary transform -translate-x-[3px]" />
                      <div className="font-medium text-primary mb-1">{item.year}</div>
                      <div className="text-muted-foreground">{item.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </TeamMemberAnimation>

        {/* Message Section */}
        <TeamMemberAnimation>
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
              <Award className="h-6 md:h-8 w-6 md:w-8 mr-3 text-primary" />
              メッセージ
            </h2>
            <Card className="overflow-hidden backdrop-blur-sm bg-white/60">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-4 md:space-y-6 text-lg leading-relaxed text-muted-foreground">
                  {member.message.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </TeamMemberAnimation>

        {/* Contact Section */}
        <TeamMemberAnimation>
          <section className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center">
              <Mail className="h-6 md:h-8 w-6 md:w-8 mr-3 text-primary" />
              お問い合わせ
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {member.lastName} へのお問い合わせやプロジェクトに関するご相談は、以下のボタンからお気軽にご連絡ください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              お問い合わせフォームへ
            </Link>
          </section>
        </TeamMemberAnimation>
      </div>
    </div>
  );
}