/**
 * 
 */
package com.zju.integration.monitor.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.zju.integration.monitor.model.MessageEvent;
import com.zju.integration.monitor.model.MessageStatistic;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description Message Event Dao object
 */
@Repository
@Transactional(value = "transactionManager")
public interface MessageEventDao extends AbstractGenericDao<MessageEvent, Integer> {

	public List<MessageEvent> getMessageByCondition(Map paramMap);

	public MessageStatistic getMessageStatistic(String currentDate);

}
