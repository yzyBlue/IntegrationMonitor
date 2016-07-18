/**
 * 
 */
package com.zju.integration.monitor.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.zju.integration.monitor.dao.AlertActionDao;
import com.zju.integration.monitor.dao.AlertDao;
import com.zju.integration.monitor.dao.MessageEventDao;
import com.zju.integration.monitor.dao.MessageTypeDao;
import com.zju.integration.monitor.exception.MessageEventServiceException;
import com.zju.integration.monitor.model.ActionType;
import com.zju.integration.monitor.model.Alert;
import com.zju.integration.monitor.model.AlertAction;
import com.zju.integration.monitor.model.AlertLevel;
import com.zju.integration.monitor.model.AlertStatus;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.MessageEvent;
import com.zju.integration.monitor.util.DataValidationUtil;

/**
 * @author Yuan.Ziyang
 *
 */
@Service("messageEventService")
@Transactional(rollbackFor = MessageEventServiceException.class, value = "transactionManager")
public class MessageEventServiceImpl implements MessageEventService {

	@Autowired(required = false)
	private MessageEventDao messageEventDao;

	@Autowired(required = false)
	private MessageTypeDao messageTypeDao;

	@Autowired(required = false)
	private AlertDao alertDao;

	@Autowired(required = false)
	private AlertActionDao alertActionDao;

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
			String msgTypeDesc = messageTypeDao.selectMsgTypeById(Integer.valueOf(messageEvent.getMsgTypeId()))
					.getMessageTypeDesc();
			messageEvent.setMsgTypeDesc(msgTypeDesc);
			int insert = messageEventDao.insert(messageEvent);
			if (insert > 0) {
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc(IntegrationResult.SUCCESSDESC);
			} else {
				result.setResultCode(IntegrationResult.INTERNALERROR);
				result.setResultDesc("数据验证成功，写入数据失败");
			}
			Alert alert = checkMessageEvent(messageEvent);
			AlertAction alertAction = new AlertAction();
			if (alert != null) {
				alert.setMsgSequenceId(messageEvent.getSequenceId());
				alert.setAlertTheme(msgTypeDesc);
				alertAction.setAlertName(alert.getAlertName());
				alertAction.setAlertCode(alert.getAlertCode());
				alertAction.setActorCode("admin");
				alertAction.setActorName("管理员");
				alertAction.setActionTypeName(ActionType.ADD.getName());
				alertAction.setActionTypeCode(String.valueOf(ActionType.ADD.getIndex()));
				alertAction.setActionMemo(alert.getAlertMemo());
				alertDao.insert(alert);
				alertActionDao.insert(alertAction);
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
		// if (messageList != null && messageList.size() > 1000) {
		// messageList = messageList.subList(0, 1000);
		// }
		return messageList;
	}

	@Override
	public MessageEvent getMessageEventById(long sequenceId) {
		return messageEventDao.getMessageById(sequenceId);
	}

	private Alert checkMessageEvent(MessageEvent messageEvent) {
		// logger.info("[checkMessageEvent] : " + messageEvent.toString());
		Alert alert = new Alert();
		String status = messageEvent.getHandleResultStatus();
		if (status == "ERROR" || status.equals("ERROR")) {
			String alertCode = getGuid();
			alert.setAlertCode(alertCode);
			alert.setAlertName(messageEvent.getTransCode());
			alert.setAlertContent(messageEvent.getHandleResultDesc());
			alert.setAlertLevel(AlertLevel.ERROR.getCode());
			alert.setAlertStatus(AlertStatus.TODO.getCode());
			alert.setNotifyPerson("集成开发");
		} else if (status == "FILTERED" || status.equals("FILTERED")) {
			String alertCode = getGuid();
			alert.setAlertCode(alertCode);
			alert.setAlertName(messageEvent.getTransCode());
			alert.setAlertContent(messageEvent.getHandleResultDesc());
			alert.setAlertLevel(AlertLevel.WARN.getCode());
			alert.setAlertStatus(AlertStatus.TODO.getCode());
			alert.setNotifyPerson("集成开发");
		} else {
			alert = null;
		}
		return alert;

	}

	/**
	 * Returns a globaly unique id.
	 * 
	 * @return
	 * 
	 */
	private static String getGuid() {
		return UUID.randomUUID().toString();
	}

}
