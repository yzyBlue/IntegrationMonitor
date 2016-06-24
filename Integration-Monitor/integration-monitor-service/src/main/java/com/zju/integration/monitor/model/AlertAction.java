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
 * @description Integration AlertAction information object
 */
@XmlRootElement(name = "AlertAction")
public class AlertAction implements Serializable {

	private static final long serialVersionUID = -8130753156288060918L;

	private long serialNo;

	@DataValidate(description = "警报代码", nullable = false)
	private String alertCode;

	@DataValidate(description = "警报名称", nullable = false)
	private String alertName;

	@DataValidate(description = "操作人代码", nullable = false)
	private String actorCode;

	@DataValidate(description = "操作人名称", nullable = true)
	private String actorName;

	@DataValidate(description = "操作时间", nullable = false)
	@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	private Date actionDateTime;

	@DataValidate(description = "操作类型代码", nullable = false)
	private String actionTypeCode;

	@DataValidate(description = "操作类型名称", nullable = true)
	private String actionTypeName;

	@DataValidate(description = "操作备注", nullable = true)
	private String actionMemo;

	public AlertAction() {

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
	 * @return the actorCode
	 */
	public String getActorCode() {
		return actorCode;
	}

	/**
	 * @param actorCode
	 *            the actorCode to set
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
	 * @param actorName
	 *            the actorName to set
	 */
	public void setActorName(String actorName) {
		this.actorName = actorName;
	}

	/**
	 * @return the actionDateTime
	 */
	public Date getActionDateTime() {
		return actionDateTime;
	}

	/**
	 * @param actionDateTime
	 *            the actionDateTime to set
	 */
	public void setActionDateTime(Date actionDateTime) {
		this.actionDateTime = actionDateTime;
	}

	/**
	 * @return the actionTypeCode
	 */
	public String getActionTypeCode() {
		return actionTypeCode;
	}

	/**
	 * @param actionTypeCode
	 *            the actionTypeCode to set
	 */
	public void setActionTypeCode(String actionTypeCode) {
		this.actionTypeCode = actionTypeCode;
	}

	/**
	 * @return the actionTypeName
	 */
	public String getActionTypeName() {
		return actionTypeName;
	}

	/**
	 * @param actionTypeName
	 *            the actionTypeName to set
	 */
	public void setActionTypeName(String actionTypeName) {
		this.actionTypeName = actionTypeName;
	}

	/**
	 * @return the actionMemo
	 */
	public String getActionMemo() {
		return actionMemo;
	}

	/**
	 * @param actionMemo
	 *            the actionMemo to set
	 */
	public void setActionMemo(String actionMemo) {
		this.actionMemo = actionMemo;
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
		result = prime * result + ((actionDateTime == null) ? 0 : actionDateTime.hashCode());
		result = prime * result + ((actionMemo == null) ? 0 : actionMemo.hashCode());
		result = prime * result + ((actionTypeCode == null) ? 0 : actionTypeCode.hashCode());
		result = prime * result + ((actionTypeName == null) ? 0 : actionTypeName.hashCode());
		result = prime * result + ((actorCode == null) ? 0 : actorCode.hashCode());
		result = prime * result + ((actorName == null) ? 0 : actorName.hashCode());
		result = prime * result + ((alertCode == null) ? 0 : alertCode.hashCode());
		result = prime * result + ((alertName == null) ? 0 : alertName.hashCode());
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
		if (!(obj instanceof AlertAction)) {
			return false;
		}
		AlertAction other = (AlertAction) obj;
		if (actionDateTime == null) {
			if (other.actionDateTime != null) {
				return false;
			}
		} else if (!actionDateTime.equals(other.actionDateTime)) {
			return false;
		}
		if (actionMemo == null) {
			if (other.actionMemo != null) {
				return false;
			}
		} else if (!actionMemo.equals(other.actionMemo)) {
			return false;
		}
		if (actionTypeCode == null) {
			if (other.actionTypeCode != null) {
				return false;
			}
		} else if (!actionTypeCode.equals(other.actionTypeCode)) {
			return false;
		}
		if (actionTypeName == null) {
			if (other.actionTypeName != null) {
				return false;
			}
		} else if (!actionTypeName.equals(other.actionTypeName)) {
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
		if (alertCode == null) {
			if (other.alertCode != null) {
				return false;
			}
		} else if (!alertCode.equals(other.alertCode)) {
			return false;
		}
		if (alertName == null) {
			if (other.alertName != null) {
				return false;
			}
		} else if (!alertName.equals(other.alertName)) {
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
		return "AlertAction [serialNo=" + serialNo + ", alertCode=" + alertCode + ", alertName=" + alertName
				+ ", actorCode=" + actorCode + ", actorName=" + actorName + ", actionDateTime=" + actionDateTime
				+ ", actionTypeCode=" + actionTypeCode + ", actionTypeName=" + actionTypeName + ", actionMemo="
				+ actionMemo + "]";
	}

}
