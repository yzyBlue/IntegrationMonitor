/**
 * 
 */
package com.zju.integration.monitor.model;

/**
 * @author Yuan.Ziyang
 *
 */
public enum AlertStatus {

	TODO(1, "TODO", "待处理"), DOING(2, "DOING", "处理中"), DONE(3, "DONE", "已处理");

	// 成员变量
	private int index;
	private String code;
	private String name;

	private AlertStatus(int index, String code, String name) {
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
		return "AlertSatus : [ " + this.index + "," + this.code + "," + this.name + " ]";
	}
}
