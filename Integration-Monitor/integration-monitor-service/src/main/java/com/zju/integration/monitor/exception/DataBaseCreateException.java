package com.zju.integration.monitor.exception;

public class DataBaseCreateException extends Exception {

	private static final long serialVersionUID = 1L;

	public DataBaseCreateException() {
		
	}

	public DataBaseCreateException(String message) {
		super(message);
	}

	public DataBaseCreateException(Throwable cause) {
		super(cause);
	}

	public DataBaseCreateException(String message, Throwable cause) {
		super(message, cause);
	}

	public DataBaseCreateException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
