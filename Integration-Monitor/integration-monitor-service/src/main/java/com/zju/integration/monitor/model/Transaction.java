/**
 * 
 */
package com.zju.integration.monitor.model;

import java.io.Serializable;
import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description Transaction information object
 */
public class Transaction implements Serializable {

	private static final long serialVersionUID = 8054950152234665600L;
	private long transId;
	private String transCode;
	private String transName;
	private String transChineseName;
	private String transMemo;
	@JSONField(format="yyyy-MM-dd HH:mm:ss")
	private Date createDate;

	/**
	 * 
	 */
	public Transaction() {
		super();
	}

	/**
	 * @return the transId
	 */
	public long getTransId() {
		return transId;
	}

	/**
	 * @param transId
	 *            the transId to set
	 */
	public void setTransId(long transId) {
		this.transId = transId;
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
	 * @return the transChineseName
	 */
	public String getTransChineseName() {
		return transChineseName;
	}

	/**
	 * @param transChineseName
	 *            the transChineseName to set
	 */
	public void setTransChineseName(String transChineseName) {
		this.transChineseName = transChineseName;
	}

	/**
	 * @return the transMemo
	 */
	public String getTransMemo() {
		return transMemo;
	}

	/**
	 * @param transMemo
	 *            the transMemo to set
	 */
	public void setTransMemo(String transMemo) {
		this.transMemo = transMemo;
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
		result = prime * result + ((transChineseName == null) ? 0 : transChineseName.hashCode());
		result = prime * result + ((transCode == null) ? 0 : transCode.hashCode());
		result = prime * result + (int) (transId ^ (transId >>> 32));
		result = prime * result + ((transMemo == null) ? 0 : transMemo.hashCode());
		result = prime * result + ((transName == null) ? 0 : transName.hashCode());
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
		if (!(obj instanceof Transaction)) {
			return false;
		}
		Transaction other = (Transaction) obj;
		if (createDate == null) {
			if (other.createDate != null) {
				return false;
			}
		} else if (!createDate.equals(other.createDate)) {
			return false;
		}
		if (transChineseName == null) {
			if (other.transChineseName != null) {
				return false;
			}
		} else if (!transChineseName.equals(other.transChineseName)) {
			return false;
		}
		if (transCode == null) {
			if (other.transCode != null) {
				return false;
			}
		} else if (!transCode.equals(other.transCode)) {
			return false;
		}
		if (transId != other.transId) {
			return false;
		}
		if (transMemo == null) {
			if (other.transMemo != null) {
				return false;
			}
		} else if (!transMemo.equals(other.transMemo)) {
			return false;
		}
		if (transName == null) {
			if (other.transName != null) {
				return false;
			}
		} else if (!transName.equals(other.transName)) {
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
		return "Transaction [transId=" + transId + ", transCode=" + transCode + ", transName=" + transName
				+ ", transChineseName=" + transChineseName + ", transMemo=" + transMemo + ", createDate=" + createDate
				+ "]";
	}

}
