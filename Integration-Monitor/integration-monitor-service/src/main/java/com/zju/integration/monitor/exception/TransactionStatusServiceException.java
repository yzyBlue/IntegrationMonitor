package com.zju.integration.monitor.exception;
/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description Transaction Status Service Exception Definition
 */
public class TransactionStatusServiceException extends Exception {
	/**
	 * 
	 */
	private static final long serialVersionUID = 7488638460413729974L;

	public TransactionStatusServiceException() {
		super();
	}

	public TransactionStatusServiceException(String message, Throwable cause,
			boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public TransactionStatusServiceException(String message, Throwable cause) {
		super(message, cause);
	}

	public TransactionStatusServiceException(String message) {
		super(message);
	}

	public TransactionStatusServiceException(Throwable cause) {
		super(cause);
	}

}
