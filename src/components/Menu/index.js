import * as S from "./styles";
import listButton from "./content";
import { Button } from "../index";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();
  const toRegister = () => {
    history.push("/register");
  };
  return (
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
        <S.InputChecked type="checkbox" name="checked" id="checked" />
        <label htmlFor="checked">
          <S.PositionBurgerDiv>
            <S.BurgerDiv>
              <S.MenuHamburger />
            </S.BurgerDiv>
          </S.PositionBurgerDiv>
        </label>
        <S.SectionMenu>
          {listButton.map(({ content, id, link }) => (
            <S.MenuLinks href={link} key={id}>
              {content}
            </S.MenuLinks>
          ))}
          <S.MenuButton>
            <Button onClick={toRegister} content={"REGISTER"}></Button>
          </S.MenuButton>
        </S.SectionMenu>
      </S.InfoContent>
    </S.Info>
  );
};

export default Menu;