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
    <div className="min-h-screen flex flex-col">
      {/* Sticky Back Button Section */}
      <div className="sticky top-16 z-20 bg-background px-4 py-2 border-b border-muted-foreground">
        <Link
          href="/team"
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          チーム一覧に戻る
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-gradient-to-b from-primary/10 to-background overflow-hidden py-10 md:py-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        <div className="container max-w-[80%] px-4 relative z-10">
          <TeamMemberAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <div className="relative w-60 h-72 md:w-80 md:h-96 mx-auto">
                <Image
                  src={member.image}
                  alt={`${member.firstName} ${member.lastName}`}
                  fill
                  className="object-cover object-top rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Member Details */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <Badge className="bg-primary/10 text-primary">
                  {member.role}
                </Badge>
                <p className="text-lg text-muted-foreground">
                  {member.lastNameRomanized} {member.firstNameRomanized}
                </p>
                <h1 className="text-3xl md:text-5xl font-bold">
                  {member.lastName} {member.firstName}
                </h1>
                <p className="text-xl text-primary">{member.title}</p>
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
              略歴
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
              メンバーに関するお問い合わせやプロジェクトに関するご相談は、以下のボタンからお気軽にご連絡ください。
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
