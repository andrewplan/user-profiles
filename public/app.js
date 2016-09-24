angular.module('userProfiles', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home.html',
		controller: 'mainCtrl'
	})
	.state('settings', {
		url: '/settings',
		templateUrl: './views/settings.html',
		controller: 'settingsCtrl'
	})
	.state('profile', {
		url: '/profile',
		'templateUrl': './views/profile.html',
		controller: 'profileCtrl',
		resolve: {
			userInfo: function( friendService ) {
				return friendService.getFriends().then( results => results );
			}
		}
	});

	$urlRouterProvider.otherwise('/');

});
