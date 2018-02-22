const hyperHTML = require('hyperhtml/cjs').default;
const { Week } = require('./Week');
const { DayNameMarker } = require('./DayNameMarker');

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
    <div class="simian-calendar__month">
      <div class="simian-calendar__day-name-marker-container">
        ${new DayNameMarker({ dayOfWeek: 0 })}
        ${new DayNameMarker({ dayOfWeek: 1 })}
        ${new DayNameMarker({ dayOfWeek: 2 })}
        ${new DayNameMarker({ dayOfWeek: 3 })}
        ${new DayNameMarker({ dayOfWeek: 4 })}
        ${new DayNameMarker({ dayOfWeek: 5 })}
        ${new DayNameMarker({ dayOfWeek: 6 })}
      </div>
      ${weeks}
    </div>
  `;
}

module.exports = { Month };
