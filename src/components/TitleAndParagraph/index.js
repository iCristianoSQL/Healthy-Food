import * as S from "./styles";

const TitleAndParagraph = ({ contentH, contentP }) => {
  return (
    <>
      <S.Title contentH={contentH}>{contentH}</S.Title>
      <S.Paragraph contentP={contentP}>{contentP}</S.Paragraph>
    </>
  );
};

export default TitleAndParagraph;
