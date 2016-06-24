/**
 * 
 */
package com.zju.integration.monitor.service;

import java.util.List;
import java.util.Map;

import com.zju.integration.monitor.exception.AlertServiceException;
import com.zju.integration.monitor.model.Alert;
import com.zju.integration.monitor.model.IntegrationResult;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-06-22
 * @description Integration Alert service interface
 */
public interface AlertService {
	
	public IntegrationResult addAlertInfo(Alert alert) throws AlertServiceException;
	
	public IntegrationResult updateAlertInfo(Alert alert) throws AlertServiceException;
	
	public Alert findAlertInfo(String alertCode);
	
	public List<Alert> findAlertByCondition(Map paramMap);
	
	public IntegrationResult deleteAlertInfo(String alertCode) throws AlertServiceException;

}
