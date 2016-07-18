const LocationConfig={
	localhost:"",
	develop:"http://localhost:8080",
	production:"http://172.16.100.64:8888",
	root:"/integration-monitor"
};

const serverUrl=LocationConfig.localhost;

const IntegrationService={
	rootUrl:serverUrl+LocationConfig.root+'/',
	MessageEventService:{
		importMessageEvent:serverUrl+LocationConfig.root+'/message-event/import',
		queryMessageEventByMap:serverUrl+LocationConfig.root+'/message-event/query',
		processMessageEvent:serverUrl+LocationConfig.root+'/message-event/process',
		getMirthCorrelatedMessage:serverUrl+LocationConfig.root+'/message-event/mirthmessage',
		fingMessageById:serverUrl+LocationConfig.root+'/message-event/message?sequenceId='
	},
	AlertService:{
		updateAlert:serverUrl+LocationConfig.root+'/inte-alert/alert',
		deleteAlertByCode:serverUrl+LocationConfig.root+'/inte-alert/alert?alertCode=',
		findAlertByMap:serverUrl+LocationConfig.root+'/inte-alert/list',
		getMirthCorrelatedMessage:serverUrl+LocationConfig.root+'/inte-alert/alert/mirthmessage?alertCode=',
		findAlertActionByCondition:serverUrl+LocationConfig.root+'/inte-alert/alert/action?alertCode=',
		getErrorAlertCount:serverUrl+LocationConfig.root+'/inte-alert/alert/count',
	},
	MailService:{
		notifyPersonEmail:serverUrl+LocationConfig.root+'/notify/mail/'
	},
	MessageStatisticService:{
		getAllMessageStatistic:serverUrl+LocationConfig.root+'/message-statistic/all/',
		getStatisticByDate:serverUrl+LocationConfig.root+'/message-statistic/statistic/',
		getStatisticList:serverUrl+LocationConfig.root+'/message-statistic/list/'
	},
	MessageTypeService:{
		addMessageType:serverUrl+LocationConfig.root+'/message-type/manage/',
		updateMessageType:serverUrl+LocationConfig.root+'/message-type/manage/',
		deleteMessageType:serverUrl+LocationConfig.root+'/message-type/manage/',
		findMsgTypeByMap:serverUrl+LocationConfig.root+'/message-type/list/',
		findMessageTypeById:serverUrl+LocationConfig.root+'/message-type/'
	},
	UserService:{
		validateUserInfo:serverUrl+LocationConfig.root+'/user/validate',
		registerUser:serverUrl+LocationConfig.root+'/user/manage',
		updateUserInfo:serverUrl+LocationConfig.root+'/user/manage',
		findUserByUserName:serverUrl+LocationConfig.root+'/user/',
		findUserByCondition:serverUrl+LocationConfig.root+'/user/list',
		deleteUserByUserName:serverUrl+LocationConfig.root+'/user/'
	},
	TransactionService:{
		registerTransactoin:serverUrl+LocationConfig.root+'/transactioninfo/transaction',
		updateTransactoin:serverUrl+LocationConfig.root+'/transactioninfo/transaction',
		findAllTransactoin:serverUrl+LocationConfig.root+'/transactioninfo/all',
		findTransactoinByCode:serverUrl+LocationConfig.root+'/transactioninfo/transaction?transCode=',
		deleteTransactoinByCode:serverUrl+LocationConfig.root+'/transactioninfo/transaction?transCode=',
		findTransByCondition:serverUrl+LocationConfig.root+'/transactioninfo/list'
	}
};
export default IntegrationService;