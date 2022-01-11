import Carousel from "react-elastic-carousel";
import * as S from "./styles";
import listCarousel from "./content";
import { TitleAndParagraph } from "..";

const MainCarousel = () => {
  return (
    <S.Section>
      <S.TextDiv>
        <TitleAndParagraph
          contentH={"Read Our Blog"}
          contentP={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />
      </S.TextDiv>
      <Carousel
        itemsToShow={3.5}
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
      >
        {listCarousel.map(({ image, id, figCaption, profileImage, name }) => (
          <S.Figure>
            <S.Image key={id} src={image} />
            <S.Legend>{figCaption}</S.Legend>
            <S.Profile>
              <S.ProfileImage src={profileImage} />
              <S.Name>{name}</S.Name>
            </S.Profile>
          </S.Figure>
        ))}
      </Carousel>
    </S.Section>
  );
};

export default MainCarousel;
