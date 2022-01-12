import * as S from "./styles";
import listButton from "./content";
import { useHistory } from "react-router-dom";
import { Button } from "../index";

const Header = () => {
  const history = useHistory();
  const toRegister = () => {
    history.push("/register");
  };
  return (
    <S.Header>
      <S.Brand>
        <S.Title>Healthy Food</S.Title>
      </S.Brand>
      <S.Info>
        <S.InfoContent>
          {listButton.map(({ content, id, link }) => (
            <S.Links href={link} key={id}>
              {content}
            </S.Links>
          ))}
          <S.DivButton>
            <Button onClick={toRegister} content={"REGISTER"}></Button>
          </S.DivButton>
        </S.InfoContent>
      </S.Info>
    </S.Header>
  );
};

export default Header;
