import * as S from "./styles";

const CardBlog = ({ image, figCaption, profileImage, name }) => {
  return (
    <S.ContainerCardBlog>
      <S.CardBlog>
        <S.ContainerCardBlogImage>
          <S.Image src={image} alt="imagem" />
        </S.ContainerCardBlogImage>
        <S.ContainerCardContent>
          <S.TitleCard>{figCaption}</S.TitleCard>
          <S.ContainerCardAuthor>
            <S.AuthorImage src={profileImage} alt="Imagem do autor" />
            <S.Author>{name}</S.Author>
          </S.ContainerCardAuthor>
        </S.ContainerCardContent>
      </S.CardBlog>
    </S.ContainerCardBlog>
  );
};

export default CardBlog;
