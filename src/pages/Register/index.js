import { Formik, Form as ContainerForm, Field } from "formik";
import requestToCep from "../../services/index";
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  cep: Yup.string()
    .min(8, "Este cep precisa ter 8 digitos")
    .max(8, "Este cep precisa ter 8 digitos")
    .required("Este campo é obrigatorio"),
});
const Register = () => {
  return (
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
  );
};

export default Register;
