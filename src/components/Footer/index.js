import * as S from "./styles";

/*Content */
import listTerms from "./content";

const Footer = () => {
  return (
    <S.Footer>
      <S.DivCopyright>
        <S.Copyright>©Copyright 2019 Stack. All Rights Reserved</S.Copyright>
      </S.DivCopyright>
      <S.PrivacyTermsDiv>
        {listTerms.map(({ id, content }) => (
          <S.PrivacyTerms key={id}>{content}</S.PrivacyTerms>
        ))}
      </S.PrivacyTermsDiv>
    </S.Footer>
  );
};

export default Footer;
