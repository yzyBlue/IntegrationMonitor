package com.zju.integration.monitor.dao;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(value = "transactionManager")
public interface CreateDataBaseDao {
	
	public void createTableTransType();
	
	public void createTableMsgEventType();
	
	public void createTableMsgEventLog();
	
	public void createTableTransStatus();
	
	public void createTableAlertInfo();
	
	public void createTableAlertAction();
	
	public void createTableMsgStatistics();
	
	public void createTableUserInfo();
	
	public Integer insertTransTypeInfo();
	
	public Integer insertMessageType();
	
	public Integer insertUserInfo();
	
}
