/**
 * 
 */
package com.zju.integration.monitor.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.zju.integration.monitor.exception.MessageTypeServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.MessageType;
import com.zju.integration.monitor.service.MessageTypeService;

/**
 * @author Yuan.Ziyang
 *
 */
@RestController
@RequestMapping("/message-type/")
public class MessageTypeController {

	@Autowired
	private MessageTypeService messageTypeService;

	protected final Logger logger = Logger.getLogger(this.getClass());

	@RequestMapping(value = "/manage", method = RequestMethod.POST, produces = {
			"application/json;charset=UTF-8" }, consumes = { "application/json;charset=UTF-8" })
	public @ResponseBody IntegrationResult addMessageType(@RequestBody MessageType messageType) {
		IntegrationResult result = new IntegrationResult();
		try {
			result = messageTypeService.saveMessageType(messageType);
		} catch (MessageTypeServiceException e) {
			logger.error(e.toString());
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(e.getMessage().toString());
		}
		return result;
	}

	@RequestMapping(value = "/manage", method = RequestMethod.PUT, produces = {
			"application/json;charset=UTF-8" }, consumes = { "application/json;charset=UTF-8" })
	public @ResponseBody IntegrationResult updateMessageType(@RequestBody MessageType messageType) {
		IntegrationResult result = new IntegrationResult();
		try {
			result = messageTypeService.updateMessageType(messageType);
		} catch (MessageTypeServiceException e) {
			logger.error(e.toString());
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(e.getMessage().toString());
		}
		return result;
	}

	@RequestMapping(value = "/manage", method = RequestMethod.DELETE, produces = {
			"application/json;charset=UTF-8" }, consumes = { "application/json;charset=UTF-8" })
	public @ResponseBody IntegrationResult deleteMessageType(@RequestBody MessageType messageType) {
		IntegrationResult result = new IntegrationResult();
		try {
			result = messageTypeService.deleteMessageType(messageType);
		} catch (MessageTypeServiceException e) {
			logger.error(e.toString());
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(e.getMessage().toString());
		}
		return result;
	}

	@RequestMapping(value = "/list", method = RequestMethod.POST, produces = {
			"application/json;charset=UTF-8" }, consumes = { "application/json;charset=UTF-8" })
	public @ResponseBody List<MessageType> findMsgTypeByCondition(Map paramMap) {
		List<MessageType> messageTypeList = new ArrayList<MessageType>();
		messageTypeList = messageTypeService.findByCondition(paramMap);
		return messageTypeList;
	}

	@RequestMapping(value = "/{typeid}", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	public @ResponseBody MessageType findMessageType(@PathVariable("typeid") String typeid) {
		MessageType messageType = messageTypeService.selectMsgById(typeid);
		return messageType;
	}
}
