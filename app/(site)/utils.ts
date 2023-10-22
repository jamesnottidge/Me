import format from "date-fns/format";

export function dateFormatter(input: string) {
  const inputDate = new Date(input);

  const options = { year: "numeric", month: "long", day: "numeric" };

  const formattedDate = format(inputDate, "do MMMM yyyy");

  
  return formattedDate;
}
