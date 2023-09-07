const getDaysInMonth = (year: number, month: number) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);
  return days;
};

const getDays = (year: number, month: number) => {
  const daysInMonth = getDaysInMonth(year, month);
  const startDay = new Date(year, month - 1, 1).getDay();
  const days = [...Array(startDay).fill(""), ...daysInMonth];
  return days;
};

export { getDays };
