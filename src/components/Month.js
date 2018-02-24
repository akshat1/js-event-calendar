const hyperHTML = require('hyperhtml/cjs').default;
const { Week } = require('./Week');

/**
 * @param {Object} props -
 * @param {number} props.month - month of year. 0 indexed.
 * @param {number} props.year - which year is it?
 * @returns {Object} -
 */
function Month(props = {}) {
  const {
    month,
    year
  } = props;
  const weeks = [];

  for (let i = 0; i < 5; i++)
    weeks.push(new Week({
      month,
      year,
      weekOfMonth: i
    }));

  return hyperHTML.wire(props)`
    <div class="simian-calendar__month" data-month="${month}">
      <div class="simian-calendar__day-name-marker-container">
        <div class="simian-calendar__day-name-marker">Sun</div>
        <div class="simian-calendar__day-name-marker">Mon</div>
        <div class="simian-calendar__day-name-marker">Tue</div>
        <div class="simian-calendar__day-name-marker">Wed</div>
        <div class="simian-calendar__day-name-marker">Thu</div>
        <div class="simian-calendar__day-name-marker">Fri</div>
        <div class="simian-calendar__day-name-marker">Sat</div>
      </div>
      ${weeks}
    </div>
  `;
}

module.exports = { Month };
