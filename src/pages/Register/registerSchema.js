/* Libs */
import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string().required(""),
  cpf: Yup.string().required(""),
  cep: Yup.string()
    .min(8, "This field must have eight digits")
    .max(9, "This field must have eight digits")
    .required(""),
  address: Yup.string().required(""),
  district: Yup.string().required(""),
  location: Yup.string().required(""),
  uf: Yup.string()
    .min(2, "This field must have two digits")
    .max(2, "This field must have two digits")
    .required(""),
});
