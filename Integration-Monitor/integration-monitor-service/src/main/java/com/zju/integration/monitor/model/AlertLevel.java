/**
 * 
 */
package com.zju.integration.monitor.model;

/**
 * @author Yuan.Ziyang
 *
 */
public enum AlertLevel {

	WARN(1, "WARN", "警告"), ERROR(2, "ERROR", "异常"), FATAL(3, "FATAL", "严重");

	private int index;
	private String code;
	private String name;

	private AlertLevel(int index, String code, String name) {
		this.index = index;
		this.code = code;
		this.name = name;
	}

	/**
	 * @return the index
	 */
	public int getIndex() {
		return index;
	}

	/**
	 * @param index
	 *            the index to set
	 */
	public void setIndex(int index) {
		this.index = index;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name
	 *            the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the code
	 */
	public String getCode() {
		return code;
	}

	/**
	 * @param code
	 *            the code to set
	 */
	public void setCode(String code) {
		this.code = code;
	}

	@Override
	public String toString() {
		return "AlertLevel : [ " + this.index + "," + this.code + "," + this.name + " ]";
	}

}
