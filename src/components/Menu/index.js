import * as S from "./styles";

/* Content */
import listButton from "./content";

/* Components */
import { Button } from "../index";

/* Libs */
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();
  const toRegister = () => {
    history.push("/register");
  };
  const buttonContent = listButton.map(({ content, id, link }) => (
    <S.GenericLinks href={link} key={id}>
      {content}
    </S.GenericLinks>
  ));
  return (
    <S.Info>
      <S.InfoContent>
        {buttonContent}
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
          {buttonContent}
          <S.MenuButton>
            <Button onClick={toRegister} content={"REGISTER"}></Button>
          </S.MenuButton>
        </S.SectionMenu>
      </S.InfoContent>
    </S.Info>
  );
};

export default Menu;
