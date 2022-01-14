/* Libs */
import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string().required(""),
  date: Yup.date()
    .max(new Date(), "The deadline is the current day")
    .required(""),
  cpf: Yup.string()
    .min(11, "This field must have eleven digits")
    .max(14, "This field must have eleven digits")
    .required(""),
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
