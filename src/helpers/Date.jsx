const todaysDate = () => {
  const date = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString(undefined, options);
  return formattedDate;
};

export default todaysDate;
