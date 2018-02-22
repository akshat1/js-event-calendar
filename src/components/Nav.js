const hyperHTML = require('hyperhtml/cjs').default;
const { Years } = require('./YearSelector');
const { Months } = require('./MonthSelector');

function Nav(props) {
  const {
    selectedMonth,
    selectedYear,
    minYear,
    maxYear
  } = props;

  const yearsProps = {
    selectedYear,
    minYear,
    maxYear
  };

  return hyperHTML.wire()`
    <div class='simian-calendar__nav'>
      ${new Months({ selectedMonth })}
      ${new Years(yearsProps)}
    </div>
  `;
}

module.exports = {
  Nav
}
