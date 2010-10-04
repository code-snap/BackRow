<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>

<html>
    <head>
        <title>Jittr Authentication Setup</title>
    </head>
    <body>
        <div id="header">
            <h1>Jittr</h1>
        </div>
        <div id="content">

            <p>To use Jittr, you must authorize the application access your Twitter account. It's Easy as 1, 2, 3:</p>

            <ul>
                <li>Click <a href="<c:out value="${authUrl}"/>" target="_blank">here</a> to log in to Twitter to generate a PIN.</li>
                <li>Return to this page and enter the PIN below.</li>
                <li>Click Go.</li>
            </ul>

            <form action="<c:url value="/auth"/>" method="post">
                <div class="row">
                    <label for="pin">PIN:</label>
                    <input id="pin" type="text" name="pin"/>
                </div>
                <div class="row">
                    <button type="submit">Go</button>
                </div>
            </form>
            
        </div>
        <div id="footer">
            CSCI 3308 - Software Engineering Methods and Tools
        </div>
    </body>
</html>
