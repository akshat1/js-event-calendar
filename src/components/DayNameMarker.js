const hyperHTML = require('hyperhtml/cjs').default;

const DayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

/**
 * @param {Object} props -
 * @param {number} props.dayOfWeek - 0 to 6
 * @return {Object} -
 */
function DayNameMarker(props = {}) {
  return hyperHTML.wire(props)`
    <div class="simian-calendar__day-name-marker">
      ${(DayNames[props.dayOfWeek] || '').substr(0, 3)}
    </div>
  `;
}

module.exports = { DayNameMarker };
