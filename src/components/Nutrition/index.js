import * as S from "./styles";
import SuggestionCard from "../SuggestionCard";

/* Assets */
import Illustration from "../../assets/svg/Illustration.svg";

const Nutrition = () => {
  return (
    <S.ImageDiv>
      <SuggestionCard />
      <S.Image src={Illustration}></S.Image>
    </S.ImageDiv>
  );
};

export default Nutrition;
