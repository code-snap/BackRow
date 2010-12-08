<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>


<html>
<head>
   <title>Team Backrow</title>
    <script type="text/javascript" src="<c:url value="/js/mootools-1.2.4-core-yc.js"/>"></script>
    <script type="text/javascript" src="<c:url value="/js/DGlib_YUIcomp.js" />"></script>
     <script type="text/javascript" src="<c:url value="/js/visual.js" />"></script>
</head>
<body>

<div>
    <canvas id="canvas" width="100" height="100">
        This text is displayed if your browser
        does not support HTML5 Canvas.
    </canvas>
</div>


<div style="text-align: center; margin-left: auto; visibility:visible; margin-right: auto; width:450px;"> <object width="435" height="270">
    <param name="movie" value="http://www.musiclist.us/mc/mp3player_new.swf"></param> <param name="allowscriptaccess" value="never"></param>
    <param name="wmode" value="transparent"></param> <param name="flashvars" value="config=http%3A%2F%2Fwww.indimusic.us%2Fext%2Fpc%2Fconfig_regular.xml&amp;mywidth=435&amp;myheight=270&amp;playlist_url=http%3A%2F%2Fwww.musiclist.us%2Fpl.php%3Fplaylist%3D82592431%26t%3D1291778823&amp;wid=os"></param>
    <embed style="width:435px; visibility:visible; height:270px;" allowScriptAccess="never" src="http://www.musiclist.us/mc/mp3player_new.swf" flashvars="config=http%3A%2F%2Fwww.indimusic.us%2Fext%2Fpc%2Fconfig_regular.xml&amp;mywidth=435&amp;myheight=270&amp;playlist_url=http%3A%2F%2Fwww.musiclist.us%2Fpl.php%3Fplaylist%3D82592431%26t%3D1291778823&amp;wid=os" width="435" height="270" name="mp3player" wmode="transparent" type="application/x-shockwave-flash" border="0"/> </object> <br/>
    <a href="http://www.musiclist.us"><img src="http://www.musiclist.us/mc/images/create_gray.jpg" border="0" alt="Get a playlist!"/></a>
    <a href="http://www.musiclist.us/playlist/21143662347/standalone" target="_blank"><img src="http://www.musiclist.us/mc/images/launch_gray.jpg" border="0" alt="Standalone player"/></a>
    <a href="http://www.musiclist.us/playlist/21143662347/download"><img src="http://www.musiclist.us/mc/images/get_gray.jpg" border="0" alt="Get Ringtones"/></a>
</div>

</body>

</html>