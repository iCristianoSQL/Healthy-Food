import * as S from "./styles";

/* Components */
import { SuggestionCard } from "..";

/* Assets */
import MemberShipImage from "../../assets/svg/MemberShip.svg";

const MemberShip = () => {
  return (
    <S.Section>
      <SuggestionCard
        placeholder={"Enter your email address"}
        content={"Join our membership to get special offer"}
        contentButton={"Join"}
      />
      <S.Image src={MemberShipImage} />
    </S.Section>
  );
};

export default MemberShip;
