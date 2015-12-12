<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
	<head>
		<title>Spittr</title>
		<link rel="stylesheet" type="text/css" href="<c:url value='/resources/style.css' />" >
	</head>
	<body>
		<c:forEach items="${spittleList}" var="spittle" >
			<h4>
				ID: <c:out value="${spittle.id}" />
				<br />
				Message: <c:out value="${spittle.message}" />
				<br />
				Time: <c:out value="${spittle.time}" />
				<br />
			</h4>
		</c:forEach>
	</body>
</html>
