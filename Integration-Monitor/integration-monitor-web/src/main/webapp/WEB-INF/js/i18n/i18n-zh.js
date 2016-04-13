angular.module('integration.monitor.i18n.zh', ['pascalprecht.translate']).config(function($translateProvider) {
    $translateProvider.translations('zh', {
        TITLE_WEBSITE: '集成监控平台',
        LANGUAGE: '语言',
        LANGUAGE_ZH: '中文',
        LANGUAGE_EN: '英文',

        // Message box
        MESSAGE_BOX_BTN_YES: '是',
        MESSAGE_BOX_BTN_NO: '否',
        MESSAGE_BOX_BTN_OK: '确定',
        MESSAGE_BOX_BTN_CANCEL: '取消',
        
        // Login
        LOGIN :'登陆',
        EMAIL :'邮箱',
        PASSWORD:'密码',
        USERNAME:'用户名',
        AUTOLOGIN:'自动登陆',
        FORGET_PWD:'忘记密码？',
        
        CENTER:'个人中心',
        CONSOLE:'控制台',
        LOGOUT:'退出',
    });
});
