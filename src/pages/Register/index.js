import * as S from "./styles";
import { Formik } from "formik";
import requestToCep from "../../services/index";
import { inputMask } from "../../utils/inputMask";

import { TitleAndParagraph, Input, Button } from "../../components/index";
import { registerSchema } from "./registerSchema";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Register = () => {
  const history = useHistory();
  const toHome = () => {
    history.push("/");
  };
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
              name: "",
              cep: "",
              address: "",
              district: "",
              uf: "",
              location: "",
              cpf: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values) => {
              localStorage.setItem("user", JSON.stringify(values));
              Cookies.set("userCookies", JSON.stringify(values));
            }}
            render={({ errors, touched, setFieldValue }) => {
              return (
                <S.ContainerForm>
                  <Input
                    span="*"
                    title="Name:"
                    name="name"
                    placeholder="type your name"
                    errors={errors}
                    touched={touched}
                    onInput={(event) => inputMask(event, "name")}
                  />

                  <Input
                    span="*"
                    title="CPF:"
                    name="cpf"
                    placeholder="123.321.456-65"
                    errors={errors}
                    touched={touched}
                    onInput={(event) => inputMask(event, "cpf")}
                  />

                  <Input
                    span="*"
                    title="Postal Code:"
                    name="cep"
                    placeholder="00000-000"
                    errors={errors}
                    touched={touched}
                    onInput={(event) => requestToCep(event, setFieldValue)}
                    onInput={(event) => inputMask(event, "cep")}
                  />

                  <Input
                    span="*"
                    title="Neighborhood:"
                    name="district"
                    placeholder="brooklyn"
                    errors={errors}
                    touched={touched}
                  />

                  <Input
                    span="*"
                    title="Address:"
                    name="address"
                    placeholder="hamilton ave"
                    errors={errors}
                    touched={touched}
                  />

                  <Input
                    span="*"
                    title="City:"
                    name="location"
                    placeholder="new york"
                    errors={errors}
                    touched={touched}
                  />

                  <Input
                    span="*"
                    title="UF:"
                    name="uf"
                    placeholder="NY"
                    errors={errors}
                    touched={touched}
                  />
                  <S.DivButton>
                    <Button type="submit" content="REGISTER" />
                  </S.DivButton>
                </S.ContainerForm>
              );
            }}
          />
        </S.RegisterDiv>
      </S.Section>
    </S.Global>
  );
};

export default Register;
