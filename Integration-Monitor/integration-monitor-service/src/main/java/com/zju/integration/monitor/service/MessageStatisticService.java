/**
 * 
 */
package com.zju.integration.monitor.service;

import java.util.List;
import java.util.Map;

import com.zju.integration.monitor.model.MessageStatistic;

/**
 * @author Yuan.Ziyang
 *
 */
public interface MessageStatisticService {

	public MessageStatistic getMessageStatistic();

	public MessageStatistic selectStatisticByDate(String recordDate);

	public List<MessageStatistic> getStatisticList(Map paramMap);

}
