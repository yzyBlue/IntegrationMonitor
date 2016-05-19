/**
 * 
 */
package com.zju.integration.monitor.model;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description Result information object
 */
@XmlRootElement(name = "DataBaseInfo")
public class IntegrationResult implements Serializable {

	private static final long serialVersionUID = 3189310499310275246L;
	public static final int SUCCESSCODE = 0;
	public static final String SUCCESSDESC = "成功";
	public static final int INTERNALERROR = -500;
	public static final String INTERNALDESC = "服务内部错误";
	private int resultCode;
	private String resultDesc;

	/**
	 * 
	 */
	public IntegrationResult() {
		super();
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
		if (!(obj instanceof IntegrationResult)) {
			return false;
		}
		IntegrationResult other = (IntegrationResult) obj;
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
		return "IntegrationResult [resultCode=" + resultCode + ", resultDesc=" + resultDesc + "]";
	}

}
