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
 * @date 2016-03-22
 * @description User information object
 */
@XmlRootElement(name = "User")
public class User implements Serializable {
	private static final long serialVersionUID = 991494537508911522L;
	private long userId;
	@DataValidate(description = "用户名", nullable = false)
	private String userName;
	@DataValidate(description = "密码", nullable = false)
	private String passWord;
	private String roleCode;
	@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	private Date createDate;
	private String creatorId;
	private String voidedBy;
	private String voidFlag;
	@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	private Date modifyDate;

	public User() {
		super();
	}

	public User(long userId, String userName, String passWord, String roleCode, Date createDate, String creatorId,
			String voidedBy, String voidFlag, Date modifyDate) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.passWord = passWord;
		this.roleCode = roleCode;
		this.createDate = createDate;
		this.creatorId = creatorId;
		this.voidedBy = voidedBy;
		this.voidFlag = voidFlag;
		this.modifyDate = modifyDate;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassWord() {
		return passWord;
	}

	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}

	public String getRoleCode() {
		return roleCode;
	}

	public void setRoleCode(String roleCode) {
		this.roleCode = roleCode;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getCreatorId() {
		if (creatorId == null) {
			creatorId = "";
		}
		creatorId = creatorId.trim();
		return creatorId;
	}

	public void setCreatorId(String creatorId) {
		this.creatorId = creatorId;
	}

	public String getVoidedBy() {
		if (voidedBy == null) {
			voidedBy = "";
		}
		voidedBy = voidedBy.trim();
		return voidedBy;
	}

	public void setVoidedBy(String voidedBy) {
		this.voidedBy = voidedBy;
	}

	public String getVoidFlag() {
		return voidFlag;
	}

	public void setVoidFlag(String voidFlag) {
		this.voidFlag = voidFlag;
	}

	public Date getModifyDate() {
		return modifyDate;
	}

	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", passWord=" + passWord + ", roleCode=" + roleCode
				+ ", createDate=" + createDate + ", creatorId=" + creatorId + ", voidedBy=" + voidedBy + ", voidFlag="
				+ voidFlag + ", modifyDate=" + modifyDate + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((createDate == null) ? 0 : createDate.hashCode());
		result = prime * result + ((creatorId == null) ? 0 : creatorId.hashCode());
		result = prime * result + ((modifyDate == null) ? 0 : modifyDate.hashCode());
		result = prime * result + ((passWord == null) ? 0 : passWord.hashCode());
		result = prime * result + ((roleCode == null) ? 0 : roleCode.hashCode());
		result = prime * result + (int) (userId ^ (userId >>> 32));
		result = prime * result + ((userName == null) ? 0 : userName.hashCode());
		result = prime * result + ((voidFlag == null) ? 0 : voidFlag.hashCode());
		result = prime * result + ((voidedBy == null) ? 0 : voidedBy.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (createDate == null) {
			if (other.createDate != null)
				return false;
		} else if (!createDate.equals(other.createDate))
			return false;
		if (creatorId == null) {
			if (other.creatorId != null)
				return false;
		} else if (!creatorId.equals(other.creatorId))
			return false;
		if (modifyDate == null) {
			if (other.modifyDate != null)
				return false;
		} else if (!modifyDate.equals(other.modifyDate))
			return false;
		if (passWord == null) {
			if (other.passWord != null)
				return false;
		} else if (!passWord.equals(other.passWord))
			return false;
		if (roleCode == null) {
			if (other.roleCode != null)
				return false;
		} else if (!roleCode.equals(other.roleCode))
			return false;
		if (userId != other.userId)
			return false;
		if (userName == null) {
			if (other.userName != null)
				return false;
		} else if (!userName.equals(other.userName))
			return false;
		if (voidFlag == null) {
			if (other.voidFlag != null)
				return false;
		} else if (!voidFlag.equals(other.voidFlag))
			return false;
		if (voidedBy == null) {
			if (other.voidedBy != null)
				return false;
		} else if (!voidedBy.equals(other.voidedBy))
			return false;
		return true;
	}
}
