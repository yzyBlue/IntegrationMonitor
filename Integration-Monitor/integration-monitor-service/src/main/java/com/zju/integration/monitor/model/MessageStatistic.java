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
 * @date 2016-06-23
 * @description Message Statistic object
 */
@XmlRootElement(name = "MessageStatistic")
public class MessageStatistic implements Serializable {

	private static final long serialVersionUID = -5734962167267057568L;

	private long serialNo;

	@DataValidate(description = "病人管理", nullable = true)
	private long pam;

	@DataValidate(description = "检查事务", nullable = true)
	private long exam;

	@DataValidate(description = "医嘱事务", nullable = true)
	private long order;

	@DataValidate(description = "摆药事务", nullable = true)
	private long drug;

	@DataValidate(description = "处方事务", nullable = true)
	private long presc;

	@DataValidate(description = "手术事务", nullable = true)
	private long surgery;

	@DataValidate(description = "检验事务", nullable = true)
	private long labTest;

	@DataValidate(description = "会诊事务", nullable = true)
	private long consult;

	@DataValidate(description = "诊断事务", nullable = true)
	private long diagnose;

	@DataValidate(description = "体征事务", nullable = true)
	private long physign;

	@DataValidate(description = "新生儿事务", nullable = true)
	private long newborn;

	@DataValidate(description = "病历事务", nullable = true)
	private long fpmr;

	@DataValidate(description = "病案首页", nullable = true)
	private long emr;

	@DataValidate(description = "所有事务", nullable = true)
	private long allCount;

	@DataValidate(description = "记录日期", nullable = true)
	@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	private Date recordDate;

