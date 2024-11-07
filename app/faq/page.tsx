import { Accordion } from '@/components/ui/accordion';
import FaqSection from '@/components/faq/faq-section';
import FaqContact from '@/components/faq/faq-contact';

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">よくある質問</h1>
          <p className="text-lg text-muted-foreground text-center mb-8">
            廃校利活用プロジェクトに関する一般的な質問と回答をまとめています
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            <FaqSection
              title="プロジェクトについて"
              items={[
                {
                  question: "このプロジェクトはどのような取り組みですか？",
                  answer: "旧千代田小学校を地域の新たな文化・交流拠点として再生させる取り組みです。アートギャラリー、コミュニティカフェ、多目的スペースなどを設置し、世代を超えた交流の場を創出します。"
                },
                {
                  question: "プロジェクトの期間はどのくらいですか？",
                  answer: "2024年4月から施設のリノベーションを開始し、同年秋頃の一部施設オープンを目指しています。その後も段階的に機能を拡充していく予定です。"
                }
              ]}
            />

            <FaqSection
              title="施設利用について"
              items={[
                {
                  question: "施設はどのように利用できますか？",
                  answer: "アートギャラリー、カフェは一般の方々に開放されています。多目的スペースは事前予約制で、地域の団体やサークル活動にご利用いただけます。"
                },
                {
                  question: "利用時間と料金を教えてください",
                  answer: "基本利用時間は9:00〜21:00です。カフェは10:00〜18:00で営業します。多目的スペースの利用料金は利用目的や時間帯により異なりますので、お問い合わせください。"
                }
              ]}
            />

            <FaqSection
              title="参加・協力について"
              items={[
                {
                  question: "プロジェクトに参加・協力するにはどうすればよいですか？",
                  answer: "ボランティアスタッフとしての参加や、イベント出展者としての参加が可能です。また、プロジェクトの趣旨に賛同いただける協賛企業も募集しています。詳細は「参加者募集」ページをご確認ください。"
                },
                {
                  question: "イベントの企画を提案することはできますか？",
                  answer: "地域の活性化につながるイベント企画は随時受け付けています。「イベント企画フォーム」から企画書をご提出ください。審査の上、実施の可否をご連絡いたします。"
                }
              ]}
            />

            <FaqSection
              title="アクセス・施設"
              items={[
                {
                  question: "駐車場はありますか？",
                  answer: "施設内に20台分の駐車スペースを確保しています。大規模イベント開催時は臨時駐車場も用意いたします。公共交通機関でのご来場にもご協力をお願いいたします。"
                },
                {
                  question: "バリアフリー対応していますか？",
                  answer: "エレベーターの設置、スロープの増設、多目的トイレの設置など、バリアフリー化を進めています。車椅子の方も安心してご利用いただける環境を整えています。"
                }
              ]}
            />
          </div>

          <FaqContact />
        </div>
      </section>
    </div>
  );
}