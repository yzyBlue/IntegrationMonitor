package com.zju.integration.monitor.util;


import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpInputMessage;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.converter.AbstractHttpMessageConverter;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.util.StreamUtils;

public class UTF8StringHttpMessageConverter extends AbstractHttpMessageConverter<String> {
	public static final Charset DEFAULT_CHARSET = Charset.forName("UTF-8");

	private final Charset defaultCharset;

	private final List<Charset> availableCharsets;

	private boolean writeAcceptCharset = true;

	public UTF8StringHttpMessageConverter() {
		this(DEFAULT_CHARSET);
	}

	public UTF8StringHttpMessageConverter(Charset defaultCharset) {
		super(new MediaType("text", "plain", defaultCharset), MediaType.ALL);
		this.defaultCharset = defaultCharset;
		this.availableCharsets = new ArrayList<Charset>(Charset.availableCharsets().values());
	}

	@Override
	protected boolean supports(Class<?> clazz) {
		// TODO Auto-generated method stub
		return String.class.equals(clazz);
	}

	public void setWriteAcceptCharset(boolean writeAcceptCharset) {
		this.writeAcceptCharset = writeAcceptCharset;
	}

	@Override
	protected String readInternal(Class<? extends String> clazz, HttpInputMessage inputMessage)
			throws IOException, HttpMessageNotReadableException {
		// TODO Auto-generated method stub
		Charset charset = getContentTypeCharset(inputMessage.getHeaders().getContentType());
		return StreamUtils.copyToString(inputMessage.getBody(), charset);
	}

	@Override
	protected Long getContentLength(String s, MediaType contentType) {
		Charset charset = getContentTypeCharset(contentType);
		try {
			return (long) s.getBytes(charset.name()).length;
		} catch (UnsupportedEncodingException ex) {
			// should not occur
			throw new IllegalStateException(ex);
		}
	}

	@Override
	protected void writeInternal(String t, HttpOutputMessage outputMessage)
			throws IOException, HttpMessageNotWritableException {
		if (this.writeAcceptCharset) {
			outputMessage.getHeaders().setAcceptCharset(getAcceptedCharsets());
		}
		Charset charset = getContentTypeCharset(outputMessage.getHeaders().getContentType());
		StreamUtils.copy(t, charset, outputMessage.getBody());

	}

	protected List<Charset> getAcceptedCharsets() {
		return this.availableCharsets;
	}

	private Charset getContentTypeCharset(MediaType contentType) {
		if (contentType != null && contentType.getCharSet() != null) {
			return contentType.getCharSet();
		} else {
			return this.defaultCharset;
		}
	}
}
