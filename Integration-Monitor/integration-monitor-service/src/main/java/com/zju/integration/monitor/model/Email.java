/**
 * 
 */
package com.zju.integration.monitor.model;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

import com.zju.integration.monitor.util.DataValidate;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-06-29
 * @description Email information object
 */
@XmlRootElement(name = "Email")
public class Email implements Serializable {
	
	private static final long serialVersionUID = 1333324239057156652L;
	
	/**发件人**/
	@DataValidate(description = "发件人", nullable = false)
	private String sendAddress;
	
	/**收件人**/  
	@DataValidate(description = "收件人", nullable = false)
    private String receiveAddress;  
    
     /**抄送给**/  
	@DataValidate(description = "抄送", nullable = false)
    private String copyTo;  
    
     /**邮件主题**/  
	@DataValidate(description = "邮件主题", nullable = false)
    private String subject;
    
    /**邮件内容**/ 
	@DataValidate(description = "邮件内容", nullable = false)
    private String content; 
	
	/**事件索引**/ 
	@DataValidate(description = "事件索引", nullable = false)
	private String index;
    
     /**附件**/   
    //private MultipartFile[] attachment = new MultipartFile[0];
	public Email() {
		super();
	}
	/**
	 * @return the sendAddress
	 */
	public String getSendAddress() {
		return sendAddress;
	}
	/**
	 * @param sendAddress the sendAddress to set
	 */
	public void setSendAddress(String sendAddress) {
		this.sendAddress = sendAddress;
	}
	/**
	 * @return the receiveAddress
	 */
	public String getReceiveAddress() {
		return receiveAddress;
	}
	/**
	 * @param receiveAddress the receiveAddress to set
	 */
	public void setReceiveAddress(String receiveAddress) {
		this.receiveAddress = receiveAddress;
	}
	/**
	 * @return the copyTo
	 */
	public String getCopyTo() {
		return copyTo;
	}
	/**
	 * @param copyTo the copyTo to set
	 */
	public void setCopyTo(String copyTo) {
		this.copyTo = copyTo;
	}
	/**
	 * @return the subject
	 */
	public String getSubject() {
		return subject;
	}
	/**
	 * @param subject the subject to set
	 */
	public void setSubject(String subject) {
		this.subject = subject;
	}
	/**
	 * @return the content
	 */
	public String getContent() {
		return content;
	}
	/**
	 * @param content the content to set
	 */
	public void setContent(String content) {
		this.content = content;
	}
	/**
	 * @return the index
	 */
	public String getIndex() {
		return index;
	}
	/**
	 * @param index the index to set
	 */
	public void setIndex(String index) {
		this.index = index;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((content == null) ? 0 : content.hashCode());
		result = prime * result + ((copyTo == null) ? 0 : copyTo.hashCode());
		result = prime * result + ((index == null) ? 0 : index.hashCode());
		result = prime * result
				+ ((receiveAddress == null) ? 0 : receiveAddress.hashCode());
		result = prime * result
				+ ((sendAddress == null) ? 0 : sendAddress.hashCode());
		result = prime * result + ((subject == null) ? 0 : subject.hashCode());
		return result;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Email other = (Email) obj;
		if (content == null) {
			if (other.content != null)
				return false;
		} else if (!content.equals(other.content))
			return false;
		if (copyTo == null) {
			if (other.copyTo != null)
				return false;
		} else if (!copyTo.equals(other.copyTo))
			return false;
		if (index == null) {
			if (other.index != null)
				return false;
		} else if (!index.equals(other.index))
			return false;
		if (receiveAddress == null) {
			if (other.receiveAddress != null)
				return false;
		} else if (!receiveAddress.equals(other.receiveAddress))
			return false;
		if (sendAddress == null) {
			if (other.sendAddress != null)
				return false;
		} else if (!sendAddress.equals(other.sendAddress))
			return false;
		if (subject == null) {
			if (other.subject != null)
				return false;
		} else if (!subject.equals(other.subject))
			return false;
		return true;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Email [sendAddress=" + sendAddress + ", receiveAddress="
				+ receiveAddress + ", copyTo=" + copyTo + ", subject="
				+ subject + ", content=" + content + ", index=" + index + "]";
	}

}
