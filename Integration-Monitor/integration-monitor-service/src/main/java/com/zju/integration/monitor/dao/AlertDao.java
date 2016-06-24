/**
 * 
 */
package com.zju.integration.monitor.dao;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.zju.integration.monitor.model.Alert;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-06-22
 * @description Alert Dao object
 */
@Repository
@Transactional(value = "transactionManager")
public interface AlertDao extends AbstractGenericDao<Alert, Integer> {
	
	public Alert select(String alertCode);
	
}
