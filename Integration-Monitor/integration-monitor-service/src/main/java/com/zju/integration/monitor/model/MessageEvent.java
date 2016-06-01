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
 * @description Message Event Content information object
 */
@XmlRootElement(name = "MessageEvent")
public class MessageEvent implements Serializable {

	private static final long serialVersionUID = 6486053870579782040L;

	private long sequenceId;
	@DataValidate(description = "事务类型代码", nullable = false)
	private String transCode;
	@DataValidate(description = "消息类型Id", nullable = false)
	private String msgTypeId;
	@DataValidate(description = "消息事件描述", nullable = true)
	private String msgTypeDesc;
	@DataValidate(description = "消息类型子代码", nullable = true)
	private String msgSubType;
	@DataValidate(description = "消息来源", nullable = false)
	private String msgSourceCode;
	@DataValidate(description = "通道ID", nullable = false)
	private String channelCode;
	@DataValidate(description = "源消息UID", nullable = false)
	private String sourceMsgUid;
	@DataValidate(description = "发生时间", nullable = false)
	@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	private Date eventDateTime;
	@DataValidate(description = "病人号", nullable = false)
	private String patientId;
	@DataValidate(description = "就诊号", nullable = false)
	private String visitId;
	@DataValidate(description = "消息索引号", nullable = false)
	private String messageIndex;
	@DataValidate(description = "消息子索引号", nullable = true)
	private String messageSubIndex;
	@DataValidate(description = "事务状态", nullable = true)
	private String transactionStatus;
	@DataValidate(description = "消息处理状态", nullable = false)
	private String handleResultStatus;
	@DataValidate(description = "消息处理时间", nullable = true)
	@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	private Date eventHandleTime;
	@DataValidate(description = "消息结果描述", nullable = true)
	private String handleResultDesc;
	@DataValidate(description = "消息源数据", nullable = true)
	private String rawData;
	@DataValidate(description = "消息协议", nullable = true)
	private String rawDataProtocol;
	@DataValidate(description = "消息加密", nullable = true)
	private String isEncrypted;

	public MessageEvent() {
		super();
	}

	/**
	 * @return the sequenceId
	 */
	public long getSequenceId() {
		return sequenceId;
	}

	/**
	 * @param sequenceId
	 *            the sequenceId to set
	 */
	public void setSequenceId(long sequenceId) {
		this.sequenceId = sequenceId;
	}

	/**
	 * @return the msgTypeId
	 */
	public String getMsgTypeId() {
		return msgTypeId;
	}

	/**
	 * @param msgTypeId
	 *            the msgTypeId to set
	 */
	public void setMsgTypeId(String msgTypeId) {
		this.msgTypeId = msgTypeId;
	}

	/**
	 * @return the msgSubType
	 */
	public String getMsgSubType() {
		return msgSubType;
	}

	/**
	 * @param msgSubType
	 *            the msgSubType to set
	 */
	public void setMsgSubType(String msgSubType) {
		this.msgSubType = msgSubType;
	}

	/**
	 * @return the msgSourceCode
	 */
	public String getMsgSourceCode() {
		return msgSourceCode;
	}

	/**
	 * @param msgSourceCode
	 *            the msgSourceCode to set
	 */
	public void setMsgSourceCode(String msgSourceCode) {
		this.msgSourceCode = msgSourceCode;
	}

	/**
	 * @return the channelCode
	 */
	public String getChannelCode() {
		return channelCode;
	}

	/**
	 * @param channelCode
	 *            the channelCode to set
	 */
	public void setChannelCode(String channelCode) {
		this.channelCode = channelCode;
	}

	/**
	 * @return the sourceMsgUid
	 */
	public String getSourceMsgUid() {
		return sourceMsgUid;
	}

	/**
	 * @param sourceMsgUid
	 *            the sourceMsgUid to set
	 */
	public void setSourceMsgUid(String sourceMsgUid) {
		this.sourceMsgUid = sourceMsgUid;
	}

	/**
	 * @return the eventDateTime
	 */
	public Date getEventDateTime() {
		return eventDateTime;
	}

	/**
	 * @param eventDateTime
	 *            the eventDateTime to set
	 */
	public void setEventDateTime(Date eventDateTime) {
		this.eventDateTime = eventDateTime;
	}

	/**
	 * @return the patientId
	 */
	public String getPatientId() {
		return patientId;
	}

