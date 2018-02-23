const assert = require('assert');
const { Store } = require('../src/Store');
const sinon = require('sinon');

describe('Store', function () {
  describe('constructor', function () {
    it('should leave us with expected properties', function () {
      const date = new Date();
      const store = new Store();
      const state = store.getState();
      assert.equal(state.currentYear, date.getFullYear());
      assert.equal(state.currentMonth, date.getMonth());
      assert.equal(state.minYear, date.getFullYear() - 10);
      assert.ok(Array.isArray(store.subscribers));
      assert.equal(store.subscribers.length, 0);
    });
  });

  describe('setState', function() {
    it('should merge supplied state with existing state', function () {
      const dummy = {
        state: {
          foo: 'Foo0',
          bar: 'Bar0',
          baz: 'Baz0'
        },
        signalUpdate: sinon.stub(),
        setState: Store.prototype.setState
      };

      dummy.setState({
        foo: 'Foo1',
        baz: 'Baz1'
      });

      assert.deepEqual(dummy.state, {
        foo: 'Foo1',
        bar: 'Bar0',
        baz: 'Baz1'
      });
    });
    it('should signal subscribers', function() {
      const dummy = {
        signalUpdate: sinon.stub(),
        setState: Store.prototype.setState
      };

      dummy.setState();
      assert.ok(dummy.signalUpdate.calledOnce);

      dummy.setState();
      dummy.setState();
      dummy.setState();
      assert.equal(dummy.signalUpdate.callCount, 4);
    });
  });

  describe('subscribe', function() {
    it('should add function to subscribers list', function() {
      const dummy = {
        subscribers: [],
        subscribe: Store.prototype.subscribe,
        unsubscribe: Store.prototype.unsubscribe
      };

      dummy.subscribe('foo');
      dummy.subscribe('bar');
      assert.deepEqual(dummy.subscribers, ['foo', 'bar']);
    });
    it('should ignore duplicate subscribers', function() {
      const dummy = {
        subscribers: [],
        subscribe: Store.prototype.subscribe,
        unsubscribe: Store.prototype.unsubscribe
      };

      dummy.subscribe('foo');
      dummy.subscribe('bar');
      dummy.subscribe('bar');
      dummy.subscribe('bar');
      dummy.subscribe('bar');
      dummy.subscribe('baz');
      assert.deepEqual(dummy.subscribers, ['foo', 'bar', 'baz']);
    });
  });

  describe('unsubcribe', function() {
    it('should remove given subscriber', function() {
      const dummy = {
        subscribers: [],
        subscribe: Store.prototype.subscribe,
        unsubscribe: Store.prototype.unsubscribe
      };

      dummy.subscribe('foo');
      dummy.subscribe('bar');
      dummy.subscribe('baz');
      dummy.unsubscribe('foo');
      dummy.unsubscribe('foo');
      dummy.unsubscribe('foo');
      dummy.unsubscribe('foo');
      dummy.unsubscribe('foo');
      
      assert.deepEqual(dummy.subscribers, ['bar', 'baz'])
    });
  });

  describe('signalUpdate', function() {
    it('should call each subscriber with current state', function() {
      const store = new Store();
      const stubs = [
        sinon.stub(),
        sinon.stub(),
        sinon.stub()
      ];
      stubs.forEach(fn => store.subscribe(fn));
      store.setState({
        foo: 'bar'
      });
      const expectedState = store.getState();

      stubs.forEach(function(stub) {
        assert.deepEqual(
          stub.args,
          [[expectedState]]
        );
      });
    });
  })
});
