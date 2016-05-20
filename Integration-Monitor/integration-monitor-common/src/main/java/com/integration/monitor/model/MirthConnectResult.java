package com.integration.monitor.model;

import java.io.Serializable;

import com.thoughtworks.xstream.annotations.XStreamAlias;

@XStreamAlias("messageObject")
public class MirthConnectResult implements Serializable {

	private static final long serialVersionUID = 7760693433671272965L;

	public static final int SUCCESSCODE = 0;
	public static final String SUCCESSDESC = "MIRTH接口调用成功";
	public static final int MIRTHCLIENTERROR = -500;
	public static final String MIRTHCLIENTDESC = "MIRTH接口调用错误";
	private int resultCode;
	private String resultDesc;

	public MirthConnectResult() {

	}

	/**
	 * @return the resultCode
	 */
	public int getResultCode() {
		return resultCode;
	}

	/**
	 * @param resultCode
	 *            the resultCode to set
	 */
	public void setResultCode(int resultCode) {
		this.resultCode = resultCode;
	}

	/**
	 * @return the resultDesc
	 */
	public String getResultDesc() {
		return resultDesc;
	}

	/**
	 * @param resultDesc
	 *            the resultDesc to set
	 */
	public void setResultDesc(String resultDesc) {
		this.resultDesc = resultDesc;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + resultCode;
		result = prime * result + ((resultDesc == null) ? 0 : resultDesc.hashCode());
		return result;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (!(obj instanceof MirthConnectResult)) {
			return false;
		}
		MirthConnectResult other = (MirthConnectResult) obj;
		if (resultCode != other.resultCode) {
			return false;
		}
		if (resultDesc == null) {
			if (other.resultDesc != null) {
				return false;
			}
		} else if (!resultDesc.equals(other.resultDesc)) {
			return false;
		}
		return true;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "MirthConnectResult [resultCode=" + resultCode + ", resultDesc=" + resultDesc + "]";
	}

}
