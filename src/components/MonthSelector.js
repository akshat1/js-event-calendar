const hyperHTML = require('hyperhtml/cjs').default;
const { Option } = require('./Option');
const { noop } = require('../utils');

function Months({ selectedMonth, onChange = noop }) {
  return hyperHTML.wire()`
    <div class='simian-calendar__month-selector' onChange=${onChange}>
      <select>
        ${new Option({ label: 'January', value: 0, selected: selectedMonth === 0 })}
        ${new Option({ label: 'February', value: 1, selected: selectedMonth === 1 })}
        ${new Option({ label: 'March', value: 2, selected: selectedMonth === 2 })}
        ${new Option({ label: 'April', value: 3, selected: selectedMonth === 3 })}
        ${new Option({ label: 'May', value: 4, selected: selectedMonth === 4 })}
        ${new Option({ label: 'June', value: 5, selected: selectedMonth === 5 })}
        ${new Option({ label: 'July', value: 6, selected: selectedMonth === 6 })}
        ${new Option({ label: 'August', value: 7, selected: selectedMonth === 7 })}
        ${new Option({ label: 'September', value: 8, selected: selectedMonth === 8 })}
        ${new Option({ label: 'October', value: 9, selected: selectedMonth === 9 })}
        ${new Option({ label: 'November', value: 10, selected: selectedMonth === 10 })}
        ${new Option({ label: 'December', value: 11, selected: selectedMonth === 11 })}
      </select>
    </div>
  `;
}

module.exports = {
  Months
};
