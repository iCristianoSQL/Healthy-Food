import { Formik, Form as ContainerForm } from "formik";
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
    <div>
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
          <input
            type="text"
            disabled={userAddress.logradouro}
            name="address"
            value={userAddress.logradouro}
          />
          <input
            type="text"
            disabled={userAddress.bairro}
            name="district"
            value={userAddress.bairro}
          />
          <input
            type="text"
            disabled={userAddress.localidade}
            name="location"
            value={userAddress.localidade}
          />
          <input
            type="text"
            disabled={userAddress.uf}
            name="uf"
            value={userAddress.uf}
          />
        </ContainerForm>
      </Formik>
    </div>
  );
};

export default Register;
