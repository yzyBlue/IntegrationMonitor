/**
 * 
 */
package com.zju.integration.monitor.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.zju.integration.monitor.exception.TransactionServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.Transaction;
import com.zju.integration.monitor.service.TransactionService;

/**
 * @author Yuan.Ziyang
 *
 */
@RestController
@RequestMapping("/transactioninfo/")
public class TransactionController {

	@Autowired
	private TransactionService transactionService;

	protected static final Logger logger = Logger.getLogger(TransactionController.class);

	@RequestMapping(value = "/transaction", method = RequestMethod.POST, produces = {
			"application/json;charset=UTF-8" }, consumes = { "application/json;charset=UTF-8" })
	public @ResponseBody IntegrationResult registerTransactoin(@RequestBody Transaction transaction) {
		IntegrationResult result = new IntegrationResult();
		try {
			result = transactionService.insertTransaction(transaction);
		} catch (TransactionServiceException e) {
			logger.error(e.toString());
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(e.getMessage().toString());
		}
		return result;
	}

	@RequestMapping(value = "/transaction", method = RequestMethod.PUT, produces = {
			"application/json;charset=UTF-8" }, consumes = { "application/json;charset=UTF-8" })
	public @ResponseBody IntegrationResult updateTransactoin(@RequestBody Transaction transaction) {
		IntegrationResult result = new IntegrationResult();
		try {
			result = transactionService.updateTransaction(transaction);
		} catch (TransactionServiceException e) {
			logger.error(e.toString());
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(e.getMessage().toString());
		}
		return result;
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = { "application/json;charset=UTF-8" })
	public @ResponseBody List<Transaction> findAllTransactoin() {
		List<Transaction> transactionList = new ArrayList<Transaction>();
		transactionList = transactionService.findTransactionByCondition(null);
		return transactionList;
	}

	@RequestMapping(value = "/transaction", method = RequestMethod.GET, produces = { "application/json;charset=UTF-8" })
	public @ResponseBody Transaction findTransactoinByCode(@RequestParam("transCode") String transCode) {
		logger.debug(transCode);
		Transaction transaction = new Transaction();
		transaction.setTransCode(transCode);
		return transactionService.selectTransaction(transaction);
	}

	@RequestMapping(value = "/transaction", method = RequestMethod.DELETE, produces = {
			"application/json;charset=UTF-8" })
	public @ResponseBody IntegrationResult deleteTransactoinByCode(@RequestParam("transCode") String transCode) {
		IntegrationResult result = new IntegrationResult();
		Transaction transaction = new Transaction();
		transaction.setTransCode(transCode);
		try {
			result = transactionService.deleteTransaction(transaction);
		} catch (TransactionServiceException e) {
			logger.error(e.toString());
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(e.getMessage().toString());
		}
		return result;
	}

	@RequestMapping(value = "/list", method = RequestMethod.POST, produces = {
			"application/json;charset=UTF-8" }, consumes = { "application/json;charset=UTF-8" })
	public @ResponseBody List<Transaction> findTransByCondition(Map paramMap) {
		List<Transaction> transactionList = new ArrayList<Transaction>();
		transactionList = transactionService.findTransactionByCondition(paramMap);
		return transactionList;
	}

}
