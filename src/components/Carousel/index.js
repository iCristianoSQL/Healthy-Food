import { useRef } from "react";
import * as S from "./styles";
import listCarousel from "./content";
import { TitleAndParagraph } from "..";

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

const MainCarousel = () => {
  const carousel = useRef(null);
  const contentP =
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts";

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <S.ContainerReadBlog>
      <TitleAndParagraph contentH="Read Our Blog" contentP={contentP} />
      <S.ScrollCardsBlog>
        <S.ContainerCards ref={carousel}>
          {listCarousel.map(({ id, image, figCaption, profileImage, name }) => {
            return (
              <CardBlog
                key={id}
                image={image}
                figCaption={figCaption}
                profileImage={profileImage}
                name={name}
              />
            );
          })}
        </S.ContainerCards>

        <S.ArrowLeft onClick={handleLeftClick}>
          <S.SVGArrowLeft color="#8ed062" />
        </S.ArrowLeft>

        <S.ArrowRight onClick={handleRightClick}>
          <S.SVGArrowRight color="#8ed062" />
        </S.ArrowRight>
      </S.ScrollCardsBlog>
    </S.ContainerReadBlog>
  );
};

export default MainCarousel;
