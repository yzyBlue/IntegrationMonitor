const LocationConfig={
	localhost:"",
	develop:"http://localhost:8080",
	production:"http://172.16.100.64:8888",
};

const serverUrl=LocationConfig.localhost;

const IntegrationService={
	MessageEventService:{
		importMessageEvent:serverUrl+'/integration-monitor/message-event/import',
		queryMessageEventByMap:serverUrl+'/integration-monitor/message-event/query',
		processMessageEvent:serverUrl+'/integration-monitor/message-event/process',
		getMirthCorrelatedMessage:serverUrl+'/integration-monitor/message-event/mirthmessage',
		fingMessageById:serverUrl+'/integration-monitor/message-event/message?sequenceId='
	},
	AlertService:{
		updateAlert:serverUrl+'/integration-monitor/inte-alert/alert',
		deleteAlertByCode:serverUrl+'/integration-monitor/inte-alert/alert?alertCode=',
		findAlertByMap:serverUrl+'/integration-monitor/inte-alert/list',
		getMirthCorrelatedMessage:serverUrl+'/integration-monitor/inte-alert/alert/mirthmessage?alertCode=',
	},
	MailService:{
		notifyPersonEmail:serverUrl+'/integration-monitor/notify/mail/'
	},
	MessageStatisticService:{
		getAllMessageStatistic:serverUrl+'/integration-monitor/message-statistic/all/',
		getStatisticByDate:serverUrl+'/integration-monitor/message-statistic/statistic/',
		getStatisticList:serverUrl+'/integration-monitor/message-statistic/list/'
	},
	MessageTypeService:{
		addMessageType:serverUrl+'/integration-monitor/message-type/manage/',
		updateMessageType:serverUrl+'/integration-monitor/message-type/manage/',
		deleteMessageType:serverUrl+'/integration-monitor/message-type/manage/',
		findMsgTypeByMap:serverUrl+'/integration-monitor/message-type/list/',
		findMessageTypeById:serverUrl+'/integration-monitor/message-type/'
	},
	UserService:{
		validateUserInfo:serverUrl+'/integration-monitor/user/validate',
		registerUser:serverUrl+'/integration-monitor/user/manage',
		updateUserInfo:serverUrl+'/integration-monitor/user/manage',
		findUserByUserName:serverUrl+'/integration-monitor/user/',
		findUserByCondition:serverUrl+'/integration-monitor/user/list',
		deleteUserByUserName:serverUrl+'/integration-monitor/user/'
	},
	TransactionService:{
		registerTransactoin:serverUrl+'/integration-monitor/transactioninfo/transaction',
		updateTransactoin:serverUrl+'/integration-monitor/transactioninfo/transaction',
		findAllTransactoin:serverUrl+'/integration-monitor/transactioninfo/all',
		findTransactoinByCode:serverUrl+'/integration-monitor/transactioninfo/transaction?transCode=',
		deleteTransactoinByCode:serverUrl+'/integration-monitor/transactioninfo/transaction?transCode=',
		findTransByCondition:serverUrl+'/integration-monitor/transactioninfo/list'
	}
};
export default IntegrationService;