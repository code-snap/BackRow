<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="layout" tagdir="/WEB-INF/tags/layout" %>

<layout:default>
    <jsp:attribute name="content">
        <h1>Friends</h1>
        <c:forEach var="friend" items="${friends}">
                <c:set var="twitterURL" value="http://www.twitter.com/${friend.screenName}"/>
                <a href="<c:out value="${twitterURL}"/>"><img src="<c:out value="${friend.profileImageURL}"/>" height="48" width="48" alt="<c:out value="${friend.screenName}"/>"/></a>
        </c:forEach>
    </jsp:attribute>
</layout:default>
