package com.zju.integration.monitor.rest;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.zju.integration.monitor.model.MessageStatistic;
import com.zju.integration.monitor.service.MessageStatisticService;

/**
 * @author Yuan.Ziyang
 *
 */
@RestController
@RequestMapping("/message-statistic/")
public class MessageStatisticController {

	@Autowired
	MessageStatisticService messageStatisticService;

	protected final Logger logger = Logger.getLogger(this.getClass());

	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = { "application/json;charset=UTF-8" })
	public @ResponseBody MessageStatistic getAllMessageStatistic() {
		return messageStatisticService.getMessageStatistic();
	}

	@RequestMapping(value = "/statistic", method = RequestMethod.GET, produces = { "application/json;charset=UTF-8" })
	public @ResponseBody MessageStatistic getStatisticByDate(@RequestParam("date") String date) {
		return messageStatisticService.selectStatisticByDate(date);
	}

	@RequestMapping(value = "/list", method = RequestMethod.POST, produces = {
			"application/json;charset=UTF-8" }, consumes = { "application/json;charset=UTF-8" })
	public @ResponseBody List<MessageStatistic> getStatisticList(@RequestBody Map paramMap) {
		return messageStatisticService.getStatisticList(paramMap);
	}
}
