import * as S from "./style";
import { Button } from "../index";

/* Assets */
import Lupa from "../../assets/png/Lupa.png";

function SuggestionCard({ content, placeholder }) {
  return (
    <S.Section>
      <S.Title content={content}>{content}</S.Title>
      <S.DivInput>
        <S.Input type="text" placeholder={placeholder}></S.Input>
        <S.DivButton>
          <Button content={<S.Lupe src={Lupa} />} />
        </S.DivButton>
      </S.DivInput>
    </S.Section>
  );
}

export default SuggestionCard;
