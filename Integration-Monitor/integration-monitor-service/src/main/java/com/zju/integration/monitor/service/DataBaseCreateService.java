package com.zju.integration.monitor.service;

import com.zju.integration.monitor.exception.DataBaseCreateException;
import com.zju.integration.monitor.model.IntegrationResult;

public interface DataBaseCreateService {
	
	public IntegrationResult dataBaseInit() throws DataBaseCreateException;
	
	public IntegrationResult dataImport()throws DataBaseCreateException;
}
