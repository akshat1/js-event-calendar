const hyperHTML = require('hyperhtml/cjs').default;

function Option({label, value, selected}) {
  return hyperHTML.wire()`
    <option value=${value} selected=${selected}>${label}</option>
  `;
}

module.exports = {
  Option
};
