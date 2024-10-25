import { format } from "date-fns";

export const formatedDate = (time) => {
  const date = new Date(time * 1000);
  const formated = format(date, "dd/MM/yyyy");

  return formated;
};