	/**
	 * @param patientId
	 *            the patientId to set
	 */
	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}

	/**
	 * @return the visitId
	 */
	public String getVisitId() {
		return visitId;
	}

	/**
	 * @param visitId
	 *            the visitId to set
	 */
	public void setVisitId(String visitId) {
		this.visitId = visitId;
	}

	/**
	 * @return the messageIndex
	 */
	public String getMessageIndex() {
		return messageIndex;
	}

	/**
	 * @param messageIndex
	 *            the messageIndex to set
	 */
	public void setMessageIndex(String messageIndex) {
		this.messageIndex = messageIndex;
	}

	/**
	 * @return the messageSubIndex
	 */
	public String getMessageSubIndex() {
		return messageSubIndex;
	}

	/**
	 * @param messageSubIndex
	 *            the messageSubIndex to set
	 */
	public void setMessageSubIndex(String messageSubIndex) {
		this.messageSubIndex = messageSubIndex;
	}

	/**
	 * @return the transactionStatus
	 */
	public String getTransactionStatus() {
		return transactionStatus;
	}

	/**
	 * @param transactionStatus
	 *            the transactionStatus to set
	 */
	public void setTransactionStatus(String transactionStatus) {
		this.transactionStatus = transactionStatus;
	}

	/**
	 * @return the handleResultStatus
	 */
	public String getHandleResultStatus() {
		return handleResultStatus;
	}

	/**
	 * @param handleResultStatus
	 *            the handleResultStatus to set
	 */
	public void setHandleResultStatus(String handleResultStatus) {
		this.handleResultStatus = handleResultStatus;
	}

	/**
	 * @return the eventHandleTime
	 */
	public Date getEventHandleTime() {
		return eventHandleTime;
	}

	/**
	 * @param eventHandleTime
	 *            the eventHandleTime to set
	 */
	public void setEventHandleTime(Date eventHandleTime) {
		this.eventHandleTime = eventHandleTime;
	}

	/**
	 * @return the handleResultDesc
	 */
	public String getHandleResultDesc() {
		return handleResultDesc;
	}

	/**
	 * @param handleResultDesc
	 *            the handleResultDesc to set
	 */
	public void setHandleResultDesc(String handleResultDesc) {
		this.handleResultDesc = handleResultDesc;
	}

	/**
	 * @return the rawData
	 */
	public String getRawData() {
		return rawData;
	}

	/**
	 * @param rawData
	 *            the rawData to set
	 */
	public void setRawData(String rawData) {
		this.rawData = rawData;
	}

	/**
	 * @return the rawDataProtocol
	 */
	public String getRawDataProtocol() {
		return rawDataProtocol;
	}

	/**
	 * @param rawDataProtocol
	 *            the rawDataProtocol to set
	 */
	public void setRawDataProtocol(String rawDataProtocol) {
		this.rawDataProtocol = rawDataProtocol;
	}

	/**
	 * @return the isEncrypted
	 */
	public String getIsEncrypted() {
		return isEncrypted;
	}

	/**
	 * @param isEncrypted
	 *            the isEncrypted to set
	 */
	public void setIsEncrypted(String isEncrypted) {
		this.isEncrypted = isEncrypted;
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
	 * @return the msgTypeDesc
	 */
	public String getMsgTypeDesc() {
		return msgTypeDesc;
	}

	/**
	 * @param msgTypeDesc
	 *            the msgTypeDesc to set
	 */
	public void setMsgTypeDesc(String msgTypeDesc) {
		this.msgTypeDesc = msgTypeDesc;
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
		result = prime * result + ((channelCode == null) ? 0 : channelCode.hashCode());
		result = prime * result + ((eventDateTime == null) ? 0 : eventDateTime.hashCode());
		result = prime * result + ((eventHandleTime == null) ? 0 : eventHandleTime.hashCode());
		result = prime * result + ((handleResultDesc == null) ? 0 : handleResultDesc.hashCode());
		result = prime * result + ((handleResultStatus == null) ? 0 : handleResultStatus.hashCode());
		result = prime * result + ((isEncrypted == null) ? 0 : isEncrypted.hashCode());
		result = prime * result + ((messageIndex == null) ? 0 : messageIndex.hashCode());
		result = prime * result + ((messageSubIndex == null) ? 0 : messageSubIndex.hashCode());
		result = prime * result + ((msgSourceCode == null) ? 0 : msgSourceCode.hashCode());
		result = prime * result + ((msgSubType == null) ? 0 : msgSubType.hashCode());
		result = prime * result + ((msgTypeDesc == null) ? 0 : msgTypeDesc.hashCode());
		result = prime * result + ((msgTypeId == null) ? 0 : msgTypeId.hashCode());
		result = prime * result + ((patientId == null) ? 0 : patientId.hashCode());
		result = prime * result + ((rawData == null) ? 0 : rawData.hashCode());
		result = prime * result + ((rawDataProtocol == null) ? 0 : rawDataProtocol.hashCode());
		result = prime * result + (int) (sequenceId ^ (sequenceId >>> 32));
		result = prime * result + ((sourceMsgUid == null) ? 0 : sourceMsgUid.hashCode());
		result = prime * result + ((transCode == null) ? 0 : transCode.hashCode());
		result = prime * result + ((transactionStatus == null) ? 0 : transactionStatus.hashCode());
		result = prime * result + ((visitId == null) ? 0 : visitId.hashCode());
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
		if (!(obj instanceof MessageEvent)) {
			return false;
		}
		MessageEvent other = (MessageEvent) obj;
		if (channelCode == null) {
			if (other.channelCode != null) {
				return false;
			}
		} else if (!channelCode.equals(other.channelCode)) {
			return false;
		}
		if (eventDateTime == null) {
			if (other.eventDateTime != null) {
				return false;
			}
		} else if (!eventDateTime.equals(other.eventDateTime)) {
			return false;
		}
		if (eventHandleTime == null) {
			if (other.eventHandleTime != null) {
				return false;
			}
		} else if (!eventHandleTime.equals(other.eventHandleTime)) {
			return false;
		}
		if (handleResultDesc == null) {
			if (other.handleResultDesc != null) {
				return false;
			}
		} else if (!handleResultDesc.equals(other.handleResultDesc)) {
			return false;
		}
		if (handleResultStatus == null) {
			if (other.handleResultStatus != null) {
				return false;
			}
		} else if (!handleResultStatus.equals(other.handleResultStatus)) {
			return false;
		}
		if (isEncrypted == null) {
			if (other.isEncrypted != null) {
				return false;
			}
		} else if (!isEncrypted.equals(other.isEncrypted)) {
			return false;
		}
		if (messageIndex == null) {
			if (other.messageIndex != null) {
				return false;
			}
		} else if (!messageIndex.equals(other.messageIndex)) {
			return false;
		}
		if (messageSubIndex == null) {
			if (other.messageSubIndex != null) {
				return false;
			}
		} else if (!messageSubIndex.equals(other.messageSubIndex)) {
			return false;
		}
		if (msgSourceCode == null) {
			if (other.msgSourceCode != null) {
				return false;
			}
		} else if (!msgSourceCode.equals(other.msgSourceCode)) {
			return false;
		}
		if (msgSubType == null) {
			if (other.msgSubType != null) {
				return false;
			}
		} else if (!msgSubType.equals(other.msgSubType)) {
			return false;
		}
		if (msgTypeDesc == null) {
			if (other.msgTypeDesc != null) {
				return false;
			}
		} else if (!msgTypeDesc.equals(other.msgTypeDesc)) {
			return false;
		}
		if (msgTypeId == null) {
			if (other.msgTypeId != null) {
				return false;
			}
		} else if (!msgTypeId.equals(other.msgTypeId)) {
			return false;
		}
		if (patientId == null) {
			if (other.patientId != null) {
				return false;
			}
		} else if (!patientId.equals(other.patientId)) {
			return false;
		}
		if (rawData == null) {
			if (other.rawData != null) {
				return false;
			}
		} else if (!rawData.equals(other.rawData)) {
			return false;
		}
		if (rawDataProtocol == null) {
			if (other.rawDataProtocol != null) {
				return false;
			}
		} else if (!rawDataProtocol.equals(other.rawDataProtocol)) {
			return false;
		}
		if (sequenceId != other.sequenceId) {
			return false;
		}
		if (sourceMsgUid == null) {
			if (other.sourceMsgUid != null) {
				return false;
			}
		} else if (!sourceMsgUid.equals(other.sourceMsgUid)) {
			return false;
		}
		if (transCode == null) {
			if (other.transCode != null) {
				return false;
			}
		} else if (!transCode.equals(other.transCode)) {
			return false;
		}
		if (transactionStatus == null) {
			if (other.transactionStatus != null) {
				return false;
			}
		} else if (!transactionStatus.equals(other.transactionStatus)) {
			return false;
		}
		if (visitId == null) {
			if (other.visitId != null) {
				return false;
			}
		} else if (!visitId.equals(other.visitId)) {
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
		return "MessageEvent [sequenceId=" + sequenceId + ", transCode=" + transCode + ", msgTypeId=" + msgTypeId
				+ ", msgTypeDesc=" + msgTypeDesc + ", msgSubType=" + msgSubType + ", msgSourceCode=" + msgSourceCode
				+ ", channelCode=" + channelCode + ", sourceMsgUid=" + sourceMsgUid + ", eventDateTime=" + eventDateTime
				+ ", patientId=" + patientId + ", visitId=" + visitId + ", messageIndex=" + messageIndex
				+ ", messageSubIndex=" + messageSubIndex + ", transactionStatus=" + transactionStatus
				+ ", handleResultStatus=" + handleResultStatus + ", eventHandleTime=" + eventHandleTime
				+ ", handleResultDesc=" + handleResultDesc + ", rawData=" + rawData + ", rawDataProtocol="
				+ rawDataProtocol + ", isEncrypted=" + isEncrypted + "]";
	}

}
