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
      <Carousel itemsToShow={3.5}>
        {listCarousel.map(({ image, id }) => (
          <S.Image key={id} src={image} />
        ))}
      </Carousel>
    </S.Section>
  );
};

export default MainCarousel;
