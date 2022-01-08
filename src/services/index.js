import axios from "axios";

const requestToCep = async (cep) => {
  const responseData = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return responseData.data;
};

export default requestToCep;
