/**
 * 
 */
package com.zju.integration.monitor.service;

import com.zju.integration.monitor.exception.TransactionServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.Transaction;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description Transaction service interface
 */
public interface TransactionService {
	public IntegrationResult insertTransaction(Transaction transaction) throws TransactionServiceException;
	public IntegrationResult updateTransaction(Transaction transaction);
	public Transaction selectTransaction(Transaction transaction);
	public IntegrationResult deleteTransaction(Transaction transaction);
}
