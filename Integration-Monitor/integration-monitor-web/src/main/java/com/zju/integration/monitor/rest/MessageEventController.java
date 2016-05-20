/**
 * 
 */
package com.zju.integration.monitor.rest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.integration.monitor.mirthclient.MirthClient;
import com.integration.monitor.model.MirthConnectResult;
import com.mirth.connect.model.MessageObject;
import com.zju.integration.monitor.exception.MessageEventServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.MessageEvent;
import com.zju.integration.monitor.service.MessageEventService;

/**
 * @author Yuan.Ziyang
 *
 */
@RestController
@RequestMapping("/message/")
public class MessageEventController {

	@Autowired
	private MessageEventService messageService;

	@Autowired
	private MirthClient mirthClient;

	protected static final Logger logger = Logger.getLogger(MessageEventController.class);

	@RequestMapping(value = "/import", method = RequestMethod.POST, produces = { "application/xml;charset=UTF-8",
			"application/json;charset=UTF-8" }, consumes = { "application/xml;charset=UTF-8",
					"application/json;charset=UTF-8" })
	public @ResponseBody IntegrationResult importMessageEvent(@RequestBody MessageEvent messageEvent) {
		logger.debug(messageEvent.toString());
		IntegrationResult result = new IntegrationResult();
		try {
			result = messageService.saveMessageEvent(messageEvent);
		} catch (MessageEventServiceException e) {
			logger.error(e.getMessage());
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(e.getMessage().toString());
		}
		return result;
	}

	@RequestMapping(value = "/query", method = RequestMethod.POST, produces = {
			"application/json;charset=UTF-8" }, consumes = { "application/json;charset=UTF-8" })
	public @ResponseBody List<MessageEvent> queryMessageEvent(@RequestBody Map paramMap)
			throws MessageEventServiceException {
		logger.debug(paramMap.toString());
		List<MessageEvent> messageEventList = new ArrayList<>();
		messageEventList = messageService.getMessageByCondition(paramMap);
		return messageEventList;
	}

	@RequestMapping(value = "/process", method = RequestMethod.POST, produces = { "application/xml;charset=UTF-8",
			"application/json;charset=UTF-8" }, consumes = { "application/xml;charset=UTF-8",
					"application/json;charset=UTF-8" })
	public @ResponseBody MirthConnectResult processMessageEvent(@RequestBody Map paramMap) {
		logger.debug(paramMap.toString());
		MirthConnectResult result = new MirthConnectResult();
		if (paramMap.get("channelId") == null || paramMap.get("channelId").equals("")) {
			result.setResultCode(1);
			result.setResultDesc("channelId 不能为空！");
		} else if (paramMap.get("rawData") == null || paramMap.get("rawData").equals("")) {
			result.setResultCode(1);
			result.setResultDesc("rawData 不能为空！");
		} else {
			MessageObject messageObject = new MessageObject();
			messageObject.setChannelId((String) paramMap.get("channelId"));
			messageObject.setRawData((String) paramMap.get("rawData"));
			messageObject.setChannelMap(new HashMap<>());
			messageObject.setConnectorMap(new HashMap<>());
			messageObject.setContext(new HashMap<>());
			messageObject.setResponseMap(new HashMap<>());
			result = mirthClient.processMessage(messageObject);
		}
		return result;
	}
}
