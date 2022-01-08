import * as S from "./styles";

const Button = ({ onClick, content }) => {
  return (
    <S.Button onClick={onClick} content={content}>
      {content}
    </S.Button>
  );
};

export default Button;
