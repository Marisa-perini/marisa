(function () {
  const VERT = `
    attribute vec3 position;
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `;

  const FRAG = `
    precision highp float;
    uniform vec2  resolution;
    uniform float time;
    uniform float xScale;
    uniform float yScale;
    uniform float distortion;

    void main() {
      vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

      float d  = length(p) * distortion;
      float rx = p.x * (1.0 + d);
      float gx = p.x;
      float bx = p.x * (1.0 - d);

      float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
      float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
      float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);

      // tinta com o verde primário do site #5FA573
      vec3 tint = vec3(0.373, 0.647, 0.451);
      gl_FragColor = vec4(r * tint.r, g * tint.g, b * tint.b, 1.0);
    }
  `;

  function compile(gl, type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error("Shader error:", gl.getShaderInfoLog(s));
    }
    return s;
  }

  function init() {
    const canvas = document.getElementById("hero-wave-canvas");
    if (!canvas) return;

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    const vs  = compile(gl, gl.VERTEX_SHADER,   VERT);
    const fs  = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    const prg = gl.createProgram();
    gl.attachShader(prg, vs);
    gl.attachShader(prg, fs);
    gl.linkProgram(prg);
    if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
      console.error("Link error:", gl.getProgramInfoLog(prg));
      return;
    }
    gl.useProgram(prg);

    // quad cobrindo o clip space inteiro
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 0,
       1, -1, 0,
      -1,  1, 0,
       1, -1, 0,
      -1,  1, 0,
       1,  1, 0,
    ]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(prg, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);

    const uRes        = gl.getUniformLocation(prg, "resolution");
    const uTime       = gl.getUniformLocation(prg, "time");
    const uXScale     = gl.getUniformLocation(prg, "xScale");
    const uYScale     = gl.getUniformLocation(prg, "yScale");
    const uDistortion = gl.getUniformLocation(prg, "distortion");

    gl.uniform1f(uXScale,     1.0);
    gl.uniform1f(uYScale,     0.5);
    gl.uniform1f(uDistortion, 0.05);

    function resize() {
      const dpr = Math.max(1, window.devicePixelRatio);
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    let raf;

    function loop() {
      t += 0.01;
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    // pausa fora da viewport
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          if (!raf) raf = requestAnimationFrame(loop);
        } else {
          cancelAnimationFrame(raf);
          raf = null;
        }
      });
    }).observe(canvas);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
