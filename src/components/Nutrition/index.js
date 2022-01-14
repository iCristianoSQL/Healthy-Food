import * as S from "./styles";

/* Components */
import SuggestionCard from "../SuggestionCard";

/* Assets */
import Illustration from "../../assets/svg/Illustration.svg";

const Nutrition = () => {
  return (
    <S.ImageDiv>
      <SuggestionCard
        placeholder="Search healthy recipes"
        content="Ready for Trying a new recipe?"
        contentButton={<S.Search />}
      />
      <S.Image src={Illustration}></S.Image>
    </S.ImageDiv>
  );
};

export default Nutrition;
