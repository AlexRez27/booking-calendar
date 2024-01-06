/**
 * Helper function for getting some day of week
 * @param {*} date
 * @param {*} dayNymber - week day number
 * @returns {Date}
 */

export const getDay = (date, dayNymber) => {
  let day = date.getDay();
  const diff = date.getDate() - day + (day == 0 ? -6 : dayNymber);
  return new Date(date.setDate(diff));
};

/**
 * Get array of current week dates, from Monday to Sunday
 * @returns {Array}
 */
export const getInitialDateRange = () => {
  const firstDateOfWeek = getDay(new Date(), 1);
  const lastDateOfWeek = getDay(new Date(), 7);
  const initialDateRange = [];

  for (
    let d = firstDateOfWeek;
    d <= lastDateOfWeek;
    d.setDate(d.getDate() + 1)
  ) {
    const date = new Date(d);
    date.setHours(0, 0, 0, 0);
    initialDateRange.push(date);
  }

  return initialDateRange;
};
