function Store() {
  this.state = {};
  this.subscribers = [];
  this._initialise();
}

Store.prototype._initialise = function _initialise() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const minYear = currentYear - 10;

  this.setState({
    currentYear,
    currentMonth,
    minYear
  });
}

Store.prototype.setState = function setState(newState) {
  const mergedState = { ...this.state, ...newState };
  console.log('>>>', mergedState);
  this.state = mergedState;
  this.signalUpdate();
}

Store.prototype.getState = function getState() {
  return this.state;
}

Store.prototype.subscribe = function subscribe(fn) {
  this.unsubscribe(fn);
  this.subscribers.push(fn);
}

Store.prototype.unsubscribe = function unsubscribe(fn) {
  this.subscribers = this.subscribers.filter(x => x !== fn);
}

Store.prototype.signalUpdate = function signalUpdate() {
  this.subscribers.forEach(fn => fn(this.state));
}

module.exports = {
  Store
};
