import { Formik, Form as ContainerForm, Field } from "formik";
import requestToCep from "../../services/index";
import React, { useCallback, useState } from "react";
import Cep from "react-simple-cep-mask";

export const Register = () => {
  const [userAddress, setAdress] = useState({});
  const [userChange, setUserChange] = useState("");

  const getCepInfo = useCallback(async (cep) => {
    const requestCep = await requestToCep(cep);
    setAdress(requestCep);
  }, []);

  const handleChange = useCallback(
    (event) => {
      if (event.length === 9) {
        getCepInfo(event);
      }
      setUserChange(event);
    },
    [getCepInfo]
  );
  return (
    <>
      <Formik
        initialValues={{
          textCep: "",
          address: "",
          district: "",
          uf: "",
          location: "",
        }}
        enableReinitialize
      >
        <ContainerForm>
          <Cep name="textCep" value={userChange} onChange={handleChange} />
          <Field
            type="text"
            disabled={userAddress.logradouro}
            value={userAddress.logradouro}
            name="address"
          />
          {console.log(userAddress.logradouro)}
          <Field
            type="text"
            disabled={userAddress.bairro}
            name="district"
            value={userAddress.bairro}
          />
          <Field
            type="text"
            disabled={userAddress.localidade}
            name="location"
            value={userAddress.localidade}
          />
          <Field
            type="text"
            disabled={userAddress.uf}
            name="uf"
            value={userAddress.uf}
          />
        </ContainerForm>
      </Formik>
    </>
  );
};

export default Register;
