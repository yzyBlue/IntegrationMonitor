package com.zju.integration.monitor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {
	@RequestMapping("/")
	public String getHome() {
		return "home";
	}
	@RequestMapping("/index")
	public String getIndex() {
		return "index";
	}
	@RequestMapping("/login")
	public String getLogin() {
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
		return "message";
	}
	@RequestMapping("/adt")
	public String getAdtMessage() {
		return "adt";
	}
}
