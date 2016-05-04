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
 * @description Web service information object
 */
public class ServiceStatusInfo implements Serializable{

	private static final long serialVersionUID = 5374815574642257490L;

	private long serialNo;
	
	private String serviceCode;
	
	private String serviceFunName;
	
	private String serviceFunType;
	
	private String serviceDefineUrl;
	
	private String serviceResponseTime;
	
	private String serviceThroughPut;
	
	private String errorRate;
	
	@JSONField(format="yyyy-MM-dd HH:mm:ss")
	private Date recordDate;
	
	public ServiceStatusInfo() {
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
	 * @return the serviceCode
	 */
	public String getServiceCode() {
		return serviceCode;
	}

	/**
	 * @param serviceCode the serviceCode to set
	 */
	public void setServiceCode(String serviceCode) {
		this.serviceCode = serviceCode;
	}

	/**
	 * @return the serviceFunName
	 */
	public String getServiceFunName() {
		return serviceFunName;
	}

	/**
	 * @param serviceFunName the serviceFunName to set
	 */
	public void setServiceFunName(String serviceFunName) {
		this.serviceFunName = serviceFunName;
	}

	/**
	 * @return the serviceFunType
	 */
	public String getServiceFunType() {
		return serviceFunType;
	}

	/**
	 * @param serviceFunType the serviceFunType to set
	 */
	public void setServiceFunType(String serviceFunType) {
		this.serviceFunType = serviceFunType;
	}

	/**
	 * @return the serviceDefineUrl
	 */
	public String getServiceDefineUrl() {
		return serviceDefineUrl;
	}

	/**
	 * @param serviceDefineUrl the serviceDefineUrl to set
	 */
	public void setServiceDefineUrl(String serviceDefineUrl) {
		this.serviceDefineUrl = serviceDefineUrl;
	}

	/**
	 * @return the serviceResponseTime
	 */
	public String getServiceResponseTime() {
		return serviceResponseTime;
	}

	/**
	 * @param serviceResponseTime the serviceResponseTime to set
	 */
	public void setServiceResponseTime(String serviceResponseTime) {
		this.serviceResponseTime = serviceResponseTime;
	}

	/**
	 * @return the serviceThroughPut
	 */
	public String getServiceThroughPut() {
		return serviceThroughPut;
	}

	/**
	 * @param serviceThroughPut the serviceThroughPut to set
	 */
	public void setServiceThroughPut(String serviceThroughPut) {
		this.serviceThroughPut = serviceThroughPut;
	}

	/**
	 * @return the errorRate
	 */
	public String getErrorRate() {
		return errorRate;
	}

	/**
	 * @param errorRate the errorRate to set
	 */
	public void setErrorRate(String errorRate) {
		this.errorRate = errorRate;
	}

	/**
	 * @return the recordDate
	 */
	public Date getRecordDate() {
		return recordDate;
	}

	/**
	 * @param recordDate the recordDate to set
	 */
	public void setRecordDate(Date recordDate) {
		this.recordDate = recordDate;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((errorRate == null) ? 0 : errorRate.hashCode());
		result = prime * result + ((recordDate == null) ? 0 : recordDate.hashCode());
		result = prime * result + (int) (serialNo ^ (serialNo >>> 32));
		result = prime * result + ((serviceCode == null) ? 0 : serviceCode.hashCode());
		result = prime * result + ((serviceDefineUrl == null) ? 0 : serviceDefineUrl.hashCode());
		result = prime * result + ((serviceFunName == null) ? 0 : serviceFunName.hashCode());
		result = prime * result + ((serviceFunType == null) ? 0 : serviceFunType.hashCode());
		result = prime * result + ((serviceResponseTime == null) ? 0 : serviceResponseTime.hashCode());
		result = prime * result + ((serviceThroughPut == null) ? 0 : serviceThroughPut.hashCode());
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
		if (!(obj instanceof ServiceStatusInfo)) {
			return false;
		}
		ServiceStatusInfo other = (ServiceStatusInfo) obj;
		if (errorRate == null) {
			if (other.errorRate != null) {
				return false;
			}
		} else if (!errorRate.equals(other.errorRate)) {
			return false;
		}
		if (recordDate == null) {
			if (other.recordDate != null) {
				return false;
			}
		} else if (!recordDate.equals(other.recordDate)) {
			return false;
		}
		if (serialNo != other.serialNo) {
			return false;
		}
		if (serviceCode == null) {
			if (other.serviceCode != null) {
				return false;
			}
		} else if (!serviceCode.equals(other.serviceCode)) {
			return false;
		}
		if (serviceDefineUrl == null) {
			if (other.serviceDefineUrl != null) {
				return false;
			}
		} else if (!serviceDefineUrl.equals(other.serviceDefineUrl)) {
			return false;
		}
		if (serviceFunName == null) {
			if (other.serviceFunName != null) {
				return false;
			}
		} else if (!serviceFunName.equals(other.serviceFunName)) {
			return false;
		}
		if (serviceFunType == null) {
			if (other.serviceFunType != null) {
				return false;
			}
		} else if (!serviceFunType.equals(other.serviceFunType)) {
			return false;
		}
		if (serviceResponseTime == null) {
			if (other.serviceResponseTime != null) {
				return false;
			}
		} else if (!serviceResponseTime.equals(other.serviceResponseTime)) {
			return false;
		}
		if (serviceThroughPut == null) {
			if (other.serviceThroughPut != null) {
				return false;
			}
		} else if (!serviceThroughPut.equals(other.serviceThroughPut)) {
			return false;
		}
		return true;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ServiceStatusInfo [serialNo=" + serialNo + ", serviceCode=" + serviceCode + ", serviceFunName="
				+ serviceFunName + ", serviceFunType=" + serviceFunType + ", serviceDefineUrl=" + serviceDefineUrl
				+ ", serviceResponseTime=" + serviceResponseTime + ", serviceThroughPut=" + serviceThroughPut
				+ ", errorRate=" + errorRate + ", recordDate=" + recordDate + "]";
	}

}
