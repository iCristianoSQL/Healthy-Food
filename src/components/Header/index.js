import * as S from "./styles";
import { Menu } from "..";

const Header = () => {
  return (
    <S.Header>
      <S.Brand>
        <S.Title>Healthy Food</S.Title>
      </S.Brand>
      <Menu />
    </S.Header>
  );
};

export default Header;
