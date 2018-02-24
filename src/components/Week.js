const hyperHTML = require('hyperhtml/cjs').default;
const { Day } = require('./Day');
const { getFirstDayOfMonth } = require('../utils/date');
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
      dayOfMonth
    }));
  }
  return hyperHTML.wire(props)`
    <div class="simian-calendar__week" data-week="${weekOfMonth}">
      ${days}
    </div>
  `;
}

module.exports = {
  Week
};
