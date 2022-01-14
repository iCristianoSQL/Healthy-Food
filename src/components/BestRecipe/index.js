import * as S from "./styles";
import { TitleAndParagraph, Button } from "..";
import foodList from "./content";

const BestRecipe = () => {
  return (
    <S.Section>
      <S.TitleDiv>
        <TitleAndParagraph
          contentP="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          contentH="Our Best Recipes"
        />
      </S.TitleDiv>
      <S.ArticleContent>
        {foodList.map(({ image, title, id }) => (
          <S.GeneralContent key={id}>
            <S.ImageDiv>
              <S.Image src={image} />
            </S.ImageDiv>
            <S.ContentDiv>
              <TitleAndParagraph contentH={title} />
              <S.ButtonDiv>
                <Button content="See Recipe" />
              </S.ButtonDiv>
            </S.ContentDiv>
          </S.GeneralContent>
        ))}
      </S.ArticleContent>
    </S.Section>
  );
};

export default BestRecipe;
