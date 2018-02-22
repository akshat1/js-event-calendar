const hyperHTML = require('hyperhtml/cjs').default;
const { Option } = require('./Option');

function Years({minYear, maxYear, selectedYear}) {
  const options = [];
  for (let i = minYear; i <= maxYear; i++) {
    options.push(new Option({
      label: i,
      value: i,
      selected: i === selectedYear
    }));
  }

  return hyperHTML.wire()`
    <div class='simian-calendar__year-selector'>
      <select>
        ${options}
      </select>
    </div>
  `;
}

module.exports = {
  Years
}
