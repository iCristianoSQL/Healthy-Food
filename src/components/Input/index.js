import * as S from "./styles.js";

const Input = ({
  name,
  errors,
  touched,
  placeholder,
  type,
  title,
  span,
  ...restProps
}) => {
  return (
    <S.ContainerInput>
      <S.Label htmlFor={name}>
        <S.XSpan> {span} </S.XSpan>
        {title}
      </S.Label>
      <S.Input
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
        {...restProps}
      ></S.Input>
      {errors[name] && touched[name] && (
        <S.ErrorFeedBack>{errors[name]}</S.ErrorFeedBack>
      )}
    </S.ContainerInput>
  );
};

export default Input;
