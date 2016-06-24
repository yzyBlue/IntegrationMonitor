package com.zju.integration.monitor.exception;

public class AlertServiceException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1504717840183813033L;

	public AlertServiceException() {

	}

	public AlertServiceException(String message) {
		super(message);
	}

	public AlertServiceException(Throwable cause) {
		super(cause);
	}

	public AlertServiceException(String message, Throwable cause) {
		super(message, cause);
	}

	public AlertServiceException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
