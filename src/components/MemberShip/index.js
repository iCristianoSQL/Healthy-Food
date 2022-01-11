import * as S from "./styles";
import { SuggestionCard } from "..";

/* Assets */
import MemberShipImage from "../../assets/svg/MemberShip.svg";

const MemberShip = () => {
  return (
    <S.Section>
      <SuggestionCard
        placeholder={"Enter your email address"}
        content={"Join our membership to get special offer"}
      />
      <S.Image src={MemberShipImage} />
    </S.Section>
  );
};

export default MemberShip;
