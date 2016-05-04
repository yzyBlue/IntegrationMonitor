/**
 * 
 */
package com.zju.integration.monitor.model;

import java.io.Serializable;
import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description Problem Action information object
 */
public class ProblemAction implements Serializable {

	private static final long serialVersionUID = 289617498387417989L;

	private long serialNo;
	
	private String problemCode;
	
	private String problemTheme;
	
	private String actorCode;
	
	private String actorName;
	
	private String actionType;
	
	@JSONField(format="yyyy-MM-dd HH:mm:ss")
	private Date actionDate;
	
	private String actionContent;
	
	private String actionMemo;
	
	/**
	 * 
	 */
	public ProblemAction() {
		super();
	}

	/**
	 * @return the serialNo
	 */
	public long getSerialNo() {
		return serialNo;
	}

	/**
	 * @param serialNo the serialNo to set
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
	 * @param problemCode the problemCode to set
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
	 * @param problemTheme the problemTheme to set
	 */
	public void setProblemTheme(String problemTheme) {
		this.problemTheme = problemTheme;
	}

	/**
	 * @return the actorCode
	 */
	public String getActorCode() {
		return actorCode;
	}

	/**
	 * @param actorCode the actorCode to set
	 */
	public void setActorCode(String actorCode) {
		this.actorCode = actorCode;
	}

	/**
	 * @return the actorName
	 */
	public String getActorName() {
		return actorName;
	}

	/**
	 * @param actorName the actorName to set
	 */
	public void setActorName(String actorName) {
		this.actorName = actorName;
	}

	/**
	 * @return the actionType
	 */
	public String getActionType() {
		return actionType;
	}

	/**
	 * @param actionType the actionType to set
	 */
	public void setActionType(String actionType) {
		this.actionType = actionType;
	}

	/**
	 * @return the actionDate
	 */
	public Date getActionDate() {
		return actionDate;
	}

	/**
	 * @param actionDate the actionDate to set
	 */
	public void setActionDate(Date actionDate) {
		this.actionDate = actionDate;
	}

	/**
	 * @return the actionContent
	 */
	public String getActionContent() {
		return actionContent;
	}

	/**
	 * @param actionContent the actionContent to set
	 */
	public void setActionContent(String actionContent) {
		this.actionContent = actionContent;
	}

	/**
	 * @return the actionMemo
	 */
	public String getActionMemo() {
		return actionMemo;
	}

	/**
	 * @param actionMemo the actionMemo to set
	 */
	public void setActionMemo(String actionMemo) {
		this.actionMemo = actionMemo;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((actionContent == null) ? 0 : actionContent.hashCode());
		result = prime * result + ((actionDate == null) ? 0 : actionDate.hashCode());
		result = prime * result + ((actionMemo == null) ? 0 : actionMemo.hashCode());
		result = prime * result + ((actionType == null) ? 0 : actionType.hashCode());
		result = prime * result + ((actorCode == null) ? 0 : actorCode.hashCode());
		result = prime * result + ((actorName == null) ? 0 : actorName.hashCode());
		result = prime * result + ((problemCode == null) ? 0 : problemCode.hashCode());
		result = prime * result + ((problemTheme == null) ? 0 : problemTheme.hashCode());
		result = prime * result + (int) (serialNo ^ (serialNo >>> 32));
		return result;
	}

	/* (non-Javadoc)
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
		if (!(obj instanceof ProblemAction)) {
			return false;
		}
		ProblemAction other = (ProblemAction) obj;
		if (actionContent == null) {
			if (other.actionContent != null) {
				return false;
			}
		} else if (!actionContent.equals(other.actionContent)) {
			return false;
		}
		if (actionDate == null) {
			if (other.actionDate != null) {
				return false;
			}
		} else if (!actionDate.equals(other.actionDate)) {
			return false;
		}
		if (actionMemo == null) {
			if (other.actionMemo != null) {
				return false;
			}
		} else if (!actionMemo.equals(other.actionMemo)) {
			return false;
		}
		if (actionType == null) {
			if (other.actionType != null) {
				return false;
			}
		} else if (!actionType.equals(other.actionType)) {
			return false;
		}
		if (actorCode == null) {
			if (other.actorCode != null) {
				return false;
			}
		} else if (!actorCode.equals(other.actorCode)) {
			return false;
		}
		if (actorName == null) {
			if (other.actorName != null) {
				return false;
			}
		} else if (!actorName.equals(other.actorName)) {
			return false;
		}
		if (problemCode == null) {
			if (other.problemCode != null) {
				return false;
			}
		} else if (!problemCode.equals(other.problemCode)) {
			return false;
		}
		if (problemTheme == null) {
			if (other.problemTheme != null) {
				return false;
			}
		} else if (!problemTheme.equals(other.problemTheme)) {
			return false;
		}
		if (serialNo != other.serialNo) {
			return false;
		}
		return true;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ProblemAction [serialNo=" + serialNo + ", problemCode=" + problemCode + ", problemTheme=" + problemTheme
				+ ", actorCode=" + actorCode + ", actorName=" + actorName + ", actionType=" + actionType
				+ ", actionDate=" + actionDate + ", actionContent=" + actionContent + ", actionMemo=" + actionMemo
				+ "]";
	}

}
