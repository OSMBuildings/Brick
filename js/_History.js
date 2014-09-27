
var Brick = function() {
  var context = {};

//  var history = context.History(context),
//    connection = context.Connection();
//
//  connection.on('load.context', function(err, result) {
//    history.merge(result.data, result.extent);
//  });
//
//  context.preauth = function(options) {
//    connection.switch(options);
//    return context;
//  };
//
//  context.save = function() {
//    history.save();
//    if (history.hasChanges()) return t('save.unsaved_changes');
//  };
//
//  context.flush = function() {
//    connection.flush();
//    history.reset();
//    return context;
//  };
//
//  // Debounce save, since it's a synchronous localStorage write,
//  // and history changes can happen frequently (e.g. when dragging).
//  var debouncedSave = _.debounce(context.save, 350);
//  function withDebouncedSave(fn) {
//    return function() {
//      var result = fn.apply(history, arguments);
//      debouncedSave();
//      return result;
//    };
//  }
//
//  context.perform = withDebouncedSave(history.perform);
//  context.replace = withDebouncedSave(history.replace);
//  context.pop = withDebouncedSave(history.pop);
//  context.undo = withDebouncedSave(history.undo);
//  context.redo = withDebouncedSave(history.redo);
//
//  /* Graph */
//  context.hasEntity = function(id) {
//    return history.graph().hasEntity(id);
//  };
//
//  context.entity = function(id) {
//    return history.graph().entity(id);
//  };
//
//  context.childNodes = function(way) {
//    return history.graph().childNodes(way);
//  };
};

Brick.VERSION = '0.1.0';