angular.module('integration.monitor.i18n.en', ['pascalprecht.translate']).config(function($translateProvider) {
	$translateProvider.translations('en', {
		TITLE_WEBSITE : 'Integration Monitor Platform',
		LANGUAGE : 'Language',
		LANGUAGE_ZH : 'Chinese',
		LANGUAGE_EN : 'English',

		// Message box
		MESSAGE_BOX_BTN_YES : 'Yes',
		MESSAGE_BOX_BTN_NO : 'No',
		MESSAGE_BOX_BTN_OK : 'OK',
		MESSAGE_BOX_BTN_CANCEL : 'Cancel',

        // Login
        LOGIN :'Login',
        EMAIL :'Email',
        PASSWORD:'Pass Word',
        USERNAME:'User Name',
        AUTOLOGIN:'AutoLogin',
        FORGET_PWD:'forget password？',
	});
});



