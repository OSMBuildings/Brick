
class Events {

  constructor () {
    this.listeners = {};
  }

  on (type, fn) {
    (this.listeners[type] || (this.listeners[type] = [])).push(fn);
  }

  off (type, fn) {
    if (this.listeners[type] === undefined) {
      return;
    }
    this.listeners[type] = this.listeners[type].filter( item => {
      return item[0] !== fn;
  });
  }

  emit (type, payload) {
    if (this.listeners[type] === undefined) {
      return;
    }
    setTimeout( () => {
      const typeListeners = this.listeners[type];
    for (let i = 0, len = typeListeners.length; i < len; i++) {
      typeListeners[i](payload);
    }
  }, 0);

  }

  destroy () {
    this.listeners = {};
  }

}