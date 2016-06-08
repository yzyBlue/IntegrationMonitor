package com.integration.monitor.model;

import java.io.Serializable;
import java.util.List;

import com.mirth.connect.model.MessageObject;

public class QueryMsgObjectResult implements Serializable {

	private static final long serialVersionUID = 1660875513411400935L;
	
	private MirthConnectResult mirthConnectResult;
	
	private List<MessageObject> messageObjList;

	public QueryMsgObjectResult() {
		super();
	}
	
	public QueryMsgObjectResult(MirthConnectResult mirthConnectResult,
			List<MessageObject> messageObjList) {
		super();
		this.mirthConnectResult = mirthConnectResult;
		this.messageObjList = messageObjList;
	}
	
	public MirthConnectResult getMirthConnectResult() {
		return mirthConnectResult;
	}

	public void setMirthConnectResult(MirthConnectResult mirthConnectResult) {
		this.mirthConnectResult = mirthConnectResult;
	}

	public List<MessageObject> getMessageObjList() {
		return messageObjList;
	}

	public void setMessageObjList(List<MessageObject> messageObjList) {
		this.messageObjList = messageObjList;
	}

	@Override
	public String toString() {
		return "QueryMsgObjectResult [mirthConnectResult=" + mirthConnectResult
				+ ", messageObjList=" + messageObjList + "]";
	}
	
	
}
