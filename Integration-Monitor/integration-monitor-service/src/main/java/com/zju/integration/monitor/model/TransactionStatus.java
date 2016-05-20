/**
 * 
 */
package com.zju.integration.monitor.model;

import java.io.Serializable;
import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description Transaction Status information object
 */
@XmlRootElement(name = "TransactionStatus")
public class TransactionStatus implements Serializable {

	private static final long serialVersionUID = 5287729446970546907L;

	private long serialNo;

	private String transCode;

	private String transName;

	private String transStatusCode;

	private String transStatusName;

	private String transStatusDesc;

	@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	private Date createDate;

	/**
	 * 
	 */
	public TransactionStatus() {
		super();
	}

	/**
	 * @return the serialNo
	 */
	public long getSerialNo() {
		return serialNo;
	}

	/**
	 * @param serialNo
	 *            the serialNo to set
	 */
	public void setSerialNo(long serialNo) {
		this.serialNo = serialNo;
	}

	/**
	 * @return the transCode
	 */
	public String getTransCode() {
		return transCode;
	}

	/**
	 * @param transCode
	 *            the transCode to set
	 */
	public void setTransCode(String transCode) {
		this.transCode = transCode;
	}

	/**
	 * @return the transName
	 */
	public String getTransName() {
		return transName;
	}

	/**
	 * @param transName
	 *            the transName to set
	 */
	public void setTransName(String transName) {
		this.transName = transName;
	}

	/**
	 * @return the transStatusCode
	 */
	public String getTransStatusCode() {
		return transStatusCode;
	}

	/**
	 * @param transStatusCode
	 *            the transStatusCode to set
	 */
	public void setTransStatusCode(String transStatusCode) {
		this.transStatusCode = transStatusCode;
	}

	/**
	 * @return the transStatusName
	 */
	public String getTransStatusName() {
		return transStatusName;
	}

	/**
	 * @param transStatusName
	 *            the transStatusName to set
	 */
	public void setTransStatusName(String transStatusName) {
		this.transStatusName = transStatusName;
	}

	/**
	 * @return the transStatusDesc
	 */
	public String getTransStatusDesc() {
		return transStatusDesc;
	}

	/**
	 * @param transStatusDesc
	 *            the transStatusDesc to set
	 */
	public void setTransStatusDesc(String transStatusDesc) {
		this.transStatusDesc = transStatusDesc;
	}

	/**
	 * @return the createDate
	 */
	public Date getCreateDate() {
		return createDate;
	}

	/**
	 * @param createDate
	 *            the createDate to set
	 */
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
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
		result = prime * result + ((createDate == null) ? 0 : createDate.hashCode());
		result = prime * result + (int) (serialNo ^ (serialNo >>> 32));
		result = prime * result + ((transCode == null) ? 0 : transCode.hashCode());
		result = prime * result + ((transName == null) ? 0 : transName.hashCode());
		result = prime * result + ((transStatusCode == null) ? 0 : transStatusCode.hashCode());
		result = prime * result + ((transStatusDesc == null) ? 0 : transStatusDesc.hashCode());
		result = prime * result + ((transStatusName == null) ? 0 : transStatusName.hashCode());
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
		if (!(obj instanceof TransactionStatus)) {
			return false;
		}
		TransactionStatus other = (TransactionStatus) obj;
		if (createDate == null) {
			if (other.createDate != null) {
				return false;
			}
		} else if (!createDate.equals(other.createDate)) {
			return false;
		}
		if (serialNo != other.serialNo) {
			return false;
		}
		if (transCode == null) {
			if (other.transCode != null) {
				return false;
			}
		} else if (!transCode.equals(other.transCode)) {
			return false;
		}
		if (transName == null) {
			if (other.transName != null) {
				return false;
			}
		} else if (!transName.equals(other.transName)) {
			return false;
		}
		if (transStatusCode == null) {
			if (other.transStatusCode != null) {
				return false;
			}
		} else if (!transStatusCode.equals(other.transStatusCode)) {
			return false;
		}
		if (transStatusDesc == null) {
			if (other.transStatusDesc != null) {
				return false;
			}
		} else if (!transStatusDesc.equals(other.transStatusDesc)) {
			return false;
		}
		if (transStatusName == null) {
			if (other.transStatusName != null) {
				return false;
			}
		} else if (!transStatusName.equals(other.transStatusName)) {
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
		return "TransactionStatus [serialNo=" + serialNo + ", transCode=" + transCode + ", transName=" + transName
				+ ", transStatusCode=" + transStatusCode + ", transStatusName=" + transStatusName + ", transStatusDesc="
				+ transStatusDesc + ", createDate=" + createDate + "]";
	}

}
