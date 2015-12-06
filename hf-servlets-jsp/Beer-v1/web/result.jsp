<%@ page import="java.util.*" %>

<html>
	<body>
		<h1>Beer Recommendations</h1>
		<p>
			<%
				ArrayList<String> beerList = (ArrayList<String>) request.getAttribute("beers");
				Iterator iterator = beerList.iterator();
				
				while(iterator.hasNext()) {
					out.print("<br/><h4>Try: " + iterator.next() + "</h4>");
				}
			%>
		</p>
	</body>
</html>