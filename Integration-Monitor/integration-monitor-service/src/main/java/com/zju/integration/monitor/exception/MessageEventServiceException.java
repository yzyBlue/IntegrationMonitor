/**
 * 
 */
package com.zju.integration.monitor.exception;

/**
 * @author Yuan.Ziyang
 *
 */
public class MessageEventServiceException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7102953322418880167L;

	/**
	 * 
	 */
	public MessageEventServiceException() {
	}

	/**
	 * @param message
	 */
	public MessageEventServiceException(String message) {
		super(message);
	}

	/**
	 * @param cause
	 */
	public MessageEventServiceException(Throwable cause) {
		super(cause);
	}

	/**
	 * @param message
	 * @param cause
	 */
	public MessageEventServiceException(String message, Throwable cause) {
		super(message, cause);
	}

	/**
	 * @param message
	 * @param cause
	 * @param enableSuppression
	 * @param writableStackTrace
	 */
	public MessageEventServiceException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
