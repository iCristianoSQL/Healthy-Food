import * as S from "./styles";
import { Formik, Form as ContainerForm, Field } from "formik";
import requestToCep from "../../services/index";
import * as Yup from "yup";
import { TitleAndParagraph } from "../../components/index";

const registerSchema = Yup.object().shape({
  cep: Yup.string()
    .min(8, "Este cep precisa ter 8 digitos")
    .max(8, "Este cep precisa ter 8 digitos")
    .required("Este campo é obrigatorio"),
});
const Register = () => {
  return (
    <S.Global>
      <S.Section>
        <S.RegisterDiv>
          <S.TextDiv>
            <TitleAndParagraph
              contentH={"Healthy Food"}
              contentP={"Welcome to the registration screen"}
            />
          </S.TextDiv>
          <Formik
            initialValues={{
              cep: "",
              address: "",
              district: "",
              uf: "",
              location: "",
            }}
            validationSchema={registerSchema}
            render={({ errors, touched, setFieldValue }) => (
              <ContainerForm>
                <Field
                  name="cep"
                  onInput={(event) => requestToCep(event, setFieldValue)}
                />
                {errors.cep && touched.cep && <p>{errors.cep}</p>}
                <Field type="text" name="address" />
                <Field type="text" name="district" />
                <Field type="text" name="location" />
                <Field type="text" name="uf" />
              </ContainerForm>
            )}
          />
        </S.RegisterDiv>
      </S.Section>
    </S.Global>
  );
};

export default Register;
