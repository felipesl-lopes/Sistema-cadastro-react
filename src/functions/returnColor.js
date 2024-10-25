export const returnColor = (status) => {
  if (status === "Em aberto") {
    return "green";
  } else if (status === "Progresso") {
    return "orange";
  } else if (status === "Atendido") {
    return "gray";
  }
};
