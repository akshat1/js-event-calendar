const hyperHTML = require('hyperhtml/cjs').default;
const { EventMarker } = require('./EventMarker');
const { leftPad, classNames } = require('../utils');
const { isDayFiller, getLastDayOfMonth } = require('../utils/date');

function Day(props = {}) {
  const {
    dayOfMonth,
    dayOfWeek,
    events = [],
    month,
    year
  } = props;

  const className = classNames(
    'simian-calendar__day', {
      'simian-calendar__day--filler': isDayFiller(props),
      'simian-calendar__day--first-day': dayOfMonth === 0,
      'simian-calendar__day--last-day': dayOfMonth + 1 === getLastDayOfMonth(month, year)
    }
  );

  return hyperHTML.wire(props)`
    <div class=${className} data-dom=${dayOfMonth} data-dow=${dayOfWeek}>
      <div class="simian-calendar__day-number">${leftPad(dayOfMonth + 1, '0', 2)}</div>
      <div class="simian-calendar__event-markers">
        ${events.map(e => new EventMarker({...e}))}
      </div>
    </div>
  `;
}

module.exports = { Day };
