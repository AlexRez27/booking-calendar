/**
 * filter to foramt date in dd.MM.yyyy format
 * @param {Date} date
 * @returns {String} formatted date
 */
export const dateFilter = (date) => {
  if (!Object.prototype.toString.call(date) === "[object Date]") return;
  const year = date.getYear() + 1900;
  const month =
    date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${year}-${month}-${day}`;
};
