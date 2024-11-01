import { BtnBox } from '../../uis/components/atoms/box/BtnBox';
import { Btn } from '../../uis/components/atoms/btn/Btn';
import { ArrowBtn } from '../../uis/components/atoms/btn/ArrowBtn';
import { COMMON_DATA } from '../../../utils/commonData';
import { resetViewportPosition } from '../../../function/resetViewportPosition';

export const HeroBtnBox = (): JSX.Element => {
  return (
    <BtnBox>
      <Btn as='a' href='/about' onClick={resetViewportPosition}>
        私について
      </Btn>
      <ArrowBtn as='a' href={COMMON_DATA.githubLink} externalLink={true}>
        GitHubを見る
      </ArrowBtn>
    </BtnBox>
  );
};
