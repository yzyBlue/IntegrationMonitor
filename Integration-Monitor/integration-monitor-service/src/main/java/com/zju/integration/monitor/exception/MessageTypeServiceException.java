/**
 * 
 */
package com.zju.integration.monitor.exception;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description MessageType Service Exception Definition
 */
public class MessageTypeServiceException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1354917747484875465L;

	public MessageTypeServiceException() {
		super();
	}

	public MessageTypeServiceException(String message, Throwable cause,
			boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public MessageTypeServiceException(String message, Throwable cause) {
		super(message, cause);
	}

	public MessageTypeServiceException(String message) {
		super(message);
	}

	public MessageTypeServiceException(Throwable cause) {
		super(cause);
	}

}
