package com.nickrepetti;

import javax.servlet.*;

public class MyServletContextListener implements ServletContextListener {
	public void contextInitialized(ServletContextEvent event) {
		ServletContext servletContext = event.getServletContext();
		
		String carMake = servletContext.getInitParameter("carMake");
		
		Car car = new Car(carMake);
		
		servletContext.setAttribute("car", car);
	}
	
	public void contextDestroyed(ServletContextEvent event) {
		
	}
}