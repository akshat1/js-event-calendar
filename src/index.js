require('./style/main.less');
const { Calendar } = require('./components/Calendar');

function render(opts) {
  const {
    renderTarget
  } = opts;

  renderTarget.appendChild(new Calendar());
}

module.exports = {
  render
}