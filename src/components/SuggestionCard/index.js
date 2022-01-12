import * as S from "./style";
import { Button } from "../index";

function SuggestionCard({ content, placeholder, contentButton }) {
  return (
    <S.Section>
      <S.Title content={content}>{content}</S.Title>
      <S.DivInput>
        <S.Input type="text" placeholder={placeholder}></S.Input>
        <S.DivButton>
          <Button contentButton={contentButton} />
        </S.DivButton>
      </S.DivInput>
    </S.Section>
  );
}

export default SuggestionCard;
