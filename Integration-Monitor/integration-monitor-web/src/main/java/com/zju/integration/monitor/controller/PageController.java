package com.zju.integration.monitor.controller;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {

	protected final Logger logger = Logger.getLogger(this.getClass());

	@RequestMapping("/")
	public String getLogin() {
		return "login";
	}

	@RequestMapping("/index")
	public String getIndex() {
		return "index";
	}

	@RequestMapping("/login")
	public String getLogin2() {
		return "login";
	}

	@RequestMapping("/server")
	public String getServer() {
		return "server";
	}

	@RequestMapping("/channel")
	public String getChannel() {
		return "channel";
	}

	@RequestMapping("/service")
	public String getService() {
		return "service";
	}

	@RequestMapping("/transaction")
	public String getTransaction() {
		return "transaction";
	}

	@RequestMapping("/topo")
	public String getTopo() {
		return "topo";
	}

	@RequestMapping("/message")
	public String getMessage() {
		return "messageview";
	}

	@RequestMapping("/adt")
	public String getAdtMessage() {
		return "adt";
	}

	@RequestMapping("/errorinfo")
	public String getErrorInfo() {
		return "errorinfo";
	}

	@RequestMapping("/statistics")
	public String getStatistics() {
		return "statistics";
	}

	@RequestMapping("/alert")
	public String getAlert() {
		return "alert";
	}

	@RequestMapping("/test")
	public String getTest() {
		return "test";
	}

	@RequestMapping(value = "/registration")
	public String registration() {
		return "registration";
	}
}
