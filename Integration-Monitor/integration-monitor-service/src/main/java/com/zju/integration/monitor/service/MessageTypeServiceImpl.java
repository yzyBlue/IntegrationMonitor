/**
 * 
 */
package com.zju.integration.monitor.service;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.zju.integration.monitor.dao.MessageTypeDao;
import com.zju.integration.monitor.exception.MessageTypeServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.MessageType;
import com.zju.integration.monitor.util.DataValidationUtil;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description MessageType Service Implements
 */
@Service("messageTypeService")
@Transactional(rollbackFor = MessageTypeServiceException.class,value = "transactionManager")
public class MessageTypeServiceImpl implements MessageTypeService {

	@Autowired(required = false)
	private MessageTypeDao messageTypeDao;

	protected final Logger logger = Logger.getLogger(this.getClass());

	@Override
	public IntegrationResult saveMessageType(MessageType messageType) throws MessageTypeServiceException {
		IntegrationResult result = new IntegrationResult();
		IntegrationResult validate = DataValidationUtil.validate(messageType);
		if (validate.getResultCode() == 0) {
			logger.info("数据验证通过");
			logger.info("查询是否已存在该消息类型：" + messageType.toString());
			MessageType messageTypeFind = messageTypeDao.findMessageType(messageType);
			if (messageTypeFind == null) {
				logger.info("没有相同记录");
				Integer insert = messageTypeDao.insert(messageType);
				logger.debug("写入消息类型记录" + insert + "条");
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc("写入消息类型记录" + insert + "条");
			} else {
				logger.info("已有相同记录");
				messageType.setTypeId(messageTypeFind.getTypeId());
				Integer update = messageTypeDao.update(messageType);
				logger.debug("更新消息类型记录" + update + "条");
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc("更新消息类型记录" + update + "条");
			}
		} else {
			logger.info("数据验证未通过 ：" + validate.toString());
			result.setResultCode(validate.getResultCode());
			result.setResultDesc(validate.getResultDesc());
		}
		return result;
	}

	@Override
	public IntegrationResult updateMessageType(MessageType messageType) throws MessageTypeServiceException {
		IntegrationResult result = new IntegrationResult();
		IntegrationResult validate = DataValidationUtil.validate(messageType);
		if (validate.getResultCode() == 0) {
			logger.info("数据验证通过");
			logger.info("查询是否已存在该消息类型：" + messageType.toString());
			MessageType messageTypeFind = messageTypeDao.findMessageType(messageType);
			if (messageTypeFind == null) {
				logger.info("没有相同记录");
				Integer insert = messageTypeDao.insert(messageType);
				logger.debug("写入消息类型记录" + insert + "条");
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc("写入消息类型记录" + insert + "条");
			} else {
				logger.info("已有相同记录");
				messageType.setTypeId(messageTypeFind.getTypeId());
				Integer update = messageTypeDao.update(messageType);
				logger.debug("更新消息类型记录" + update + "条");
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc("更新消息类型记录" + update + "条");
			}
		} else {
			logger.info("数据验证未通过 ：" + validate.toString());
			result.setResultCode(validate.getResultCode());
			result.setResultDesc(validate.getResultDesc());
		}
		return result;
	}

	@Override
	public MessageType selectMessageType(MessageType messageType) {
		IntegrationResult validate = DataValidationUtil.validate(messageType);
		if (validate.getResultCode() == 0) {
			return new MessageType();
		} else {
			MessageType messageTypeFind = messageTypeDao.findMessageType(messageType);
			return messageTypeFind;
		}

	}

	@Override
	public IntegrationResult deleteMessageType(MessageType messageType) throws MessageTypeServiceException {
		IntegrationResult result = new IntegrationResult();
		MessageType messageTypeFind = messageTypeDao.findMessageType(messageType);
		if (messageTypeFind == null) {
			result.setResultCode(1);
			result.setResultDesc("该类型消息不存在");
		} else {
			Integer delete = messageTypeDao.delete(messageTypeFind);
			logger.debug("删消息类型记录" + delete + "条");
			result.setResultCode(IntegrationResult.SUCCESSCODE);
			result.setResultDesc("删除消息类型记录" + delete + "条");
		}
		return result;
	}

	@Override
	public List<MessageType> findByCondition(Map paramMap) {
		return (List<MessageType>) messageTypeDao.findByCondition(paramMap);
	}

	@Override
	public MessageType selectMsgById(String typeId) {
		return messageTypeDao.selectMsgTypeById(Integer.valueOf(typeId));
	}

}
