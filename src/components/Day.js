const hyperHTML = require('hyperhtml/cjs').default;
const { EventMarker } = require('./EventMarker');
const { leftPad, classNames } = require('../utils');
const { isDayFiller } = require('../utils/date');

function Day(props = {}) {
  const {
    dayOfMonth,
    events = []
  } = props;

  const className = classNames(
    'simian-calendar__day', {
      'simian-calendar__day--filler': isDayFiller(props),
      'simian-calendar__day--first-day': dayOfMonth === 0
    }
  );

  return hyperHTML.wire(props)`
    <div class=${className} data-day=${dayOfMonth}>
      <div class="simian-calendar__day-number">${leftPad(dayOfMonth + 1, '0', 2)}</div>
      <div class="simian-calendar__event-markers">
        ${events.map(e => new EventMarker({...e}))}
      </div>
    </div>
  `;
}

module.exports = { Day };
