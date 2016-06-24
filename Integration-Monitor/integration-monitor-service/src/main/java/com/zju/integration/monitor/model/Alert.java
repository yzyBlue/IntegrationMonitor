/**
 * 
 */
package com.zju.integration.monitor.model;

import java.io.Serializable;
import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

import com.alibaba.fastjson.annotation.JSONField;
import com.zju.integration.monitor.util.DataValidate;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-06-22
 * @description Integration Alert information object
 */
@XmlRootElement(name = "Alert")
public class Alert implements Serializable {

	private static final long serialVersionUID = 1765067096801117085L;

	private long serialNo;

	@DataValidate(description = "警报代码", nullable = false)
	private String alertCode;

	@DataValidate(description = "警报名称", nullable = false)
	private String alertName;

	@DataValidate(description = "警报主题", nullable = false)
	private String alertTheme;

	@DataValidate(description = "关联消息ID", nullable = false)
	private String msgSequenceId;

	@DataValidate(description = "警报详细内容", nullable = true)
	private String alertContent;

	@DataValidate(description = "警报级别", nullable = true)
	private String alertLevel;

	@DataValidate(description = "警报状态", nullable = true)
	private String alertStatus;

	@DataValidate(description = "警报发生时间", nullable = true)
	@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	private Date createDate;

	@DataValidate(description = "警报通知人员", nullable = true)
	private String notifyPerson;

	@DataValidate(description = "警报备注", nullable = true)
	private String alertMemo;

	public Alert() {
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
	 * @return the alertCode
	 */
	public String getAlertCode() {
		return alertCode;
	}

	/**
	 * @param alertCode
	 *            the alertCode to set
	 */
	public void setAlertCode(String alertCode) {
		this.alertCode = alertCode;
	}

	/**
	 * @return the alertName
	 */
	public String getAlertName() {
		return alertName;
	}

	/**
	 * @param alertName
	 *            the alertName to set
	 */
	public void setAlertName(String alertName) {
		this.alertName = alertName;
	}

	/**
	 * @return the alertTheme
	 */
	public String getAlertTheme() {
		return alertTheme;
	}

	/**
	 * @param alertTheme
	 *            the alertTheme to set
	 */
	public void setAlertTheme(String alertTheme) {
		this.alertTheme = alertTheme;
	}

	/**
	 * @return the msgSequenceId
	 */
	public String getMsgSequenceId() {
		return msgSequenceId;
	}

	/**
	 * @param msgSequenceId
	 *            the msgSequenceId to set
	 */
	public void setMsgSequenceId(String msgSequenceId) {
		this.msgSequenceId = msgSequenceId;
	}

	/**
	 * @return the alertContent
	 */
	public String getAlertContent() {
		return alertContent;
	}

	/**
	 * @param alertContent
	 *            the alertContent to set
	 */
	public void setAlertContent(String alertContent) {
		this.alertContent = alertContent;
	}

	/**
	 * @return the alertLevel
	 */
	public String getAlertLevel() {
		return alertLevel;
	}

	/**
	 * @param alertLevel
	 *            the alertLevel to set
	 */
	public void setAlertLevel(String alertLevel) {
		this.alertLevel = alertLevel;
	}

	/**
	 * @return the alertStatus
	 */
	public String getAlertStatus() {
		return alertStatus;
	}

	/**
	 * @param alertStatus
	 *            the alertStatus to set
	 */
	public void setAlertStatus(String alertStatus) {
		this.alertStatus = alertStatus;
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
	 * @return the notifyPerson
	 */
	public String getNotifyPerson() {
		return notifyPerson;
	}

	/**
	 * @param notifyPerson
	 *            the notifyPerson to set
	 */
	public void setNotifyPerson(String notifyPerson) {
		this.notifyPerson = notifyPerson;
	}

	/**
	 * @return the alertMemo
	 */
	public String getAlertMemo() {
		return alertMemo;
	}

	/**
	 * @param alertMemo
	 *            the alertMemo to set
	 */
	public void setAlertMemo(String alertMemo) {
		this.alertMemo = alertMemo;
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
		result = prime * result + ((alertCode == null) ? 0 : alertCode.hashCode());
		result = prime * result + ((alertContent == null) ? 0 : alertContent.hashCode());
		result = prime * result + ((alertLevel == null) ? 0 : alertLevel.hashCode());
		result = prime * result + ((alertMemo == null) ? 0 : alertMemo.hashCode());
		result = prime * result + ((alertName == null) ? 0 : alertName.hashCode());
		result = prime * result + ((alertStatus == null) ? 0 : alertStatus.hashCode());
		result = prime * result + ((alertTheme == null) ? 0 : alertTheme.hashCode());
		result = prime * result + ((createDate == null) ? 0 : createDate.hashCode());
		result = prime * result + ((msgSequenceId == null) ? 0 : msgSequenceId.hashCode());
		result = prime * result + ((notifyPerson == null) ? 0 : notifyPerson.hashCode());
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
		if (!(obj instanceof Alert)) {
			return false;
		}
		Alert other = (Alert) obj;
		if (alertCode == null) {
			if (other.alertCode != null) {
				return false;
			}
		} else if (!alertCode.equals(other.alertCode)) {
			return false;
		}
		if (alertContent == null) {
			if (other.alertContent != null) {
				return false;
			}
		} else if (!alertContent.equals(other.alertContent)) {
			return false;
		}
		if (alertLevel == null) {
			if (other.alertLevel != null) {
				return false;
			}
		} else if (!alertLevel.equals(other.alertLevel)) {
			return false;
		}
		if (alertMemo == null) {
			if (other.alertMemo != null) {
				return false;
			}
		} else if (!alertMemo.equals(other.alertMemo)) {
			return false;
		}
		if (alertName == null) {
			if (other.alertName != null) {
				return false;
			}
		} else if (!alertName.equals(other.alertName)) {
			return false;
		}
		if (alertStatus == null) {
			if (other.alertStatus != null) {
				return false;
			}
		} else if (!alertStatus.equals(other.alertStatus)) {
			return false;
		}
		if (alertTheme == null) {
			if (other.alertTheme != null) {
				return false;
			}
		} else if (!alertTheme.equals(other.alertTheme)) {
			return false;
		}
		if (createDate == null) {
			if (other.createDate != null) {
				return false;
			}
		} else if (!createDate.equals(other.createDate)) {
			return false;
		}
		if (msgSequenceId == null) {
			if (other.msgSequenceId != null) {
				return false;
			}
		} else if (!msgSequenceId.equals(other.msgSequenceId)) {
			return false;
		}
		if (notifyPerson == null) {
			if (other.notifyPerson != null) {
				return false;
			}
		} else if (!notifyPerson.equals(other.notifyPerson)) {
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
		return "Alert [serialNo=" + serialNo + ", alertCode=" + alertCode + ", alertName=" + alertName + ", alertTheme="
				+ alertTheme + ", msgSequenceId=" + msgSequenceId + ", alertContent=" + alertContent + ", alertLevel="
				+ alertLevel + ", alertStatus=" + alertStatus + ", createDate=" + createDate + ", notifyPerson="
				+ notifyPerson + ", alertMemo=" + alertMemo + "]";
	}

}
