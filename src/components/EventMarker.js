const hyperHTML = require('hyperhtml/cjs').default;

function EventMarker(props = {}) {
  return hyperHTML.wire(props)`
    <div class="simian-calendar__event">
      ${props.name}
    </div>
  `;
}

module.exports = { EventMarker };
