// Get: date, Return: days from 1/1
const getDayOfYear = (date: Date): number => {
  const year = date.getFullYear();

  const january1st = new Date(year, 0, 1);

  const timeFromJanuary = date.getTime() - january1st.getTime();

  const dayOfYear = Math.floor(timeFromJanuary / (24 * 60 * 60 * 1000)) + 1;

  return dayOfYear;
};

// Get: date, return: 1-67
const getPageByDate = (date: Date): number => {
  const dayOfYear = getDayOfYear(date);
  const fixedNumber = (dayOfYear % 67) + 1;

  return fixedNumber;
};

export default getPageByDate;
