<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>


<html>
<head>
   <title>Team Backrow</title>
    
    <script type="text/javascript" src="<c:url value="/js/visual.js" />"></script>
</head>
<body>

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
<div>
<button onclick="play_song();" id="play_btn">Play</button>
<button onclick="pause_song();" id="pause_btn">Pause</button>
<button onclick="stop_song();" id="stop_btn">Stop</button>
<button onclick="fade();" id="fade_btn">Fade Out</button>
<span id="fade_display">: Off</span>
<br>
<button onmousedown="volume(1);" onmouseout="volume(3);" onmouseup="volume(3)" id="vol_left"><</button>
Volume: <span id="vol_display"> </span>
<button onmousedown="volume(2);" onmouseout="volume(3);" onmouseup="volume(3)" id="vol_right">></button>
<button onclick="next_song(1);" id="prev_btn">Prev Song</button>
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
<div id="message" style="border: 1px solid black; height: 50px;width: 330px; padding: 5px; margin: 1px; clear: both"></div>
</div>
<!-- Playlist -->
<textarea id="songlist" style="visibility:hidden">
your_touch.ogg
</textarea>
</body>

</html>