
	var
		hasTouch = ('ontouchstart' in window),
		DRAG_START_EVENT = hasTouch ? 'touchstart' : 'mousedown',
		DRAG_MOVE_EVENT  = hasTouch ? 'touchmove'  : 'mousemove',
		DRAG_END_EVENT   = hasTouch ? 'touchend'   : 'mouseup',

		x0 = 0, y0 = 0,
		rotation0 = 0, scale0 = 0,
		a0 = 0, b0 = 0, c0 = 0
	;

	function on(type, func) {
		document.addEventListener(type, func, false);
	}

	function off(type, fn) {
		document.removeEventListener(type, fn, false);
	}

	function cancel(e) {
		(e.preventDefault && e.preventDefault());
		e.returnValue = false;
	}






	function onDragStart(e) {}

	function onDragMove(e) {
		transformMatrix = translateMatrix(e.x, e.y, 0);
		if (hasTouch) {
			transformMatrix = translateMatrix(200, 200, 0);
			transformMatrix = rotateMatrix(0, 0, e.rotation);
			transformMatrix = translateMatrix(-200, -200, 0);
		}
		render();
	}

	function onDragEnd(e) {
		render();
	}

	function onMouseWheel(e) {
		transformMatrix = translateMatrix(200, 200, 0);
		transformMatrix = rotateMatrix(0, 0, e.deltaY / 10);
		transformMatrix = translateMatrix(-200, -200, 0);
		render();
	}


	on(DRAG_START_EVENT, dragStartEvent);

	if (hasTouch) {
		on('gesturechange', gestureChangeEvent);
	} else {
		on('mousewheel',     mouseWheelEvent);
		on('DOMMouseScroll', mouseWheelEvent);
	}

	//*****************************************************************************

	function dragStartEvent(e) {
		cancel(e);

		if (hasTouch) {
			if (e.touches.length > 1) return;
			e = e.touches[0];
			rotation1 = 0;
		}

		on(DRAG_MOVE_EVENT, dragMoveEvent);
		on(DRAG_END_EVENT,  dragEndEvent);

		x0 = e.clientX;
		y0 = e.clientY;

		onDragStart({ x:x0, y:y0 });
	}

	function dragMoveEvent(e) {
		cancel(e);
		if (hasTouch) {
			if (e.touches.length > 1) return;
			e = e.touches[0];
		}

		var
			x = e.clientX,
			y = e.clientY
		;

		onDragMove({ x: x - x0, y: y - y0 });

		x0 = x;
		y0 = y;
	}

	function dragEndEvent(e) {
		off(DRAG_MOVE_EVENT, dragMoveEvent);
		off(DRAG_END_EVENT,  dragEndEvent);
		onDragEnd();
	}

	function gestureChangeEvent(e) {
		cancel(e);
		var
			r = e.rotation - rotation0,
			s = e.scale - scale0
		;
		if (e > 5 || e < -5) {
			s = 0;
		}

		onDragMove({ rotation: r, scale: s });

		rotation0 = e.rotation;
		scale0 = e.scale;
	}

	function mouseWheelEvent(e) {
		cancel(e);
		var
			deltaX = e.wheelDeltaX || 0,
			deltaY = e.wheelDeltaY || 0;

		onMouseWheel({ deltaX: deltaX, deltaY: deltaY });
	}
