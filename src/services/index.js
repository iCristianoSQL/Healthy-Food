import axios from "axios";

const requestToCep = async (event, setFieldValue) => {
  const { value } = event.target;
  const cep = value?.replace(/[^0-9]/g, "");
  if (cep?.length !== 8) {
    return;
  }
  const responseData = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  const dados = responseData.data;
  setFieldValue("address", dados.logradouro);
  setFieldValue("district", dados.bairro);
  setFieldValue("location", dados.localidade);
  setFieldValue("uf", dados.uf);
};

export default requestToCep;
