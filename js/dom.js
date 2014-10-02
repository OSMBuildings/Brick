
Brick.dom = {};

Brick.dom.find = function(q) {
  return document.querySelector(q);
}

Brick.dom.contains = function(container, el) {
  return container.contains ? container.contains(el) : !!(container.compareDocumentPosition(el) & 16);
};

Brick.dom.hasClass = function(el, cls) {
  return el.classList ? el.classList.contains(cls) : new RegExp('\\b'+ cls +'\\b').test(el.className);
};

Brick.dom.addClass = function(el, cls) {
  if (!Brick.dom.hasClass(el, cls)) {
    el.classList ? el.classList.add(cls) : (el.className += ' '+ cls);
  }
};

Brick.dom.removeClass = function(el, cls) {
  el.classList ? el.classList.remove(cls) : (el.className = (el.className.replace(new RegExp('\\s*\\b'+ cls +'\\b', 'g'), '')));
};
