package com.nickrepetti.web;

import com.nickrepetti.model.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;

public class BeerSelect extends HttpServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		String selection = request.getParameter("color");
		
		BeerExpert beerExpert = new BeerExpert();
		
		ArrayList<String> beerList = beerExpert.getBrands(selection);
		
		request.setAttribute("beers", beerList);
		
		RequestDispatcher view = request.getRequestDispatcher("result.jsp");
		
		view.forward(request, response);
	}
}