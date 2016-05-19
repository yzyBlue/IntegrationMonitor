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
 * @description Problem Record information object
 */
@XmlRootElement(name = "DataBaseInfo")
public class ProblemRecord implements Serializable {

	private static final long serialVersionUID = 4817644950122627980L;

	private long serialNo;

	private String problemCode;

	private String problemTheme;

	private String problemType;

	private String problemStatus;

	private String priority;

	private String memo;

	@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	private Date createDate;

	private String creator;

	private String operator;

	@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	private Date modifyDate;

	@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	private Date deadLine;

	private String fileRelated;

	/**
	 * 
	 */
	public ProblemRecord() {
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
	 * @return the problemCode
	 */
	public String getProblemCode() {
		return problemCode;
	}

	/**
	 * @param problemCode
	 *            the problemCode to set
	 */
	public void setProblemCode(String problemCode) {
		this.problemCode = problemCode;
	}

	/**
	 * @return the problemTheme
	 */
	public String getProblemTheme() {
		return problemTheme;
	}

	/**
	 * @param problemTheme
	 *            the problemTheme to set
	 */
	public void setProblemTheme(String problemTheme) {
		this.problemTheme = problemTheme;
	}

	/**
	 * @return the problemType
	 */
	public String getProblemType() {
		return problemType;
	}

	/**
	 * @param problemType
	 *            the problemType to set
	 */
	public void setProblemType(String problemType) {
		this.problemType = problemType;
	}

	/**
	 * @return the problemStatus
	 */
	public String getProblemStatus() {
		return problemStatus;
	}

	/**
	 * @param problemStatus
	 *            the problemStatus to set
	 */
	public void setProblemStatus(String problemStatus) {
		this.problemStatus = problemStatus;
	}

	/**
	 * @return the priority
	 */
	public String getPriority() {
		return priority;
	}

	/**
	 * @param priority
	 *            the priority to set
	 */
	public void setPriority(String priority) {
		this.priority = priority;
	}

	/**
	 * @return the memo
	 */
	public String getMemo() {
		return memo;
	}

	/**
	 * @param memo
	 *            the memo to set
	 */
	public void setMemo(String memo) {
		this.memo = memo;
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

	/**
	 * @return the creator
	 */
	public String getCreator() {
		return creator;
	}

	/**
	 * @param creator
	 *            the creator to set
	 */
	public void setCreator(String creator) {
		this.creator = creator;
	}

	/**
	 * @return the operator
	 */
	public String getOperator() {
		return operator;
	}

	/**
	 * @param operator
	 *            the operator to set
	 */
	public void setOperator(String operator) {
		this.operator = operator;
	}

	/**
	 * @return the modifyDate
	 */
	public Date getModifyDate() {
		return modifyDate;
	}

	/**
	 * @param modifyDate
	 *            the modifyDate to set
	 */
	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}

	/**
	 * @return the deadLine
	 */
	public Date getDeadLine() {
		return deadLine;
	}

	/**
	 * @param deadLine
	 *            the deadLine to set
	 */
	public void setDeadLine(Date deadLine) {
		this.deadLine = deadLine;
	}

	/**
	 * @return the fileRelated
	 */
	public String getFileRelated() {
		return fileRelated;
	}

	/**
	 * @param fileRelated
	 *            the fileRelated to set
	 */
	public void setFileRelated(String fileRelated) {
		this.fileRelated = fileRelated;
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
		result = prime * result + ((creator == null) ? 0 : creator.hashCode());
		result = prime * result + ((deadLine == null) ? 0 : deadLine.hashCode());
		result = prime * result + ((fileRelated == null) ? 0 : fileRelated.hashCode());
		result = prime * result + ((memo == null) ? 0 : memo.hashCode());
		result = prime * result + ((modifyDate == null) ? 0 : modifyDate.hashCode());
		result = prime * result + ((operator == null) ? 0 : operator.hashCode());
		result = prime * result + ((priority == null) ? 0 : priority.hashCode());
		result = prime * result + ((problemCode == null) ? 0 : problemCode.hashCode());
		result = prime * result + ((problemStatus == null) ? 0 : problemStatus.hashCode());
		result = prime * result + ((problemTheme == null) ? 0 : problemTheme.hashCode());
		result = prime * result + ((problemType == null) ? 0 : problemType.hashCode());
		result = prime * result + (int) (serialNo ^ (serialNo >>> 32));
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
		if (!(obj instanceof ProblemRecord)) {
			return false;
		}
		ProblemRecord other = (ProblemRecord) obj;
		if (createDate == null) {
			if (other.createDate != null) {
				return false;
			}
		} else if (!createDate.equals(other.createDate)) {
			return false;
		}
		if (creator == null) {
			if (other.creator != null) {
				return false;
			}
		} else if (!creator.equals(other.creator)) {
			return false;
		}
		if (deadLine == null) {
			if (other.deadLine != null) {
				return false;
			}
		} else if (!deadLine.equals(other.deadLine)) {
			return false;
		}
		if (fileRelated == null) {
			if (other.fileRelated != null) {
				return false;
			}
		} else if (!fileRelated.equals(other.fileRelated)) {
			return false;
		}
		if (memo == null) {
			if (other.memo != null) {
				return false;
			}
		} else if (!memo.equals(other.memo)) {
			return false;
		}
		if (modifyDate == null) {
			if (other.modifyDate != null) {
				return false;
			}
		} else if (!modifyDate.equals(other.modifyDate)) {
			return false;
		}
		if (operator == null) {
			if (other.operator != null) {
				return false;
			}
		} else if (!operator.equals(other.operator)) {
			return false;
		}
		if (priority == null) {
			if (other.priority != null) {
				return false;
			}
		} else if (!priority.equals(other.priority)) {
			return false;
		}
		if (problemCode == null) {
			if (other.problemCode != null) {
				return false;
			}
		} else if (!problemCode.equals(other.problemCode)) {
			return false;
		}
		if (problemStatus == null) {
			if (other.problemStatus != null) {
				return false;
			}
		} else if (!problemStatus.equals(other.problemStatus)) {
			return false;
		}
		if (problemTheme == null) {
			if (other.problemTheme != null) {
				return false;
			}
		} else if (!problemTheme.equals(other.problemTheme)) {
			return false;
		}
		if (problemType == null) {
			if (other.problemType != null) {
				return false;
			}
		} else if (!problemType.equals(other.problemType)) {
			return false;
		}
		if (serialNo != other.serialNo) {
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
		return "ProblemRecord [serialNo=" + serialNo + ", problemCode=" + problemCode + ", problemTheme=" + problemTheme
				+ ", problemType=" + problemType + ", problemStatus=" + problemStatus + ", priority=" + priority
				+ ", memo=" + memo + ", createDate=" + createDate + ", creator=" + creator + ", operator=" + operator
				+ ", modifyDate=" + modifyDate + ", deadLine=" + deadLine + ", fileRelated=" + fileRelated + "]";
	}

}
