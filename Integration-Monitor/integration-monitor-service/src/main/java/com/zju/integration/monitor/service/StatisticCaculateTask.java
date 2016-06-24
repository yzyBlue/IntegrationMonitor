package com.zju.integration.monitor.service;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.zju.integration.monitor.dao.MessageEventDao;
import com.zju.integration.monitor.dao.MessageStatisticDao;
import com.zju.integration.monitor.model.MessageStatistic;

@Service("statisticCaculateService")
public class StatisticCaculateTask {

	@Autowired(required = false)
	private MessageStatisticDao messageStatisticDao;

	@Autowired(required = false)
	private MessageEventDao messageEventDao;

	protected final Logger logger = Logger.getLogger(this.getClass());

	public void alertStatisticJob() {
		String date = new SimpleDateFormat("yyyy-MM-dd HH:mm:sss").format(new Date());
		logger.info(date + " [ AlertStatisticJob ] " + "警报事件数据统计任务进行中。。。");
	}

	public void messageStatisticJob() {
		String date = new SimpleDateFormat("yyyy-MM-dd HH:mm:sss").format(new Date());
		logger.info(date + " [ MessageStatisticJob ] " + "消息事件数据统计任务进行中。。。");
		String currentDate = getCurrentDate();
		MessageStatistic messageStatistic = messageEventDao.getMessageStatistic(currentDate);
		logger.info(JSON.toJSONString(messageStatistic));
		if (messageStatistic != null) {
			MessageStatistic messageStatisticFind = messageStatisticDao.selectByDate(currentDate);
			if (messageStatisticFind == null) {
				messageStatisticDao.insert(messageStatistic);
			} else {
				messageStatistic.setSerialNo(messageStatisticFind.getSerialNo());
				messageStatisticDao.update(messageStatistic);
			}

			logger.info("消息事件数据统计写入成功");
		}
	}

	private static String getCurrentDate() {
		return new SimpleDateFormat("yyyy-MM-dd").format(new Date());
	}

	private static String formatDateTime(String pattern, Date date) {
		return new SimpleDateFormat(pattern).format(date);

	}

}
