// Mockup is created with https://mockuper.net/mockup/5Ws8_ADHD/pixelbook-pixel-4

interface WorksDataType {
  thumb: string;
  mock: string;
  development: boolean;
  maintenance: boolean;
  name: string;
  launchDate: string;
  codingDuration?: string;
  description: string;
  techstack: string;
  url: string;
}

export type { WorksDataType };

const pathToImage: string = '/images/works/';

export const WORKS_DATA: WorksDataType[] = [
  {
    thumb: `${pathToImage}thumb_eminal.webp`,
    mock: `${pathToImage}mock_eminal.webp`,
    development: true,
    maintenance: true,
    name: 'エミナルクリニック',
    launchDate: '2024.2.8',
    codingDuration: '2ヶ月',
    description:
      '全国60院以上の店舗数を持つ、女性向け美容医療専門院のWebサイトです。クライアントより旧サイトからのフルリニューアルのご依頼をいただき作成いたしました。条件定義や基本仕様などを私がまとめ、外部の制作会社と連携しつつ作成し、その際のコーディングチェックもGitHubを用いて私が行っています。プラン名や料金・院情報に関するUIや文字情報はPHPでコンポーネント化し、一元管理できる仕様になっています。記事投稿やお知らせのページはWordPressで作成されています。',
    techstack: 'HTML, SCSS, PHP, JavaScript, WordPress, Docker',
    url: 'https://eminal-clinic.jp/',
  },
  {
    thumb: `${pathToImage}thumb_mens_eminal.webp`,
    mock: `${pathToImage}mock_mens_eminal.webp`,
    development: false,
    maintenance: true,
    name: 'メンズエミナル',
    launchDate: '2023.10.1',
    description: '全国60院以上の店舗数を持つ、男性向け美容医療専門院のWebサイトです。WordPressで作成されており、更新や新たなコンテンツ追加が主な業務内容ですが、function.phpなど機関部分を操作する機会も豊富にありました。プラン名や料金・院情報に関するUIや文字情報はWordPressのダッシュボードとPHPでコンポーネント化し、一元管理できる仕様になっています。テーマはCocoonが使用されています。',
    techstack: 'HTML, CSS, PHP, JavaScript, jQuery, WordPress',
    url: 'https://mens-eminal.jp/',
  },
  {
    thumb: `${pathToImage}thumb_orizo.webp`,
    mock: `${pathToImage}mock_orizo.webp`,
    development: true,
    maintenance: true,
    name: '株式会社オリゾ',
    codingDuration: '1.5ヶ月',
    launchDate: '2022.2.23',
    description: '私の勤務するデジタルマーケティングを中心とした事業を展開する広告代理店のWebサイトです。社内で旧サイトからのフルリニューアルの指示を受け作成いたしました。条件定義や基本仕様なども私がまとめました。自社ゆえに更新頻度が高くなることを想定して、お知らせページの更新のしやすいコーディング、調査レポートの各子ページのテンプレート作成などを特に注力して作成しました。',
    techstack: 'HTML, SCSS, PHP, JavaScript, Docker',
    url: 'https://orizo.co.jp/',
  },
  {
    thumb: `${pathToImage}thumb_ichiwa.webp`,
    mock: `${pathToImage}mock_ichiwa.webp`,
    development: true,
    maintenance: true,
    name: '株式会社イチワプロパティ',
    codingDuration: '1週間',
    launchDate: '2023.10.23',
    description: '不動産投資や不動産売買仲介などを行う企業のLPです。お問い合わせフォームに入力された情報を顧客管理システム「Salesforce」と連携させることで、マーケティング戦略の武器になる仕様になっています。複雑なデザインを実現するためにSCSSは特にこだわって作成いたしました。',
    techstack: 'HTML, SCSS, PHP, JavaScript, Docker',
    url: 'https://ichiwaproperty.co.jp/fudousantousi-seikou/',
  },
  {
    thumb: `${pathToImage}thumb_recoma.webp`,
    mock: `${pathToImage}mock_recoma.webp`,
    development: true,
    maintenance: true,
    name: 'Recoma',
    launchDate: '2023.6.20',
    codingDuration: '1週間',
    description: '私が勤務する「株式会社オリゾ」が展開する、商品やサービスへの調査結果を活用した動画制作サービスのLPです。社外のデザイナーさんと連携して作成いたしました。社内にコーディング規約が存在しない時期、私が新たに規約を策定し、作成したLPでもあります。',
    techstack: 'HTML, SCSS, PHP, JavaScript, Docker',
    url: 'https://recoma-movie.com/',
  },
  {
    thumb: `${pathToImage}thumb_conpose.webp`,
    mock: `${pathToImage}mock_conpose.webp`,
    development: false,
    maintenance: true,
    name: 'Conpose',
    launchDate: '2023.7.18',
    codingDuration: '1週間',
    description: '私が勤務する「株式会社オリゾ」が展開する、社員・社会に企業のパーパス（=存在意義）を伝える動画を制作するサービスのLPです。私が作成したコーディング規約と「Recoma」のコードをもとに他メンバーに新規作成を指示しました。',
    techstack: 'HTML, SCSS, PHP, JavaScript, Docker',
    url: 'https://www.conpose.jp/',
  },
  {
    thumb: `${pathToImage}thumb_adotori.webp`,
    mock: `${pathToImage}mock_adotori.webp`,
    development: false,
    maintenance: true,
    name: 'アドトリ',
    launchDate: '2023.10.10',
    codingDuration: '1週間',
    description: '私が勤務する「株式会社オリゾ」が展開する、旅や地域情報のコンテンツに特化したインフルエンサーをアサインし、宿泊施設をプロモーションするサービスのLPです。私が作成したコーディング規約と「Recoma」のコードをもとに他メンバーに新規作成を指示しました。',
    techstack: 'HTML, SCSS, PHP, JavaScript, Docker',
    url: 'https://adotori.com/',
  },
  {
    thumb: `${pathToImage}thumb_sukimi.webp`,
    mock: `${pathToImage}mock_sukimi.webp`,
    development: true,
    maintenance: true,
    name: 'スキミークリニック',
    codingDuration: '1.5ヶ月',
    launchDate: '2023.4.27',
    description: '都度払いの医療脱毛を中心とした美容医療専門院のWebサイトです。外部向けに新たにコーディング規約を作成し、外注先と連携しつつ作成しました。その際のコーディングチェックもGitHubを用いて私が行っています。プラン名や料金・院情報に関するUIや文字情報はPHPでコンポーネント化し、一元管理できる仕様になっています。コラムページやお知らせのページはWordPressで作成されています。',
    techstack: 'HTML, SCSS, PHP, JavaScript, WordPress, Docker',
    url: 'https://sukimi-clinic.jp/',
  },
];
