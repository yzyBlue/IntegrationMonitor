package com.zju.integration.monitor.exception;
/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description Transaction Service Exception Definition
 */
public class TransactionServiceException extends Exception {
	/**
	 * 
	 */
	private static final long serialVersionUID = 7488638460413729974L;

	public TransactionServiceException() {
		super();
	}

	public TransactionServiceException(String message, Throwable cause,
			boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public TransactionServiceException(String message, Throwable cause) {
		super(message, cause);
	}

	public TransactionServiceException(String message) {
		super(message);
	}

	public TransactionServiceException(Throwable cause) {
		super(cause);
	}

}
