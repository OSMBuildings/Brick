
var xyz = (function(window) {

	var
    CAM_Z = 600,
		FLOOR_height = 10,
		WALL_COLOR = 'rgba(240, 220, 200, 0.6)';

  var
    sin = Math.sin,
    cos = Math.cos,
    rad = Math.PI/180,
		transformMatrix,
    context,
    width = 0, height = 0,
    halfWidth = 0, halfHeight = 0,
    data;

	function identityMatrix() {
		return [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1
		];
	}

	function translateMatrix(x, y, z) {
		if (!x && !y && !z) {
			return transformMatrix;
		}

		var transform = [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			x, y, z, 1
		];

		return multiplyMatrix(transformMatrix, transform);
	}

	function scaleMatrix(x, y, z) {
		if (!x && !y && !z) {
			return transformMatrix;
		}

		var transform = [
			x, 0, 0, 0,
			0, y, 0, 0,
			0, 0, z, 0,
			0, 0, 0, 1
		];

		return multiplyMatrix(transformMatrix, transform);
	}

	function rotateMatrix(x, y, z) {
		if (!x && !y && !z) {
			return transformMatrix;
		}

		var transform = getRotationMatrix(x*rad, y*rad, z*rad);
		return multiplyMatrix(transformMatrix, transform);
	}

	function getRotationMatrix(x, y, z) {
		var
			res = identityMatrix(),
			rSin, rCos, transform;

		if (z) {
			rCos = cos(-z);
			rSin = sin(-z);
			transform = [
				rCos, -rSin, 0, 0,
				rSin,  rCos, 0, 0,
				   0,     0, 1, 0,
				   0,     0, 0, 1
			];
			res = multiplyMatrix(res, transform);
		}

		if (y) {
			rCos = cos(-y);
			rSin = sin(-y);
			transform = [
				 rCos, 0, rSin, 0,
					0, 1,    0, 0,
				-rSin, 0, rCos, 0,
					0, 0,    0, 1
			];
			res = multiplyMatrix(res, transform);
		}

		if (x) {
			rCos = cos(-x);
			rSin = sin(-x);
			transform = [
				1,    0,     0, 0,
				0, rCos, -rSin, 0,
				0, rSin,  rCos, 0,
				0,    0,     0, 1
			];
			res = multiplyMatrix(res, transform);
		}

		return res;
	}

	function multiplyMatrix(a, b) {
		return [
			a[0]*b[ 0] + a[4]*b[ 1] + a[ 8]*b[ 2] + a[12]*b[ 3],
			a[1]*b[ 0] + a[5]*b[ 1] + a[ 9]*b[ 2] + a[13]*b[ 3],
			a[2]*b[ 0] + a[6]*b[ 1] + a[10]*b[ 2] + a[14]*b[ 3],
			a[3]*b[ 0] + a[7]*b[ 1] + a[11]*b[ 2] + a[15]*b[ 3],
			a[0]*b[ 4] + a[4]*b[ 5] + a[ 8]*b[ 6] + a[12]*b[ 7],
			a[1]*b[ 4] + a[5]*b[ 5] + a[ 9]*b[ 6] + a[13]*b[ 7],
			a[2]*b[ 4] + a[6]*b[ 5] + a[10]*b[ 6] + a[14]*b[ 7],
			a[3]*b[ 4] + a[7]*b[ 5] + a[11]*b[ 6] + a[15]*b[ 7],
			a[0]*b[ 8] + a[4]*b[ 9] + a[ 8]*b[10] + a[12]*b[11],
			a[1]*b[ 8] + a[5]*b[ 9] + a[ 9]*b[10] + a[13]*b[11],
			a[2]*b[ 8] + a[6]*b[ 9] + a[10]*b[10] + a[14]*b[11],
			a[3]*b[ 8] + a[7]*b[ 9] + a[11]*b[10] + a[15]*b[11],
			a[0]*b[12] + a[4]*b[13] + a[ 8]*b[14] + a[12]*b[15],
			a[1]*b[12] + a[5]*b[13] + a[ 9]*b[14] + a[13]*b[15],
			a[2]*b[12] + a[6]*b[13] + a[10]*b[14] + a[14]*b[15],
			a[3]*b[12] + a[7]*b[13] + a[11]*b[14] + a[15]*b[15]
		];
	}

	function transformVector(x, y, z) {
		var m = transformMatrix;
		return [
			x*m[0] + y*m[4] + z*m[8]  + m[12],
			x*m[1] + y*m[5] + z*m[9]  + m[13],
			x*m[2] + y*m[6] + z*m[10] + m[14]
		];
	}

	//*************************************************************************

	function render() {
		var
      item,
			a, b, c, d,
			poly;

    context.clearRect(0, 0, width, height);

		if (!data) {
      return;
    }

    var
      i, il,
      j, jl;
    for (i = 0, il = data.length; i < il; i++) {
			item = data[i];
			poly = [];
			for (j = 0, jl = item.poly.length; j < jl; j++) {
				poly.push(project(item.poly[j], 0));
      }
			context.fillStyle = data[i].style.fill;
			drawShape(poly);
    }

		context.fillStyle = WALL_COLOR;

    for (i = 0, il = data.length; i < il; i++) {
			item = data[i];
			for (j = 0, jl = item.poly.length-1; j < jl; j++) {
				a = project(item.poly[j],   0),
				b = project(item.poly[j+1], 0),
				d = project(item.poly[j+1], FLOOR_height),
				c = project(item.poly[j],   FLOOR_height)
				if ((a.x-c.x) * (b.y-c.y) > (b.x-c.x) * (b.y-c.y)) {
					drawShape([a, b, d, c]);
				}
      }
    }
  }

	function drawShape(points, stroke) {
		context.beginPath();
		context.moveTo(points[0].x, points[0].y);
		for (var i = 1, il = points.length; i < il; i++) {
			context.lineTo(points[i].x, points[i].y);
		}
		context.closePath();
		(stroke && context.stroke());
		context.fill();
	}

  function project(p, z) {
    var t = transformVector(p.x, p.y, z);
		return {
			x: t[0]*CAM_Z / (CAM_Z - t[2]) + halfWidth  <<0,
			y: t[1]*CAM_Z / (CAM_Z - t[2]) + halfHeight <<0
		}
  }

	//*****************************************************************************

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

	//*****************************************************************************

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

	//*****************************************************************************

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





 	function init (canvas) {
    context = canvas.getContext('2d');

    width  = win.innerWidth;
    height = win.innerHeight;
    halfWidth  = width / 2;
    halfHeight = height / 2;

		canvas.width  = width;
		canvas.height = height;

    transformMatrix = identityMatrix();

		context.fillStyle = WALL_COLOR;
	}

  return {
    init: init,

    render: render,

    scale: function (x, y, z) {
      transformMatrix = scaleMatrix(x, y, z);
    },

    translate: function (x, y, z) {
      transformMatrix = translateMatrix(x, y, z);
    },

    rotate: function (x, y, z) {
      transformMatrix = rotateMatrix(x, y, z);
    }
  };

}(this));