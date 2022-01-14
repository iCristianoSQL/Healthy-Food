import * as S from "./style";

function SuggestionCard({ content, placeholder, contentButton }) {
  return (
    <S.Section>
      <S.Title content={content}>{content}</S.Title>
      <S.DivInput>
        <S.Input type="text" placeholder={placeholder}></S.Input>
        <S.DivButton>
          <S.Button contentButton={contentButton}>{contentButton}</S.Button>
        </S.DivButton>
      </S.DivInput>
    </S.Section>
  );
}

export default SuggestionCard;
