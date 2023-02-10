const convertDate = (date) => {
  const newDate = new Date(date);
  return newDate.toDateString("default", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};
export default convertDate;

