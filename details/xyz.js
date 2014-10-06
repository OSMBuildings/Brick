
var XYZ = (function() {

  var
    context,
    WIDTH = 0, HEIGHT = 0,
    CENTER_X = 0, CENTER_Y = 0,
		transformMatrix;

	var
    CAM_X = 0, CAM_Y = 0,
    CAM_Z = 450,
    RAD = Math.PI/180;

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

		var transform = getRotationMatrix(x*RAD, y*RAD, z*RAD);
		return multiplyMatrix(transformMatrix, transform);
	}

	function getRotationMatrix(x, y, z) {
		var
			res = identityMatrix(),
			rSin, rCos, transform;

		if (z) {
			rCos = Math.cos(-z);
			rSin = Math.sin(-z);
			transform = [
				rCos, -rSin, 0, 0,
				rSin,  rCos, 0, 0,
				   0,     0, 1, 0,
				   0,     0, 0, 1
			];
			res = multiplyMatrix(res, transform);
		}

		if (y) {
			rCos = Math.cos(-y);
			rSin = Math.sin(-y);
			transform = [
				 rCos, 0, rSin, 0,
					0, 1,    0, 0,
				-rSin, 0, rCos, 0,
					0, 0,    0, 1
			];
			res = multiplyMatrix(res, transform);
		}

		if (x) {
			rCos = Math.cos(-x);
			rSin = Math.sin(-x);
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



	//***************************************************************************

	function render() {
    requestAnimFrame(function() {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      Shadows.render();
      Buildings.render();
      Hitareas.render();
    });
  }

  function createContext(container) {
    var canvas = doc.createElement('CANVAS');
    canvas.style.webkitTransform = 'translate3d(0,0,0)'; // turn on hw acceleration
    canvas.style.imageRendering  = 'optimizeSpeed';
    canvas.style.position = 'absolute';
    canvas.style.left = 0;
    canvas.style.top  = 0;

    var context = canvas.getContext('2d');
    context.lineCap   = 'round';
    context.lineJoin  = 'round';
    context.lineWidth = 1;

    context.mozImageSmoothingEnabled    = false;
    context.webkitImageSmoothingEnabled = false;

    if (container) {
      container.appendChild(canvas);
    }

    return context;
  }

	//***************************************************************************

 	function XYZ(canvas) {
    context = canvas.getContext('2d');

    WIDTH  = canvas.width;
    HEIGHT = canvas.height;

    CENTER_X = WIDTH /2;
    CENTER_Y = HEIGHT/2;

    CAM_X = CENTER_X;
    CAM_Y = height;

    transformMatrix = identityMatrix();

    var container = document.createElement('DIV');
    container.style.pointerEvents = 'none';

    Shadows.context   = createContext(container);
    Buildings.context = Shadows.context;
    HitAreas.context  = createContext();
	}

  var proto = XYZ.prototype;

  proto.render = render,

  proto.scale = function (x, y, z) {
    transformMatrix = scaleMatrix(x, y, z);
  };

  proto.translate = function (x, y, z) {
    transformMatrix = translateMatrix(x, y, z);
  };

  proto.rotate = function (x, y, z) {
    transformMatrix = rotateMatrix(x, y, z);
  };

  return proto;

}());




function renderX() {
  var
    round = Math.round,
    i, il,
    v = mesh.vertices,
    f = mesh.faces,
    t = mesh.tilts,
    offX = pos.x-tl.x,
    offY = pos.y-tl.y,
    vertices = [],
    A, B, C,
    isRoof;

  context.fillStyle = "rgb(250,200,0)";

  for (i = 0, il = v.length-2; i < il; i+=3) {
    vertices.push(project(v[i], v[i+1], v[i+2]));
  }

  for (i = 0, il = f.length-2; i < il; i+=3) {
    A = vertices[ f[i  ] ];
    B = vertices[ f[i+1] ];
    C = vertices[ f[i+2] ];

    if ((B[0]-A[0])*(C[1]-A[1]) > (C[0]-A[0])*(B[1]-A[1])) {
      //isRoof = t[ f[i] ]*1;
      isRoof = t[i/3]*1;
      context.fillStyle = isRoof ? "rgba(230,210,220,0.75)" : "rgba(150,180,190,0.75)";
      context.beginPath();
      context.moveTo(A[0]+offX, -A[1]+offY);
      context.lineTo(B[0]+offX, -B[1]+offY);
      context.lineTo(C[0]+offX, -C[1]+offY);
      context.closePath();
      //isRoof && context.stroke();
      context.fill();

      if (!isRoof) {
        var az = round(v[ f[i  ]*3+2 ]);
        var bz = round(v[ f[i+1]*3+2 ]);
        var cz = round(v[ f[i+2]*3+2 ]);
        if (az === bz) {
          context.beginPath();
          context.moveTo(A[0]+offX, -A[1]+offY);
          context.lineTo(B[0]+offX, -B[1]+offY);
          context.stroke();
        } else if (bz === cz) {
          context.beginPath();
          context.moveTo(B[0]+offX, -B[1]+offY);
          context.lineTo(C[0]+offX, -C[1]+offY);
          context.stroke();
        } else if (cz === az) {
          context.beginPath();
          context.moveTo(C[0]+offX, -C[1]+offY);
          context.lineTo(A[0]+offX, -A[1]+offY);
          context.stroke();
        }

        var ax = round(v[ f[i  ]*3   ]);
        var ay = round(v[ f[i  ]*3+1 ]);
        var bx = round(v[ f[i+1]*3   ]);
        var by = round(v[ f[i+1]*3+1 ]);
        var cx = round(v[ f[i+2]*3   ]);
        var cy = round(v[ f[i+2]*3+1 ]);

        if (ax === bx && ay === by) {
          context.beginPath();
          context.moveTo(A[0]+offX, -A[1]+offY);
          context.lineTo(B[0]+offX, -B[1]+offY);
          context.stroke();
        } else if (bx === cx && by === cy) {
          context.beginPath();
          context.moveTo(B[0]+offX, -B[1]+offY);
          context.lineTo(C[0]+offX, -C[1]+offY);
          context.stroke();
        } else if (cx === ax && cy === ay) {
          context.beginPath();
          context.moveTo(C[0]+offX, -C[1]+offY);
          context.lineTo(A[0]+offX, -A[1]+offY);
          context.stroke();
        }
      }
    }
  }
}

















var animTimer;

function fadeIn() {
  if (animTimer) {
    return;
  }

  animTimer = setInterval(function() {
    var dataItems = Data.items,
      isNeeded = false;

    for (var i = 0, il = dataItems.length; i < il; i++) {
      if (dataItems[i].scale < 1) {
        dataItems[i].scale += 0.5*0.2; // amount*easing
        if (dataItems[i].scale > 1) {
          dataItems[i].scale = 1;
        }
        isNeeded = true;
      }
    }

    Layers.render();

    if (!isNeeded) {
      clearInterval(animTimer);
      animTimer = null;
    }
  }, 33);
}


