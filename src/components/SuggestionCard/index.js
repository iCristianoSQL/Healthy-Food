import * as S from "./style";
import { Button } from "../index";

/* Assets */
import Lupa from "../../assets/png/Lupa.png";

function SuggestionCard() {
  return (
    <S.Section>
      <S.Title>Ready for Trying a new recipe?</S.Title>
      <S.DivInput>
        <S.Input type="text" placeholder="Search healthy recipes"></S.Input>
        <S.DivButton>
          <Button content={<S.Lupe src={Lupa} />} />
        </S.DivButton>
      </S.DivInput>
    </S.Section>
  );
}

export default SuggestionCard;
