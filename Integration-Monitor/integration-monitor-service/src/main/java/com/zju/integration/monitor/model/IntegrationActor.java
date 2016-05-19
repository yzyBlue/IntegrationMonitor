/**
 * 
 */
package com.zju.integration.monitor.model;

import java.io.Serializable;
import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;
import com.zju.integration.monitor.util.DataValidate;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description Integration Actor information object
 */
public class IntegrationActor implements Serializable {

	private static final long serialVersionUID = -1717210878365573058L;

	private long serialNo;
	@DataValidate(description = "集成角色代码", nullable = false)
	private String actorCode;

	@DataValidate(description = "集成角色名称", nullable = false)
	private String actorName;

	@DataValidate(description = "服务器地址", nullable = true)
	private String dataBaseAddress;

	@DataValidate(description = "接口服务地址", nullable = true)
	private String serviceAddress;

	@DataValidate(description = "HL7端口地址", nullable = true)
	private String llpAddress;

	@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	@DataValidate(description = "创建时间", nullable = true)
	private Date createDate;

	@DataValidate(description = "角色备注", nullable = true)
	private String memo;

	public IntegrationActor() {

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
	 * @return the dataBaseAddress
	 */
	public String getDataBaseAddress() {
		return dataBaseAddress;
	}

	/**
	 * @param dataBaseAddress
	 *            the dataBaseAddress to set
	 */
	public void setDataBaseAddress(String dataBaseAddress) {
		this.dataBaseAddress = dataBaseAddress;
	}

	/**
	 * @return the serviceAddress
	 */
	public String getServiceAddress() {
		return serviceAddress;
	}

	/**
	 * @param serviceAddress
	 *            the serviceAddress to set
	 */
	public void setServiceAddress(String serviceAddress) {
		this.serviceAddress = serviceAddress;
	}

	/**
	 * @return the llpAddress
	 */
	public String getLlpAddress() {
		return llpAddress;
	}

	/**
	 * @param llpAddress
	 *            the llpAddress to set
	 */
	public void setLlpAddress(String llpAddress) {
		this.llpAddress = llpAddress;
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

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((actorCode == null) ? 0 : actorCode.hashCode());
		result = prime * result + ((actorName == null) ? 0 : actorName.hashCode());
		result = prime * result + ((createDate == null) ? 0 : createDate.hashCode());
		result = prime * result + ((dataBaseAddress == null) ? 0 : dataBaseAddress.hashCode());
		result = prime * result + ((llpAddress == null) ? 0 : llpAddress.hashCode());
		result = prime * result + ((memo == null) ? 0 : memo.hashCode());
		result = prime * result + (int) (serialNo ^ (serialNo >>> 32));
		result = prime * result + ((serviceAddress == null) ? 0 : serviceAddress.hashCode());
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
		if (!(obj instanceof IntegrationActor)) {
			return false;
		}
		IntegrationActor other = (IntegrationActor) obj;
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
		if (createDate == null) {
			if (other.createDate != null) {
				return false;
			}
		} else if (!createDate.equals(other.createDate)) {
			return false;
		}
		if (dataBaseAddress == null) {
			if (other.dataBaseAddress != null) {
				return false;
			}
		} else if (!dataBaseAddress.equals(other.dataBaseAddress)) {
			return false;
		}
		if (llpAddress == null) {
			if (other.llpAddress != null) {
				return false;
			}
		} else if (!llpAddress.equals(other.llpAddress)) {
			return false;
		}
		if (memo == null) {
			if (other.memo != null) {
				return false;
			}
		} else if (!memo.equals(other.memo)) {
			return false;
		}
		if (serialNo != other.serialNo) {
			return false;
		}
		if (serviceAddress == null) {
			if (other.serviceAddress != null) {
				return false;
			}
		} else if (!serviceAddress.equals(other.serviceAddress)) {
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
		return "IntegrationActor [serialNo=" + serialNo + ", actorCode=" + actorCode + ", actorName=" + actorName
				+ ", dataBaseAddress=" + dataBaseAddress + ", serviceAddress=" + serviceAddress + ", llpAddress="
				+ llpAddress + ", createDate=" + createDate + ", memo=" + memo + "]";
	}

}
