const hyperHTML = require('hyperhtml/cjs').default;
const { Option } = require('./Option');

function YearSelector(props) {
  this.props = props;
  const {minYear, maxYear, selectedYear} = props;
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
      <select onchange=${this}>
        ${options}
      </select>
    </div>
  `;
}

YearSelector.prototype.handleEvent = function(evt) {
  evt.type === 'change'
  && typeof this.props.onChange === 'function'
  && this.props.onChange(Number(evt.currentTarget.value));
}

module.exports = {
  YearSelector
}
