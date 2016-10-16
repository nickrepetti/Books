package com.nickrepetti.spittr.config.servlet;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import org.springframework.web.servlet.config.annotation
	.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation
	.WebMvcConfigurerAdapter;

@Configuration
@EnableWebMvc
@ComponentScan("com.nickrepetti.spittr.controller")
public class ServletContextConfig extends WebMvcConfigurerAdapter {
	
	// Required to map index.html as starting point
	@Override
	public void configureDefaultServletHandling(
		DefaultServletHandlerConfigurer configurer) {
		
		configurer.enable();
	}
}
