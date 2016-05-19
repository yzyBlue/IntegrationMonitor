/**
 * 
 */
package com.zju.integration.monitor.service;

import java.util.List;
import java.util.Map;

import com.zju.integration.monitor.exception.MessageEventServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.MessageEvent;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description Message Event service interface
 */
public interface MessageEventService {

	public IntegrationResult saveMessageEvent(MessageEvent messageEvent) throws MessageEventServiceException;

	public List<MessageEvent> getMessageByCondition(Map paramMap) throws MessageEventServiceException;

}
