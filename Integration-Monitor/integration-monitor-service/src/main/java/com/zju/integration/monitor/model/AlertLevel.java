/**
 * 
 */
package com.zju.integration.monitor.model;

/**
 * @author Yuan.Ziyang
 *
 */
public enum AlertLevel {
	
	WARN(1,"警告"),ERROR(2,"异常"),FATAL(3,"严重");
	
    private int index;
	private String name;
	
	private AlertLevel(int index, String name) {
		this.index = index;
		this.name = name;
	}

	/**
	 * @return the index
	 */
	public int getIndex() {
		return index;
	}

	/**
	 * @param index the index to set
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
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	
    @Override
    public String toString() {
        return "AlertLevel : [ "+ this.index + "," + this.name+" ]";
    }
	
}
