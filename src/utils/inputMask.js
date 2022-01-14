export const inputMask = (event, name) => {
  const {
    target: { value },
  } = event;

  const masks = {
    username: (value) => value.replace(/\[^\w]/g, ""),
    cpf: (value) =>
      value
        .replace(/\D+/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1"),
    cep: (value) =>
      value
        .replace(/\D+/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1"),
  };

  return (event.target.value = masks[name](value));
};
