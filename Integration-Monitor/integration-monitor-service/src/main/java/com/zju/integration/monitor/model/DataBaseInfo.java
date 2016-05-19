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
 * @description Database information object
 */
@XmlRootElement(name = "DataBaseInfo")
public class DataBaseInfo implements Serializable {

	private static final long serialVersionUID = -5980970087262121171L;

	private long serialNo;

	private String databaseCode;

	private String databaseName;

	private String hostIp;

	private String instanceName;

	private String portNo;

	private String userName;

	private String passWord;

	@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	private Date createDate;

	/**
	 * 
	 */
	public DataBaseInfo() {
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
	 * @return the databaseCode
	 */
	public String getDatabaseCode() {
		return databaseCode;
	}

	/**
	 * @param databaseCode
	 *            the databaseCode to set
	 */
	public void setDatabaseCode(String databaseCode) {
		this.databaseCode = databaseCode;
	}

	/**
	 * @return the databaseName
	 */
	public String getDatabaseName() {
		return databaseName;
	}

	/**
	 * @param databaseName
	 *            the databaseName to set
	 */
	public void setDatabaseName(String databaseName) {
		this.databaseName = databaseName;
	}

	/**
	 * @return the hostIp
	 */
	public String getHostIp() {
		return hostIp;
	}

	/**
	 * @param hostIp
	 *            the hostIp to set
	 */
	public void setHostIp(String hostIp) {
		this.hostIp = hostIp;
	}

	/**
	 * @return the instanceName
	 */
	public String getInstanceName() {
		return instanceName;
	}

	/**
	 * @param instanceName
	 *            the instanceName to set
	 */
	public void setInstanceName(String instanceName) {
		this.instanceName = instanceName;
	}

	/**
	 * @return the portNo
	 */
	public String getPortNo() {
		return portNo;
	}

	/**
	 * @param portNo
	 *            the portNo to set
	 */
	public void setPortNo(String portNo) {
		this.portNo = portNo;
	}

	/**
	 * @return the userName
	 */
	public String getUserName() {
		return userName;
	}

	/**
	 * @param userName
	 *            the userName to set
	 */
	public void setUserName(String userName) {
		this.userName = userName;
	}

	/**
	 * @return the passWord
	 */
	public String getPassWord() {
		return passWord;
	}

	/**
	 * @param passWord
	 *            the passWord to set
	 */
	public void setPassWord(String passWord) {
		this.passWord = passWord;
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
		result = prime * result + ((createDate == null) ? 0 : createDate.hashCode());
		result = prime * result + ((databaseCode == null) ? 0 : databaseCode.hashCode());
		result = prime * result + ((databaseName == null) ? 0 : databaseName.hashCode());
		result = prime * result + ((hostIp == null) ? 0 : hostIp.hashCode());
		result = prime * result + ((instanceName == null) ? 0 : instanceName.hashCode());
		result = prime * result + ((passWord == null) ? 0 : passWord.hashCode());
		result = prime * result + ((portNo == null) ? 0 : portNo.hashCode());
		result = prime * result + (int) (serialNo ^ (serialNo >>> 32));
		result = prime * result + ((userName == null) ? 0 : userName.hashCode());
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
		if (!(obj instanceof DataBaseInfo)) {
			return false;
		}
		DataBaseInfo other = (DataBaseInfo) obj;
		if (createDate == null) {
			if (other.createDate != null) {
				return false;
			}
		} else if (!createDate.equals(other.createDate)) {
			return false;
		}
		if (databaseCode == null) {
			if (other.databaseCode != null) {
				return false;
			}
		} else if (!databaseCode.equals(other.databaseCode)) {
			return false;
		}
		if (databaseName == null) {
			if (other.databaseName != null) {
				return false;
			}
		} else if (!databaseName.equals(other.databaseName)) {
			return false;
		}
		if (hostIp == null) {
			if (other.hostIp != null) {
				return false;
			}
		} else if (!hostIp.equals(other.hostIp)) {
			return false;
		}
		if (instanceName == null) {
			if (other.instanceName != null) {
				return false;
			}
		} else if (!instanceName.equals(other.instanceName)) {
			return false;
		}
		if (passWord == null) {
			if (other.passWord != null) {
				return false;
			}
		} else if (!passWord.equals(other.passWord)) {
			return false;
		}
		if (portNo == null) {
			if (other.portNo != null) {
				return false;
			}
		} else if (!portNo.equals(other.portNo)) {
			return false;
		}
		if (serialNo != other.serialNo) {
			return false;
		}
		if (userName == null) {
			if (other.userName != null) {
				return false;
			}
		} else if (!userName.equals(other.userName)) {
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
		return "DataBaseInfo [serialNo=" + serialNo + ", databaseCode=" + databaseCode + ", databaseName="
				+ databaseName + ", hostIp=" + hostIp + ", instanceName=" + instanceName + ", portNo=" + portNo
				+ ", userName=" + userName + ", passWord=" + passWord + ", createDate=" + createDate + "]";
	}

}
