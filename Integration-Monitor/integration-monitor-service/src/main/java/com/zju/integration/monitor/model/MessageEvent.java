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
 * @description Message Event Content information object
 */
public class MessageEvent implements Serializable {

	private static final long serialVersionUID = 6486053870579782040L;

	private long messageId;

	private String msgTypeId;

	private String msgSubType;

	private String msgSourceCode;

	private String channelCode;

	@JSONField(format="yyyy-MM-dd HH:mm:ss")
	private Date eventDateTime;

	private String patientId;

	private String visitId;

	private String messageIndex;

	private String messageSubIndex;

	private String transactionStatus;

	private String handleResultStatus;

	@JSONField(format="yyyy-MM-dd HH:mm:ss")
	private Date eventHandleTime;

	private String handleResultDesc;

	private String rawData;

	private String rawDataProtocol;

	private String isEncrypted;

	public MessageEvent() {
		super();
	}

	/**
	 * @return the messageId
	 */
	public long getMessageId() {
		return messageId;
	}

	/**
	 * @param messageId
	 *            the messageId to set
	 */
	public void setMessageId(long messageId) {
		this.messageId = messageId;
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
		result = prime * result + (int) (messageId ^ (messageId >>> 32));
		result = prime * result + ((messageIndex == null) ? 0 : messageIndex.hashCode());
		result = prime * result + ((messageSubIndex == null) ? 0 : messageSubIndex.hashCode());
		result = prime * result + ((msgSourceCode == null) ? 0 : msgSourceCode.hashCode());
		result = prime * result + ((msgSubType == null) ? 0 : msgSubType.hashCode());
		result = prime * result + ((msgTypeId == null) ? 0 : msgTypeId.hashCode());
		result = prime * result + ((patientId == null) ? 0 : patientId.hashCode());
		result = prime * result + ((rawData == null) ? 0 : rawData.hashCode());
		result = prime * result + ((rawDataProtocol == null) ? 0 : rawDataProtocol.hashCode());
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
		if (messageId != other.messageId) {
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
		return "MessageEvent [messageId=" + messageId + ", msgTypeId=" + msgTypeId + ", msgSubType=" + msgSubType
				+ ", msgSourceCode=" + msgSourceCode + ", channelCode=" + channelCode + ", eventDateTime="
				+ eventDateTime + ", patientId=" + patientId + ", visitId=" + visitId + ", messageIndex=" + messageIndex
				+ ", messageSubIndex=" + messageSubIndex + ", transactionStatus=" + transactionStatus
				+ ", handleResultStatus=" + handleResultStatus + ", eventHandleTime=" + eventHandleTime
				+ ", handleResultDesc=" + handleResultDesc + ", rawData=" + rawData + ", rawDataProtocol="
				+ rawDataProtocol + ", isEncrypted=" + isEncrypted + "]";
	}

}