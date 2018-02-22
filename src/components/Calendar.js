const hyperHTML = require('hyperhtml/cjs').default;
const { Nav } = require('./Nav');
const { Month } = require('./Month');

function Calendar(props = {}) {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const minYear = currentYear - 10;

  const navProps = {
    minYear,
    maxYear: currentYear,
    selectedYear: currentYear,
    selectedMonth: currentMonth
  };

  const monthProps = {
    month: currentMonth,
    year: currentYear
  };

  return hyperHTML.wire(props)`
    <div class="simian-calendar-root">
      ${new Nav(navProps)}
      ${new Month(monthProps)}
    </div>
  `;
}

module.exports = {
  Calendar
}
