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
 * @description Server Status information object
 */
public class ServerStatusInfo implements Serializable {

	private static final long serialVersionUID = 2879816244665711872L;

	private long serialNo;
	
	private String serverCode;
	
	private String serverName;
	
	private String serverIp;
	
	private String cpuUtilization;
	
	private String memoryUse;
	
	private String diskUse;
	
	private String ethernetStatus;
	@JSONField(format="yyyy-MM-dd HH:mm:ss")
	private Date createDate;
	
	/**
	 * 
	 */
	public ServerStatusInfo() {
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
	 * @return the serverCode
	 */
	public String getServerCode() {
		return serverCode;
	}

	/**
	 * @param serverCode the serverCode to set
	 */
	public void setServerCode(String serverCode) {
		this.serverCode = serverCode;
	}

	/**
	 * @return the serverName
	 */
	public String getServerName() {
		return serverName;
	}

	/**
	 * @param serverName the serverName to set
	 */
	public void setServerName(String serverName) {
		this.serverName = serverName;
	}

	/**
	 * @return the serverIp
	 */
	public String getServerIp() {
		return serverIp;
	}

	/**
	 * @param serverIp the serverIp to set
	 */
	public void setServerIp(String serverIp) {
		this.serverIp = serverIp;
	}

	/**
	 * @return the cpuUtilization
	 */
	public String getCpuUtilization() {
		return cpuUtilization;
	}

	/**
	 * @param cpuUtilization the cpuUtilization to set
	 */
	public void setCpuUtilization(String cpuUtilization) {
		this.cpuUtilization = cpuUtilization;
	}

	/**
	 * @return the memoryUse
	 */
	public String getMemoryUse() {
		return memoryUse;
	}

	/**
	 * @param memoryUse the memoryUse to set
	 */
	public void setMemoryUse(String memoryUse) {
		this.memoryUse = memoryUse;
	}

	/**
	 * @return the diskUse
	 */
	public String getDiskUse() {
		return diskUse;
	}

	/**
	 * @param diskUse the diskUse to set
	 */
	public void setDiskUse(String diskUse) {
		this.diskUse = diskUse;
	}

	/**
	 * @return the ethernetStatus
	 */
	public String getEthernetStatus() {
		return ethernetStatus;
	}

	/**
	 * @param ethernetStatus the ethernetStatus to set
	 */
	public void setEthernetStatus(String ethernetStatus) {
		this.ethernetStatus = ethernetStatus;
	}

	/**
	 * @return the createDate
	 */
	public Date getCreateDate() {
		return createDate;
	}

	/**
	 * @param createDate the createDate to set
	 */
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((cpuUtilization == null) ? 0 : cpuUtilization.hashCode());
		result = prime * result + ((createDate == null) ? 0 : createDate.hashCode());
		result = prime * result + ((diskUse == null) ? 0 : diskUse.hashCode());
		result = prime * result + ((ethernetStatus == null) ? 0 : ethernetStatus.hashCode());
		result = prime * result + ((memoryUse == null) ? 0 : memoryUse.hashCode());
		result = prime * result + (int) (serialNo ^ (serialNo >>> 32));
		result = prime * result + ((serverCode == null) ? 0 : serverCode.hashCode());
		result = prime * result + ((serverIp == null) ? 0 : serverIp.hashCode());
		result = prime * result + ((serverName == null) ? 0 : serverName.hashCode());
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
		if (!(obj instanceof ServerStatusInfo)) {
			return false;
		}
		ServerStatusInfo other = (ServerStatusInfo) obj;
		if (cpuUtilization == null) {
			if (other.cpuUtilization != null) {
				return false;
			}
		} else if (!cpuUtilization.equals(other.cpuUtilization)) {
			return false;
		}
		if (createDate == null) {
			if (other.createDate != null) {
				return false;
			}
		} else if (!createDate.equals(other.createDate)) {
			return false;
		}
		if (diskUse == null) {
			if (other.diskUse != null) {
				return false;
			}
		} else if (!diskUse.equals(other.diskUse)) {
			return false;
		}
		if (ethernetStatus == null) {
			if (other.ethernetStatus != null) {
				return false;
			}
		} else if (!ethernetStatus.equals(other.ethernetStatus)) {
			return false;
		}
		if (memoryUse == null) {
			if (other.memoryUse != null) {
				return false;
			}
		} else if (!memoryUse.equals(other.memoryUse)) {
			return false;
		}
		if (serialNo != other.serialNo) {
			return false;
		}
		if (serverCode == null) {
			if (other.serverCode != null) {
				return false;
			}
		} else if (!serverCode.equals(other.serverCode)) {
			return false;
		}
		if (serverIp == null) {
			if (other.serverIp != null) {
				return false;
			}
		} else if (!serverIp.equals(other.serverIp)) {
			return false;
		}
		if (serverName == null) {
			if (other.serverName != null) {
				return false;
			}
		} else if (!serverName.equals(other.serverName)) {
			return false;
		}
		return true;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ServerStatusInfo [serialNo=" + serialNo + ", serverCode=" + serverCode + ", serverName=" + serverName
				+ ", serverIp=" + serverIp + ", cpuUtilization=" + cpuUtilization + ", memoryUse=" + memoryUse
				+ ", diskUse=" + diskUse + ", ethernetStatus=" + ethernetStatus + ", createDate=" + createDate + "]";
	}

}
