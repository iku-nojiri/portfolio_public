import { ReactNode } from 'react';
import { SecHeading } from '../../uis/components/block/Heading/SecHeading';
import { TimelineContainer } from '../../uis/components/block/timeline/TimelineContainer';
import { TimelineContent } from '../../uis/components/block/timeline/TimelineContent';
import { Text16to14 } from '../../uis/components/atoms/text/Text16to14';
import { CardLink } from '../../uis/components/block/card/CardLink';

const Description = ({ children }: { children: ReactNode }): JSX.Element => {
  return <Text16to14 as={'p'}>{children}</Text16to14>;
};

const Link = ({ children, href }: { children: ReactNode; href: string }): JSX.Element => {
  return (
    <a href={href} className='border-b border-mainBlack font-semibold hover:opacity-85 dark:border-mainWhite' target='_blank'>
      {children}
    </a>
  );
};

export const AboutTimeline = (): JSX.Element => {
  return (
    <>
      <SecHeading
        mainText='キャリア。'
        subText={
          <>
            私のエンジニアとしての
            <br />
            職務経歴です。
          </>
        }
      />
      <TimelineContainer>
        {/*  */}
        <TimelineContent time='2021.1 - 2021.3'>
          <Description>
            短期雇用で「<Link href='https://www.ugooo.co.jp/'>株式会社UGOOO</Link>」に入社。Wixを使用したWebサイト制作を行う。
          </Description>
          <CardLink
            href='https://www.ugooo.co.jp/'
            img='https://static.wixstatic.com/media/9d431d_aebb5761767e461a984709093058a87d~mv2.jpg/v1/fill/w_2668,h_1608,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/9d431d_aebb5761767e461a984709093058a87d~mv2.jpg'
            title='株式会社UGOOO'
            detail='株式会社UGOOO（UGOOO.Inc）はデジタルマーケティング、ホームページ制作、ICT教育事業、コンテンツ企画制作を行っております。Wix.comの専門家として日本で初めてのプロ資格者、執筆者による企業です。'
            externalLink={true}
          />
        </TimelineContent>
        {/*  */}
        <TimelineContent time='2021.8 - 2022.1'>
          <Description>
            求職者支援訓練校「<Link href='https://adjustacademy.com/'>アジャストアカデミー</Link>」に入校。
            <br />
            「Webデザイナー・ディレクター・マーケティング養成科」でWebに関する技術を学ぶ。
          </Description>
          <CardLink href='https://adjustacademy.com/' img='https://adjustacademy.com/renew_files/images/top-img1.jpg' title='アジャストアカデミー' detail='IT業界の即戦力を目指すなら！実務会社が運営する求職者支援訓練コース「アジャストアカデミー」' externalLink={true} />
        </TimelineContent>
        {/*  */}
        <TimelineContent time='2022.1 - 2022.9'>
          <Description>
            派遣社員として「<Link href='https://www.sangonana.jp/'>株式会社357</Link>」「<Link href='https://www.nkz.ac.jp/'>学校法人 日本教育財団</Link>」で勤務。
            <br />
            主に教育関連のWebサイトの運用を行う。
          </Description>
          <CardLink
            href='https://www.sangonana.jp/'
            img='https://www.sangonana.jp/images/img_main.jpg'
            title='株式会社357'
            detail='株式会社357は岡山・愛媛(松山)・東京を拠点に、クオリティの高いCMなどの映像・広告などのグラフィックデザイン・ホームページなどのWEBを企画～制作まですべて自社内で行っています。また、映像や広告、ホームページを有機的に連携した効果の高い販促活動ができるのも弊社の強み。岡山・愛媛・東京での制作に関するお問い合わせは株式会社357へ！'
            externalLink={true}
          />
          <CardLink href='https://www.nkz.ac.jp/' img='https://storage.googleapis.com/lab-mode-cms-production/images/org_mainvisual01__1/original_org_mainvisual01__1.jpg' title='学校法人 日本教育財団' detail='学校法人日本教育財団は、専門学校から大学までプロを育てる、東京都・新宿区・大阪府・愛知県認可の学校です。' externalLink={true} />
        </TimelineContent>
        {/*  */}
        <TimelineContent time='2022.10 - 現在'>
          <Description>
            派遣社員として「<Link href='https://orizo.co.jp/'>株式会社オリゾ</Link>」で勤務開始。その後正社員として入社。2023年5月よりコーディングチームのリーダーに就く。
            <br />
            美容医療系をはじめとした、様々なWebサイトの制作を行う。
          </Description>
          <CardLink href='https://orizo.co.jp/' img='https://images.wantedly.com/i/ERr66ZD?w=2560&h=800' title='株式会社オリゾ' detail='ワクワク思考とデジタルマーケティングで世の中を輝かせる' externalLink={true} />
        </TimelineContent>
        {/*  */}
      </TimelineContainer>
    </>
  );
};
