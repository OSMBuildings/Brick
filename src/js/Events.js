
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
    this.listeners[type] = (this.listeners[type] || []).filter(item => item !== fn);
  }

  emit (type, payload) {
    setTimeout(t => {
      (this.listeners[type] || []).forEach(listener => listener(payload));
    }, 0);
  }

  destroy () {
    this.listeners = {};
  }
}