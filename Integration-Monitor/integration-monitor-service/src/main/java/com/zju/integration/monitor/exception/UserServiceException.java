package com.zju.integration.monitor.exception;
/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description User Service Exception Definition
 */
public class UserServiceException extends Exception {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 905824280895424468L;

	public UserServiceException() {
		super();
	}

	public UserServiceException(String message, Throwable cause,
			boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public UserServiceException(String message, Throwable cause) {
		super(message, cause);
	}

	public UserServiceException(String message) {
		super(message);
	}

	public UserServiceException(Throwable cause) {
		super(cause);
	}
	
}
