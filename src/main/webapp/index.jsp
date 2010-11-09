<title>Team Backrow</title>
<h1><font color="#FFFFFF">Have fun and look at colors and stuff</font></h1>
<P><font color="#FFFFFF">This is a website where you can have fun watching colors and listening to music.</font></P>
<body background="http://www.szsza.info/wp-content/uploads/2010/03/abstract-vortext-swirly-flower-light-lines-photoshop-effect.jpg"/>
<div>
        <canvas id="canvas" width="400" height="300">
         This text is displayed if your browser
         does not support HTML5 Canvas.
        </canvas>
    </div>


    <script type="text/javascript">
    var canvas;
    var ctx;
    var x = 400;
    var y = 300;
    var dx = 2;
    var dy = 4;
    var WIDTH = 400;
    var HEIGHT = 300;

    function circle(x,y,r) {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI*2, true);
      ctx.fill();
    }

    function rect(x,y,w,h) {
      ctx.beginPath();
      ctx.rect(x,y,w,h);
      ctx.closePath();
      ctx.fill();
    }


    function clear() {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
    }

    function init() {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      return setInterval(draw, 10);
    }


    function draw() {
      clear();
      //ctx.fillStyle = "#FAF7F8";
      //rect(0,0,WIDTH,HEIGHT);
      ctx.fillStyle = "#ff00ff";
      circle(x, y, 10);

      if (x + dx > WIDTH || x + dx < 0)
        dx = -dx;
      if (y + dy > HEIGHT || y + dy < 0)
        dy = -dy;

      x += dx;
      y += dy;
    }

    init();
    </script>

