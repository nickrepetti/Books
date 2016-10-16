package com.nickrepetti.spittr.config;

import com.nickrepetti.spittr.config.root.JdbcConfig;
import com.nickrepetti.spittr.config.root.RootContextConfig;
import com.nickrepetti.spittr.config.servlet.ServletContextConfig;

import org.springframework.web.servlet.support
	.AbstractAnnotationConfigDispatcherServletInitializer;
	
public class WebAppConfig extends 
	AbstractAnnotationConfigDispatcherServletInitializer {
	
	@Override
	protected String[] getServletMappings() {
		return new String[] { "/" };
	}
	
	@Override
	protected Class<?>[] getRootConfigClasses() {
		return new Class<?>[] { RootContextConfig.class, JdbcConfig.class };
	}
	
	@Override
	protected Class<?>[] getServletConfigClasses() {
		return new Class<?>[] { ServletContextConfig.class };
	}
}
