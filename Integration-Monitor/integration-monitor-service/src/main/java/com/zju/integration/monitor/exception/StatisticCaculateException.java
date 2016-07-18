/**
 * 
 */
package com.zju.integration.monitor.exception;

/**
 * @author Yuan.Ziyang
 *
 */
public class StatisticCaculateException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1037698648338835488L;
	/**
	 * 
	 */
	
	public StatisticCaculateException() {
		
	}

	/**
	 * @param message
	 */
	public StatisticCaculateException(String message) {
		super(message);
	}

	/**
	 * @param cause
	 */
	public StatisticCaculateException(Throwable cause) {
		super(cause);
	}

	/**
	 * @param message
	 * @param cause
	 */
	public StatisticCaculateException(String message, Throwable cause) {
		super(message, cause);
	}

	/**
	 * @param message
	 * @param cause
	 * @param enableSuppression
	 * @param writableStackTrace
	 */
	public StatisticCaculateException(String message, Throwable cause,
			boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
