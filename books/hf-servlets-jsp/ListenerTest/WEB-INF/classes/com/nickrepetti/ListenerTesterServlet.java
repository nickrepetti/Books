package com.nickrepetti;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class ListenerTesterServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		response.setContentType("text/html");
		
		PrintWriter out = response.getWriter();
		
		out.println("Test context attributes set by listener<br/><br/>");
		
		ServletContext servletContext = getServletContext();
		
		Car car = (Car) servletContext.getAttribute("car");
		
		out.println("Car make: " + car.getMake());
	}
}