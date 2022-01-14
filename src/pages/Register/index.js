import * as S from "./styles";

/* Libs */
import { Formik } from "formik";
import requestToCep from "../../services/index";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

/* Content */
import { registerSchema } from "./registerSchema";

/* Components */
import { TitleAndParagraph, Input, Button } from "../../components/index";
import { inputMask } from "../../utils/inputMask";

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
              //Local Storage and Cookies
              localStorage.setItem("user", JSON.stringify(values));

              let userValue = localStorage.getItem("user");
              userValue = JSON.parse(userValue);

              Cookies.set("userCookies", JSON.stringify(values));

              toast.success(
                `Welcome ${userValue.name}, your registration was created successfully`,
                {
                  position: "bottom-right",
                  autoClose: 5000,
                }
              );

              setTimeout(() => {
                toHome();
              }, 5000);
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
                    onBlur={(event) => inputMask(event, "name")}
                  />

                  <Input
                    span="*"
                    title="CPF:"
                    name="cpf"
                    placeholder="123.321.456-65"
                    errors={errors}
                    touched={touched}
                    onBlur={(event) => inputMask(event, "cpf")}
                  />

                  <Input
                    span="*"
                    title="Postal Code:"
                    name="cep"
                    placeholder="00000-000"
                    errors={errors}
                    touched={touched}
                    onInput={(event) => requestToCep(event, setFieldValue)}
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
