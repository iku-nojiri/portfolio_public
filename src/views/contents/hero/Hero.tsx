import { HeroContainer } from './HeroContainer';
import { LogoIcon } from '../../uis/components/atoms/icon/logo/LogoIcon';
import { HeroTtl } from './HeroTtl';
import { HeroLeadText } from './HeroLeadText';
import { HeroBtnBox } from './HeroBtnBox';

export const Hero = (): JSX.Element => {
  return (
    <>
      <section className='grid h-[85vh] place-items-center'>
        <HeroContainer>
          <LogoIcon variant='w-[3.5rem] h-[3.5rem] sm:w-[4.5rem] sm:h-[4.5rem]' />
          <HeroTtl />
          <HeroLeadText />
          <HeroBtnBox />
        </HeroContainer>
      </section>
    </>
  );
};
