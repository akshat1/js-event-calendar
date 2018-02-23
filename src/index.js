require('./style/main.less');
const { hyper } = require('hyperhtml/cjs').default;
const { Calendar } = require('./components/Calendar');

function render(opts) {
  const {
    renderTarget
  } = opts;
  
  hyper(renderTarget)`${new Calendar()}`;
}

module.exports = {
  render
}