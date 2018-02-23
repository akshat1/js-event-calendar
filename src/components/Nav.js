const hyperHTML = require('hyperhtml/cjs').default;
const { YearSelector } = require('./YearSelector');
const { MonthSelector } = require('./MonthSelector');

function Nav(props) {
  const {
    maxYear,
    minYear,
    onMonthChange,
    onYearChange,
    selectedMonth,
    selectedYear
  } = props;

  const yearsProps = {
    maxYear,
    minYear,
    onChange: onYearChange,
    selectedYear
  };

  return hyperHTML.wire()`
    <div class='simian-calendar__nav'>
      ${new MonthSelector({ selectedMonth, onChange: onMonthChange })}
      ${new YearSelector(yearsProps)}
    </div>
  `;
}

module.exports = {
  Nav
}
