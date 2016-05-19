/**
 * 
 */
package com.zju.integration.monitor.exception;

/**
 * @author Yuan.Ziyang
 *
 */
public class IntegrationActorServiceException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5724725945355238216L;

	/**
	 * 
	 */
	public IntegrationActorServiceException() {

	}

	/**
	 * @param message
	 */
	public IntegrationActorServiceException(String message) {
		super(message);
	}

	/**
	 * @param cause
	 */
	public IntegrationActorServiceException(Throwable cause) {
		super(cause);
	}

	/**
	 * @param message
	 * @param cause
	 */
	public IntegrationActorServiceException(String message, Throwable cause) {
		super(message, cause);
	}

	/**
	 * @param message
	 * @param cause
	 * @param enableSuppression
	 * @param writableStackTrace
	 */
	public IntegrationActorServiceException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
