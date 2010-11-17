<html>
<title>Team Backrow</title>

<text id="CircleX">X</text>
<text id="CircleY">X</text>
<text id="MouseX">X</text>
<text id="MouseY">X</text>
<text id="Distance">X</text>

<div>
    <canvas id="canvas" width="100" height="100">
        This text is displayed if your browser
        does not support HTML5 Canvas.
    </canvas>
</div>
<!-- Start of player controls
You can remove any of the controls if you do not
want to have them.  You can also remove information
window DIV's at the bottom such as songname or songtime -->
<div style="border: 1px solid black; width: 340px;
padding: 5px;">
<button onclick="play_song();" id="play_btn">Play</button>
<button onclick="pause_song();" id="pause_btn">Pause</button>
<button onclick="stop_song();" id="stop_btn">Stop</button>
<button onclick="fade();" id="fade_btn">Fade Out</button>
<span id="fade_display">: Off</span>
<br>
<button onmousedown="volume(1);" onmouseout="volume(3);" onmouseup="volume(3)" id="vol_left"><</button>
Volume: <span id="vol_display"> </span>
<button onmousedown="volume(2);" onmouseout="volume(3);" onmouseup="volume(3)" id="vol_right">></button>
<button onclick="next_song(1);" id="next_btn">Prev Song</button>
<button onclick="next_song(2);" id="next_btn">Next Song</button>
<br>
<button onclick="fast_reverse();">Rewind</button>
<button onclick="fast_forward();">Fast Forward</button>
<button onclick="shuffle();">Shuffle</button>
<!-- Comment out the following DIV if you don't want to
display the song filename -->
<div id="songname"><br></div>
<div id="songtime" style="float: left;">Time:</div>
<div id="speed" style="float: right;">1X</div>
<div id="message" style="border: 1px solid black; height: 50px;
width: 330px; padding: 5px; margin: 1px; clear: both"></div>
</div>
<!-- Playlist -->
<textarea id="songlist" style="visibility:hidden">
your_touch.mp3
</textarea>

<script type="text/javascript">

    var viewPortWidth;
    var viewPortHeight;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth,
                viewPortHeight = window.innerHeight
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

    else if (typeof document.documentElement != 'undefined'
            && typeof document.documentElement.clientWidth !=
            'undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth,
                viewPortHeight = document.documentElement.clientHeight
    }

    // older versions of IE

    else {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
                viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }

    var canvas = document.getElementById("canvas");
    var ctx;
    var x = 2;
    var y = 4;
    var distance = 0;
    var dx = 2;
    var dy = 4;
    var WIDTH = viewPortWidth;
    var HEIGHT = viewPortHeight;
    var mouseX = 0;
    var mouseY = 0;
    var CircleXText
    var CircleYText;
   var MouseXText ;
    var MouseYText;
    var DistanceText;
    var red = 50; var green=100; var blue= 150;

    function circle(x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2, true);
        ctx.fill();
    }

    function rect(x, y, w, h) {
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.closePath();
        ctx.fill();
    }


    function clear() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
    }

    function init() {
        ctx = canvas.getContext("2d");
        canvas.setAttribute("width", viewPortWidth.toString());
        canvas.setAttribute("height", viewPortHeight.toString());
        CircleXText = document.getElementById("CircleX");
        CircleYText = document.getElementById("CircleY");
        MouseXText = document.getElementById("MouseX");
        MouseYText = document.getElementById("MouseY");
        DistanceText = document.getElementById("Distance");
        document.onmousemove = getMouseXY;
        return setInterval(draw, 10);
    }

    function getMouseXY(e) {

            if (!e) var e = window.event;
            if (e.pageX || e.pageY) 	{
                mouseX = e.pageX;
                mouseY = e.pageY;
            }
            else if (e.clientX || e.clientY) 	{
                mouseX = e.clientX + document.body.scrollLeft
                    + document.documentElement.scrollLeft;
                mouseY = e.clientY + document.body.scrollTop
                    + document.documentElement.scrollTop;
            }
            // posx and posy contain the mouse position relative to the document
            // Do something with this information
   
    }
    function draw() {
        clear();
        //ctx.fillStyle = "#FAF7F8";
        //rect(0,0,WIDTH,HEIGHT);

        CircleXText.firstChild.nodeValue = "Circle X: " + x.toString();
        CircleYText.firstChild.nodeValue = "Circle Y : " + y.toString();
        MouseXText.firstChild.nodeValue = "Mouse X: " + mouseX.toString();
        MouseYText.firstChild.nodeValue = "Mouse Y: " + mouseY.toString();
         DistanceText.firstChild.nodeValue = "Distance: " + distance.toString();
        red += 1;
        green += 1;
        blue += 1;
        if(red >200)
        {
            red = 0;
        }
        if(blue > 200)
        {
            blue = 0;
        }
        if(green > 200)
        {
            green = 0;
        }
        ctx.fillStyle="rgb(" + red.toString() + "," + green.toString() + "," + blue.toString() +")";
        

        circle(x, y, 10);
        circle(mouseX,mouseY,20)

        distance =  Math.sqrt(Math.pow((mouseX - x),2)  + Math.pow((mouseY - y),2) );
        if (x + dx > WIDTH || x + dx < 0 || distance < 30)
            dx = -dx;
        if (y + dy > HEIGHT || y + dy < 0)
            dy = -dy;

        x += dx;
        y += dy;
    }

    init();
</script>
<script type="text/javascript" language="JavaScript" src="WEB-INF/sound.js"></script>
</html>