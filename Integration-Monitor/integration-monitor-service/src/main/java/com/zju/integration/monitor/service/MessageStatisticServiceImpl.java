package com.zju.integration.monitor.service;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.zju.integration.monitor.dao.MessageStatisticDao;
import com.zju.integration.monitor.exception.AlertServiceException;
import com.zju.integration.monitor.model.MessageStatistic;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-06-22
 * @description Integration Alert service implement Class
 */
@Service("messageStatisticService")
@Transactional(rollbackFor = AlertServiceException.class, value = "transactionManager")
public class MessageStatisticServiceImpl implements MessageStatisticService {

	@Autowired(required = false)
	private MessageStatisticDao messageStatisticDao;

	protected final Logger logger = Logger.getLogger(this.getClass());

	@Override
	public MessageStatistic getMessageStatistic() {
		return messageStatisticDao.getMessageStatistic();
	}

	@Override
	public MessageStatistic selectStatisticByDate(String recordDate) {
		return messageStatisticDao.selectByDate(recordDate);
	}

	public List<MessageStatistic> getStatisticList(Map paramMap) {
		return (List<MessageStatistic>) messageStatisticDao.findByCondition(paramMap);
	}

}
