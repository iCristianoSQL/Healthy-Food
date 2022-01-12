import * as S from "./styles";
import SuggestionCard from "../SuggestionCard";

/* Assets */
import Illustration from "../../assets/svg/Illustration.svg";
import { AiOutlineSearch } from "react-icons/ai";

const Nutrition = () => {
  return (
    <S.ImageDiv>
      <SuggestionCard
        placeholder="Search healthy recipes"
        content="Ready for Trying a new recipe?"
        contentButton={<AiOutlineSearch />}
      />
      <S.Image src={Illustration}></S.Image>
    </S.ImageDiv>
  );
};

export default Nutrition;
