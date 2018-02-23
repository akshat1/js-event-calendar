const hyperHTML = require('hyperhtml/cjs').default;
const { Nav } = require('./Nav');
const { Month } = require('./Month');
const { Store } = require('../Store');

class Calendar extends hyperHTML.Component {
  constructor() {
    super();
    this.store = new Store();
    this.setState({...this.store.getState()});
    this.store.subscribe(this.setState.bind(this));
    this.onMonthChange = this.onMonthChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
  }

  onMonthChange(selectedMonth) {
    this.store.setState({
      currentMonth: selectedMonth
    });
  }

  onYearChange(selectedYear) {
    this.store.setState({
      currentYear: selectedYear
    });
  }

  render() {
    const {
      currentYear,
      currentMonth,
      minYear
    } = this.state;

    const navProps = {
      minYear,
      maxYear: new Date().getFullYear(),
      selectedYear: currentYear,
      selectedMonth: currentMonth,
      onMonthChange: this.onMonthChange,
      onYearChange: this.onYearChange,
    };
  
    const monthProps = {
      month: currentMonth,
      year: currentYear
    };

    return this.html`
      <div class="simian-calendar-root">
        ${new Nav(navProps)}
        ${new Month(monthProps)}
      </div>
    `;
  }
}

module.exports = {
  Calendar
}
