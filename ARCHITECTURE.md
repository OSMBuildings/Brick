
## Behavior

Certain behaviors are common to more than one mode. For example, iD indicates
interactive map elements by drawing a halo around them when you hover over
them, and this behavior is common to both the browse and draw modes. Instead
of duplicating the code to implement this behavior in all these modes, we
extract it to `iD.behavior.Hover`.

_Behaviors_ take their inspiration from [d3's
behaviors](https://github.com/mbostock/d3/wiki/Behaviors). Like d3's `zoom`
and `drag`, each iD behavior is a function that takes as input a d3 selection
(assumed to consist of a single element) and installs the DOM event bindings
necessary to implement the behavior. The `Hover` behavior, for example,
installs bindings for the `mouseover` and `mouseout` events that add and
remove a `hover` class from map elements.

Because certain behaviors are appropriate to some but not all modes, we need
the ability to remove a behavior when entering a mode where it is not
appropriate. (This is functionality [not yet
provided](https://github.com/mbostock/d3/issues/894) by d3's own behaviors.)
Each behavior implements an `off` function that "uninstalls" the behavior.
This is very similar to the `exit` method of a mode, and in fact many modes do
little else but uninstall behaviors in their `exit` methods.

## Operations

_Operations_ wrap actions, providing their user-interface: tooltips, key
bindings, and the logic that determines whether an action can be validly
performed given the current map state and selection. Each operation is
constructed with the list of IDs which are currently selected and a `context`
object which provides access to the history and other important parts of iD's
internal state. After being constructed, an operation can be queried as to
whether or not it should be made available (i.e., show up in the context menu)
and if so, if it should be enabled.

![Operations menu](docs/img/operations.png)

We make a distinction between availability and enabled state for the sake of
learnability: most operations are available so long as an entity of the
appropriate type is selected. Even if it remains disabled for other reasons
(e.g. because you can't split a way on its start or end vertex), a new user
can still learn that "this is something I can do to this type of thing", and a
tooltip can provide an explanation of what that operation does and the
conditions under which it is enabled.

To execute an operation, call it as a function, with no arguments. The typical
operation will perform the appropriate action, creating a new undo state in
the history, and then enter the appropriate mode. For example,
`iD.operations.Split` performs `iD.actions.Split`, then enters
`iD.modes.Select` with the resulting ways selected.

## Map Rendering

For each of these geometric types, `iD.svg` has a corresponding module:
`iD.svg.Points`, `iD.svg.Vertices`, `iD.svg.Lines`, and `iD.svg.Areas`. To
render entities on screen, `iD.Map` delegates to these modules. Internally,
they make heavy use of [d3 joins](http://bost.ocks.org/mike/join/) to
manipulate the SVG elements that visually represent the map entities. When an
entity is rendered for the first time, it is part of the _enter_ selection,
and the SVG elements needed to represent it are created. When an entity is
modified, it is part of the _update_ selection, and the appropriate attributes
of the SVG element (for example, those that specify the location on screen)
are updated. And when an entity is deleted (or simply moves offscreen), the
corresponding SVG element is in the _exit_ selection, and will be removed.

The `iD.svg` modules apply classes to the SVG elements based on the entity
tags, via `iD.svg.TagClasses`. For example, an entity tagged with
`highway=residential` gets two classes: `tag-highway` and
`tag-highway-residential`. This allows distinct visual styles to be applied
via CSS at either the key or key-value levels. SVG elements also receive a
class corresponding to their entity type (`node`, `way`, or `relation`) and
one corresponding to their geometry type (`point`, `line`, or `area`).

The `iD.svg` namespace has a few other modules that don't have a one-to-one
correspondence with entities:

* `iD.svg.Midpoints` renders the small "virtual node" at the midpoint between
  two vertices.
* `iD.svg.Labels` renders the textual
  [labels](http://mapbox.com/osmdev/2013/02/12/labeling-id/).
* `iD.svg.Surface` sets up a number of layers that ensure that map elements
  appear in an appropriate z-order.

## Other UI

![Geocoder UI](docs/img/geocoder.png)

The implementations for all non-map UI components live in the `iD.ui` namespace.
Many of the modules in this namespace follow a pattern for reusable d3
components [originally suggested](http://bost.ocks.org/mike/chart/) by Mike
Bostock in the context of charts. The entry point to a UI element is a
constructor function, e.g. `iD.ui.Geocoder()`. The constructor function may
require a set of mandatory arguments; for most UI components exactly one
argument is required, a `context` object produced by the top-level `iD()`
function.
