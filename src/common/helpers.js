/**
 * Helper function for getting some day of week
 * @param {*} date
 * @param {*} dayNymber - week day number
 * @returns {Date}
 */

function getDay(date, dayNumber) {
  // Validate dayNumber (1 for Monday, 2 for Tuesday, ..., 7 for Sunday)
  if (dayNumber < 1 || dayNumber > 7) {
    throw new Error("Invalid dayNumber. It should be between 1 and 7.");
  }

  // Calculate the difference between the desired day and the current day
  const currentDay = ((date.getDay() + 6) % 7) + 1;
  const dayDifference = dayNumber - currentDay;
  // Adjust the date by adding the day difference
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + dayDifference);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
}

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
