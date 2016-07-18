package com.zju.integration.monitor.service;

import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.Callable;

import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.task.TaskExecutor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.zju.integration.monitor.dao.MessageEventDao;
import com.zju.integration.monitor.model.Email;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.MessageEvent;
@Service("mailSenderService")
public class MailSenderServiceImpl implements MailSenderService {

	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
	private MessageEventDao messageEventDao;

//	@Autowired
//	private TaskExecutor taskExecutor;


	/**
	 * 同步发送邮件
	 * 
	 * @param email
	 * @throws MessagingException
	 */
	@Override
	public IntegrationResult sendMailBySync(Email email) {
		IntegrationResult result = new IntegrationResult();
		try {
			Session session = Session.getDefaultInstance(new Properties());
			MimeMessage mime = new MimeMessage(session);
			MimeMessageHelper helper = new MimeMessageHelper(mime, true,
					"utf-8");
			helper.setFrom(email.getSendAddress());// 发件人
			helper.setTo(InternetAddress.parse(email.getReceiveAddress()));// 收件人
			helper.setBcc(email.getCopyTo());//抄送
			helper.setSubject(email.getSubject());// 邮件主题
			
			MessageEvent messageEvent=messageEventDao.getMessageById(Integer.valueOf(email.getIndex()));
			String content="【"+email.getSubject()+"】事件发生异常\n"
			+"病人号："+messageEvent.getPatientId()+"，就诊号："+messageEvent.getVisitId()+"，索引号："+messageEvent.getMessageIndex()+"\n"
			+"异常描述："+messageEvent.getHandleResultDesc();

			helper.setText(content, true);// true表示设定html格式
			mailSender.send(mime);
			result.setResultCode(IntegrationResult.SUCCESSCODE);
			result.setResultDesc("邮件发送成功");
		} catch (MessagingException e) {
			e.printStackTrace();
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc("邮件发送失败" + e.getCause().getMessage());
		}
		return result;
	}

	/**
	 * 异步发送邮件
	 * 
	 * @param email
	 */
//	public void sendMailByAsync(final Email email) {
//		taskExecutor.execute(new Runnable() {
//			public void run() {
//				try {
//					sendMailBySync(email);
//				} catch (Exception e) {
//				}
//			}
//		});
//	}

}
