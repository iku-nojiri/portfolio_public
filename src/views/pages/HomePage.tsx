import { HeadMetadata } from '../contents/head/HeadMetadata';
import { Hero } from '../contents/hero/Hero';
import { TechStack } from '../contents/techStack/TechStack';

export const HomePage = (): JSX.Element => {
  return (
    <>
      <HeadMetadata description='ホームです。スキルセットや制作実績など、ぜひご覧ください。' />
      <Hero />
      <section>
        <TechStack />
      </section>
    </>
  );
};