	/**
	 * 
	 */
	public MessageStatistic() {
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
	 * @return the pam
	 */
	public long getPam() {
		return pam;
	}

	/**
	 * @param pam
	 *            the pam to set
	 */
	public void setPam(long pam) {
		this.pam = pam;
	}

	/**
	 * @return the exam
	 */
	public long getExam() {
		return exam;
	}

	/**
	 * @param exam
	 *            the exam to set
	 */
	public void setExam(long exam) {
		this.exam = exam;
	}

	/**
	 * @return the order
	 */
	public long getOrder() {
		return order;
	}

	/**
	 * @param order
	 *            the order to set
	 */
	public void setOrder(long order) {
		this.order = order;
	}

	/**
	 * @return the drug
	 */
	public long getDrug() {
		return drug;
	}

	/**
	 * @param drug
	 *            the drug to set
	 */
	public void setDrug(long drug) {
		this.drug = drug;
	}

	/**
	 * @return the presc
	 */
	public long getPresc() {
		return presc;
	}

	/**
	 * @param presc
	 *            the presc to set
	 */
	public void setPresc(long presc) {
		this.presc = presc;
	}

	/**
	 * @return the surgery
	 */
	public long getSurgery() {
		return surgery;
	}

	/**
	 * @param surgery
	 *            the surgery to set
	 */
	public void setSurgery(long surgery) {
		this.surgery = surgery;
	}

	/**
	 * @return the labTest
	 */
	public long getLabTest() {
		return labTest;
	}

	/**
	 * @param labTest
	 *            the labTest to set
	 */
	public void setLabTest(long labTest) {
		this.labTest = labTest;
	}

	/**
	 * @return the consult
	 */
	public long getConsult() {
		return consult;
	}

	/**
	 * @param consult
	 *            the consult to set
	 */
	public void setConsult(long consult) {
		this.consult = consult;
	}

	/**
	 * @return the diagnose
	 */
	public long getDiagnose() {
		return diagnose;
	}

	/**
	 * @param diagnose
	 *            the diagnose to set
	 */
	public void setDiagnose(long diagnose) {
		this.diagnose = diagnose;
	}

	/**
	 * @return the physign
	 */
	public long getPhysign() {
		return physign;
	}

	/**
	 * @param physign
	 *            the physign to set
	 */
	public void setPhysign(long physign) {
		this.physign = physign;
	}

	/**
	 * @return the newborn
	 */
	public long getNewborn() {
		return newborn;
	}

	/**
	 * @param newborn
	 *            the newborn to set
	 */
	public void setNewborn(long newborn) {
		this.newborn = newborn;
	}

	/**
	 * @return the fpmr
	 */
	public long getFpmr() {
		return fpmr;
	}

	/**
	 * @param fpmr
	 *            the fpmr to set
	 */
	public void setFpmr(long fpmr) {
		this.fpmr = fpmr;
	}

	/**
	 * @return the emr
	 */
	public long getEmr() {
		return emr;
	}

	/**
	 * @param emr
	 *            the emr to set
	 */
	public void setEmr(long emr) {
		this.emr = emr;
	}

	/**
	 * @return the allCount
	 */
	public long getAllCount() {
		return allCount;
	}

	/**
	 * @param allCount
	 *            the allCount to set
	 */
	public void setAllCount(long allCount) {
		this.allCount = allCount;
	}

	/**
	 * @return the recordDate
	 */
	public Date getRecordDate() {
		return recordDate;
	}

	/**
	 * @param recordDate
	 *            the recordDate to set
	 */
	public void setRecordDate(Date recordDate) {
		this.recordDate = recordDate;
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
		result = prime * result + (int) (allCount ^ (allCount >>> 32));
		result = prime * result + (int) (consult ^ (consult >>> 32));
		result = prime * result + (int) (diagnose ^ (diagnose >>> 32));
		result = prime * result + (int) (drug ^ (drug >>> 32));
		result = prime * result + (int) (emr ^ (emr >>> 32));
		result = prime * result + (int) (exam ^ (exam >>> 32));
		result = prime * result + (int) (fpmr ^ (fpmr >>> 32));
		result = prime * result + (int) (labTest ^ (labTest >>> 32));
		result = prime * result + (int) (newborn ^ (newborn >>> 32));
		result = prime * result + (int) (order ^ (order >>> 32));
		result = prime * result + (int) (pam ^ (pam >>> 32));
		result = prime * result + (int) (physign ^ (physign >>> 32));
		result = prime * result + (int) (presc ^ (presc >>> 32));
		result = prime * result + ((recordDate == null) ? 0 : recordDate.hashCode());
		result = prime * result + (int) (serialNo ^ (serialNo >>> 32));
		result = prime * result + (int) (surgery ^ (surgery >>> 32));
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
		if (!(obj instanceof MessageStatistic)) {
			return false;
		}
		MessageStatistic other = (MessageStatistic) obj;
		if (allCount != other.allCount) {
			return false;
		}
		if (consult != other.consult) {
			return false;
		}
		if (diagnose != other.diagnose) {
			return false;
		}
		if (drug != other.drug) {
			return false;
		}
		if (emr != other.emr) {
			return false;
		}
		if (exam != other.exam) {
			return false;
		}
		if (fpmr != other.fpmr) {
			return false;
		}
		if (labTest != other.labTest) {
			return false;
		}
		if (newborn != other.newborn) {
			return false;
		}
		if (order != other.order) {
			return false;
		}
		if (pam != other.pam) {
			return false;
		}
		if (physign != other.physign) {
			return false;
		}
		if (presc != other.presc) {
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
		if (surgery != other.surgery) {
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
		return "MessageStatistic [serialNo=" + serialNo + ", pam=" + pam + ", exam=" + exam + ", order=" + order
				+ ", drug=" + drug + ", presc=" + presc + ", surgery=" + surgery + ", labTest=" + labTest + ", consult="
				+ consult + ", diagnose=" + diagnose + ", physign=" + physign + ", newborn=" + newborn + ", fpmr="
				+ fpmr + ", emr=" + emr + ", allCount=" + allCount + ", recordDate=" + recordDate + "]";
	}

}
