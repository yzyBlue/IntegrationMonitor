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
 * @date 2016-04-29
 * @description Message Type information object
 */
@XmlRootElement(name = "MessageType")
public class MessageType implements Serializable {

	private static final long serialVersionUID = 9107473270454435651L;
	private long typeId;
	@DataValidate(description = "消息类型代码", nullable = false)
	private String mesageType;
	@DataValidate(description = "事件类型代码", nullable = false)
	private String eventType;
	@DataValidate(description = "控制代码", nullable = true)
	private String controlCode;
	@DataValidate(description = "事务类型代码", nullable = false)
	private String transCode;
	@DataValidate(description = "消息事件描述", nullable = true)
	private String messageTypeDesc;
	@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	@DataValidate(description = "创建时间", nullable = true)
	private Date createDate;

	/**
	 * 
	 */
	public MessageType() {
		super();
	}

	/**
	 * @return the typeId
	 */
	public long getTypeId() {
		return typeId;
	}

	/**
	 * @param typeId
	 *            the typeId to set
	 */
	public void setTypeId(long typeId) {
		this.typeId = typeId;
	}

	/**
	 * @return the mesageType
	 */
	public String getMesageType() {
		return mesageType;
	}

	/**
	 * @param mesageType
	 *            the mesageType to set
	 */
	public void setMesageType(String mesageType) {
		this.mesageType = mesageType;
	}

	/**
	 * @return the eventType
	 */
	public String getEventType() {
		return eventType;
	}

	/**
	 * @param eventType
	 *            the eventType to set
	 */
	public void setEventType(String eventType) {
		this.eventType = eventType;
	}

	/**
	 * @return the controlCode
	 */
	public String getControlCode() {
		return controlCode;
	}

	/**
	 * @param controlCode
	 *            the controlCode to set
	 */
	public void setControlCode(String controlCode) {
		this.controlCode = controlCode;
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
	 * @return the messageTypeDesc
	 */
	public String getMessageTypeDesc() {
		return messageTypeDesc;
	}

	/**
	 * @param messageTypeDesc
	 *            the messageTypeDesc to set
	 */
	public void setMessageTypeDesc(String messageTypeDesc) {
		this.messageTypeDesc = messageTypeDesc;
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
		result = prime * result + ((controlCode == null) ? 0 : controlCode.hashCode());
		result = prime * result + ((createDate == null) ? 0 : createDate.hashCode());
		result = prime * result + ((eventType == null) ? 0 : eventType.hashCode());
		result = prime * result + ((mesageType == null) ? 0 : mesageType.hashCode());
		result = prime * result + ((messageTypeDesc == null) ? 0 : messageTypeDesc.hashCode());
		result = prime * result + ((transCode == null) ? 0 : transCode.hashCode());
		result = prime * result + (int) (typeId ^ (typeId >>> 32));
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
		if (!(obj instanceof MessageType)) {
			return false;
		}
		MessageType other = (MessageType) obj;
		if (controlCode == null) {
			if (other.controlCode != null) {
				return false;
			}
		} else if (!controlCode.equals(other.controlCode)) {
			return false;
		}
		if (createDate == null) {
			if (other.createDate != null) {
				return false;
			}
		} else if (!createDate.equals(other.createDate)) {
			return false;
		}
		if (eventType == null) {
			if (other.eventType != null) {
				return false;
			}
		} else if (!eventType.equals(other.eventType)) {
			return false;
		}
		if (mesageType == null) {
			if (other.mesageType != null) {
				return false;
			}
		} else if (!mesageType.equals(other.mesageType)) {
			return false;
		}
		if (messageTypeDesc == null) {
			if (other.messageTypeDesc != null) {
				return false;
			}
		} else if (!messageTypeDesc.equals(other.messageTypeDesc)) {
			return false;
		}
		if (transCode == null) {
			if (other.transCode != null) {
				return false;
			}
		} else if (!transCode.equals(other.transCode)) {
			return false;
		}
		if (typeId != other.typeId) {
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
		return "MessageType [typeId=" + typeId + ", mesageType=" + mesageType + ", eventType=" + eventType
				+ ", controlCode=" + controlCode + ", transCode=" + transCode + ", messageTypeDesc=" + messageTypeDesc
				+ ", createDate=" + createDate + "]";
	}

}
