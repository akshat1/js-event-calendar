function getLastDayOfMonth(month, year) {
  if (month === 1) {
    return year % 4 === 0 ? 29 : 28;
  }

  if (month < 7)
    return month % 2 ? 30 : 31;
  
  if (month >= 7)
    return month % 2 ? 31 : 30;
}

function getFirstDayOfMonth(month, year) {
  return (new Date(`${year}-${month + 1}-01`)).getDay();
}

function isDayFiller({ year, month, dayOfMonth }) {
  return dayOfMonth < 0 || dayOfMonth >= getLastDayOfMonth(month, year);
}

module.exports = {
  getLastDayOfMonth,
  getFirstDayOfMonth,
  isDayFiller,
};
