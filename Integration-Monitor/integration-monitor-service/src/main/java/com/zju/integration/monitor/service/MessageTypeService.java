/**
 * 
 */
package com.zju.integration.monitor.service;

import java.util.List;
import java.util.Map;

import com.zju.integration.monitor.exception.MessageTypeServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.MessageType;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description MessageType service interface
 */
public interface MessageTypeService {

	public IntegrationResult saveMessageType(MessageType messageType) throws MessageTypeServiceException;

	public IntegrationResult updateMessageType(MessageType messageType) throws MessageTypeServiceException;

	public MessageType selectMessageType(MessageType messageType);

	public IntegrationResult deleteMessageType(MessageType messageType) throws MessageTypeServiceException;

	public List<MessageType> findByCondition(Map paramMap);

	public MessageType selectMsgById(String typeId);
}
