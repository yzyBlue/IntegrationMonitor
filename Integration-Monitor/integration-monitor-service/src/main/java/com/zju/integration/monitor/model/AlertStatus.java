/**
 * 
 */
package com.zju.integration.monitor.model;

/**
 * @author Yuan.Ziyang
 *
 */
public enum AlertStatus {
	
	TODO(1,"待处理"),DOING(2,"处理中"),DONE(3,"已处理");
	
	// 成员变量
    private int index;
	private String name;
	private AlertStatus(int index, String name) {
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
        return "AlertSatus : [ "+ this.index + "," + this.name+" ]";
    }
}
