const hyperHTML = require('hyperhtml/cjs').default;
const { Day } = require('./Day');
const {
  getLastDayOfMonth,
  getFirstDayOfMonth,
  isDayFiller
} = require('../utils/date');
/**
 * @param {Object} props -
 * @param {number} props.weekOfMonth - 0 to 4.
 * @param {number} props.month - 0 to 11.
 * @param {number} props.year -
 * @returns {Object} -
 */
function Week(props = {}) {
  const {
    year,
    month,
    weekOfMonth = 0
  } = props;
  const days = [];
  const firstDayOfMonth = getFirstDayOfMonth(month, year);

  for(let i = 0; i < 7; i++) {
    const dayOfMonth = (i - firstDayOfMonth) + (weekOfMonth * 7);
    days.push(new Day({
      year,
      month,
      weekOfMonth,
      dayOfWeek: i,
      dayOfMonth,
      isFiller: isDayFiller({
        dayOfMonth,
        dayOfWeek: i,
        weekOfMonth,
        firstDayOfMonth,
        lastDayOfMonth: getLastDayOfMonth(month, year)
      })
    }));
  }
  return hyperHTML.wire(props)`
    <div class="simian-calendar__week">
      ${days}
    </div>
  `;
}

module.exports = {
  Week
};
