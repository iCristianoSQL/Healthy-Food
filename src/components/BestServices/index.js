import * as S from "./styles";
import listParagraph from "./content";
import { Button } from "..";

/* Assets */
import Services from "../../assets/svg/Services.svg";

const BestServices = () => {
  return (
    <S.Section>
      <S.Image src={Services} />
      <S.Content>
        <S.Title>The best services ready To serve you</S.Title>
        {listParagraph.map(({ content, id }) => (
          <S.Paragraph key={id}>{content}</S.Paragraph>
        ))}
        <S.ButtonDiv>
          <Button content={"Know More"} />
        </S.ButtonDiv>
      </S.Content>
    </S.Section>
  );
};

export default BestServices;
