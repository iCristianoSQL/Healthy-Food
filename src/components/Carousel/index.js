import * as S from "./styles";
import listCarousel from "./content";
import { TitleAndParagraph } from "..";

const MainCarousel = () => {
  const breakPoint = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
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
      <S.Containercarousel
        itemsToShow={2}
        breakPoints={breakPoint}
        pagination={false}
        itemsToScroll={1}
        itemPadding={[10]}
        // easing="cubic-bezier(1,.15,.55,1.54)"
        // tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        // transitionMs={700}
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
      </S.Containercarousel>
    </S.Section>
  );
};

export default MainCarousel;
