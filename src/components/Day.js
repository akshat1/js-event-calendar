const hyperHTML = require('hyperhtml/cjs').default;
const { leftPad, classNames } = require('../utils');

function Day(props = {}) {
  const {
    dayOfMonth,
    isFiller
  } = props;

  const className = classNames(
    'simian-calendar__day',
    { 'simian-calendar__day--filler': isFiller}
  );

  return hyperHTML.wire(props)`
    <div class="${className}">
      <div class="simian-calendar__day-number">${leftPad(dayOfMonth + 1, '0', 2)}</div>
    </div>
  `;
}

module.exports = { Day };
