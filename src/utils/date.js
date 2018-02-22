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

function isDayFiller({dayOfMonth, dayOfWeek, weekOfMonth, firstDayOfMonth, lastDayOfMonth}) {
  if (weekOfMonth === 0) {
    return dayOfWeek < firstDayOfMonth;
  }

  if (dayOfMonth >= lastDayOfMonth) {
    return true;
  }

  return false;
}

module.exports = {
  getLastDayOfMonth,
  getFirstDayOfMonth,
  isDayFiller
};
