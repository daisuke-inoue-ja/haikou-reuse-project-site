import { Metadata } from 'next';
import ContactForm from '@/components/contact/contact-form';
import ContactInfo from '@/components/contact/contact-info';

export const metadata: Metadata = {
  title: 'お問い合わせ | 廃校利活用プロジェクト',
  description: 'プロジェクトに関するご質問・ご相談はこちらからお願いいたします。',
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">お問い合わせ</h1>
          <p className="text-lg text-muted-foreground text-center mb-8">
            プロジェクトに関するご質問・ご相談はこちらからお願いいたします
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
}