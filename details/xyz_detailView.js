function render() {
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
        if (az == bz) {
          context.beginPath();
          context.moveTo(A[0]+offX, -A[1]+offY);
          context.lineTo(B[0]+offX, -B[1]+offY);
          context.stroke();
        } else if (bz == cz) {
          context.beginPath();
          context.moveTo(B[0]+offX, -B[1]+offY);
          context.lineTo(C[0]+offX, -C[1]+offY);
          context.stroke();
        } else if (cz == az) {
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

        if (ax == bx && ay == by) {
          context.beginPath();
          context.moveTo(A[0]+offX, -A[1]+offY);
          context.lineTo(B[0]+offX, -B[1]+offY);
          context.stroke();
        } else if (bx == cx && by == cy) {
          context.beginPath();
          context.moveTo(B[0]+offX, -B[1]+offY);
          context.lineTo(C[0]+offX, -C[1]+offY);
          context.stroke();
        } else if (cx == ax && cy == ay) {
          context.beginPath();
          context.moveTo(C[0]+offX, -C[1]+offY);
          context.lineTo(A[0]+offX, -A[1]+offY);
          context.stroke();
        }
      }
    }
  }
}
