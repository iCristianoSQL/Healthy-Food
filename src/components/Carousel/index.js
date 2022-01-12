import * as S from "./styles";
import listCarousel from "./content";
import { TitleAndParagraph } from "..";

const MainCarousel = () => {
  const breakPoint = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2.5 },
    { width: 850, itemsToShow: 3.5 },
    { width: 1150, itemsToShow: 3.5 },
    { width: 1450, itemsToShow: 3.5 },
    { width: 1750, itemsToShow: 3.5 },
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
        breakPoints={breakPoint}
        pagination={false}
        itemsToScroll={1}
      >
        {listCarousel.map(({ image, id, figCaption, profileImage, name }) => (
          <S.Figure key={id}>
            <S.Image src={image} />
            <S.FlexContainer>
              <S.Legend>{figCaption}</S.Legend>
              <S.Profile>
                <S.ProfileImage src={profileImage} />
                <S.Name>{name}</S.Name>
              </S.Profile>
            </S.FlexContainer>
          </S.Figure>
        ))}
      </S.Containercarousel>
    </S.Section>
  );
};

export default MainCarousel;
