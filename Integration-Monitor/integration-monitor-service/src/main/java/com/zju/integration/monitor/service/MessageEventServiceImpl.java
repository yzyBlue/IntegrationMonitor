/**
 * 
 */
package com.zju.integration.monitor.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.zju.integration.monitor.dao.MessageEventDao;
import com.zju.integration.monitor.exception.MessageEventServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.MessageEvent;
import com.zju.integration.monitor.util.DataValidationUtil;

/**
 * @author Yuan.Ziyang
 *
 */
@Service("messageEventService")
@Transactional(rollbackFor = MessageEventServiceException.class)
public class MessageEventServiceImpl implements MessageEventService {

	@Autowired(required = false)
	private MessageEventDao messageEventDao;

	protected final Logger logger = Logger.getLogger(this.getClass());

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.zju.integration.monitor.service.MessageEventService#saveMessageEvent(
	 * com.zju.integration.monitor.model.MessageEvent)
	 */
	@Override
	public IntegrationResult saveMessageEvent(MessageEvent messageEvent) throws MessageEventServiceException {
		IntegrationResult result = new IntegrationResult();
		IntegrationResult dataValidate = DataValidationUtil.validate(messageEvent);
		if (dataValidate.getResultCode() == 0) {
			logger.info("数据验证通过");
			int insert = messageEventDao.insert(messageEvent);
			if (insert > 0) {
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc(IntegrationResult.SUCCESSDESC);
			} else {
				result.setResultCode(IntegrationResult.INTERNALERROR);
				result.setResultDesc("数据验证成功，写入数据失败");
			}
		} else {
			result.setResultCode(dataValidate.getResultCode());
			result.setResultDesc(dataValidate.getResultDesc());
		}
		return result;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.zju.integration.monitor.service.MessageEventService#
	 * getMessageByCondition(java.util.Map)
	 */
	@Override
	public List<MessageEvent> getMessageByCondition(Map paramMap) throws MessageEventServiceException {
		List<MessageEvent> messageList = new ArrayList<MessageEvent>();
		messageList = messageEventDao.getMessageByCondition(paramMap);
		return messageList;
	}

}
