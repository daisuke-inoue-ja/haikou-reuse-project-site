import { TeamMember } from '@/types/team';

export const teamMembers: TeamMember[] = [
  {
    id: 'fukuda',
    firstName: "翔大",
    lastName: "福田",
    firstNameRomanized: "Shodai",
    lastNameRomanized: "Hukuda",
    role: '代表取締役',
    image: '/images/team/fukuda.jpeg',
    title: '代表取締役・プロジェクト統括',
    shortBio: '教育施設の再生と地域活性化のエキスパート。革新的なアプローチで廃校を地域の新たな価値創造の拠点へと転換する。',
    background: [
      {
        year: 'none data',
        description: 'none data',
      },
    ],
    message: `none data`
  },
  {
    id: 'nakamura',
    firstName: "良太",
    lastName: "中村",
    firstNameRomanized: "Ryota",
    lastNameRomanized: "Nakamura",
    role: 'プロジェクトマネージャー',
    image: '/images/team/nakamura.jpeg',
    title: 'プロジェクトマネージャー・地域連携担当',
    shortBio: 'プロジェクトマネジメントのスペシャリスト。複雑な利害関係者との調整と、効率的なプロジェクト推進を得意とする。',
    background: [
      {
        year: 'none data',
        description: 'none data',
      },
    ],
    message: `none data`
  },
  {
    id: 'saimon',
    firstName: "寛法",
    lastName: "齋門",
    firstNameRomanized: "Takanori",
    lastNameRomanized: "Saimon",
    role: 'クリエイティブディレクター',
    image: '/images/team/saimon.jpeg',
    title: 'クリエイティブディレクター・空間デザイン担当',
    shortBio: '空間デザインと企画立案のプロフェッショナル。独創的な視点で施設の可能性を最大限に引き出す。',
    background: [
      {
        year: 'none data',
        description: 'none data',
      },
    ],
    message: `none data`
  },
  {
    id: 'yanagi',
    firstName: "和壮",
    lastName: "柳",
    firstNameRomanized: "Kazumasa",
    lastNameRomanized: "Yanagi",
    role: 'none data',
    image: '/images/team/yanagi.jpeg',
    title: 'none data',
    shortBio: 'サンプルテキスト。。。。。。。。ああああああああああ。。。。。。。',
    background: [
      {
        year: '2014年5月',
        description: '警視庁警察官　入社',
      },
      {
        year: '2022年10月',
        description: '飯能市水道事業協同組合　入社',
      },
      {
        year: '2024年6月',
        description: '有限会社横田設備　入社',
      },
    ],
    message: `カラットでしかできない経験が目白押しです！
仕事とプライベートの夢を両方叶えるために、共に成長しませんか？`
  },
  {
    id: 'miyashita',
    firstName: "大夢",
    lastName: "宮下",
    firstNameRomanized: "Hiromu",
    lastNameRomanized: "Miyashita",
    role: 'none data',
    image: '/images/team/miyashita.jpeg',
    title: 'none data',
    shortBio: 'サンプルテキスト。。。。。。。。ああああああああああ。。。。。。。',
    background: [
      {
        year: 'none data',
        description: 'none data',
      },
    ],
    message: `none data`
  },
  {
    id: 'ozawa',
    firstName: "七海",
    lastName: "小澤",
    firstNameRomanized: "Nanami",
    lastNameRomanized: "Ozawa",
    role: 'none data',
    image: '/images/team/ozawa.jpeg',
    title: 'none data',
    shortBio: 'サンプルテキスト。。。。。。。。ああああああああああ。。。。。。。',
    background: [
      {
        year: 'none data',
        description: 'none data',
      },
    ],
    message: `none data`
  },
  {
    id: 'inoue',
    firstName: "大輔",
    lastName: "井上",
    firstNameRomanized: "Daisuke",
    lastNameRomanized: "Inoue",
    role: 'none data',
    image: '/images/team/inoue.jpeg',
    title: 'none data',
    shortBio: 'サンプルテキスト。。。。。。。。ああああああああああ。。。。。。。',
    background: [
      {
        year: '2010年4月',
        description: 'オリオン機械株式会社　入社',
      },
      {
        year: '2019年3月',
        description: '澪標アナリティクス株式会社　入社',
      },
      {
        year: '2020年12月',
        description: 'ユニアデックス株式会社　入社',
      },
      {
        year: '2023年7月',
        description: 'フリーランスのデータサイエンティストとして独立',
      },
      {
        year: '2024年10月',
        description: '合同会社クエシスを創業',
      },
    ],
    message: `none data`
  },
/*
  {
    id: 'fukuda',
    firstName: "翔大",
    lastName: "福田",
    firstNameRomanized: "Shodai",
    lastNameRomanized: "Hukuda",
    role: '代表取締役',
    image: '/images/team/fukuda.jpeg',
    title: '代表取締役・プロジェクト統括',
    shortBio: '教育施設の再生と地域活性化のエキスパート。革新的なアプローチで廃校を地域の新たな価値創造の拠点へと転換する。',
    background: [
      {
        year: '1985',
        description: '東京大学工学部建築学科卒業',
      },
      {
        year: '1985-2000',
        description: '大手建設会社にて、教育施設の設計・施工を担当',
      },
      {
        year: '2000-2010',
        description: '建築コンサルタント会社にて、公共施設のリノベーション事業を統括',
      },
      {
        year: '2010',
        description: '廃校利活用プロジェクトを設立',
      }
    ],
    message: `私たちは、単なる建物の再利用ではなく、地域の未来を創造する活動を行っています。
    
    廃校には、その地域の歴史と思い出が詰まっています。その大切な場所を、新しい世代の学びと交流の拠点として再生させることで、持続可能な地域づくりに貢献したいと考えています。
    
    一つひとつのプロジェクトを通じて、地域の皆様と共に新しい価値を生み出していくことが、私たちの使命です。`
  },
*/
];

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id);
}