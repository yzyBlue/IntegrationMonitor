package com.zju.integration.monitor.model;

public enum ActionType {

	ADD(1,"新增警报"),UPDATE(2,"更新警报"),DELETE(3,"删除警报");
	
	// 成员变量
    private int index;
	private String name;
	private ActionType(int index, String name) {
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
        return "ActionType : [ "+ this.index + "," + this.name+" ]";
    }
}
