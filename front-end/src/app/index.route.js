export function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'main'
		})

		.state('register', {
			url: '/register',
			templateUrl: 'app/auth/register.html',
			controller: 'AuthController',
			controllerAs: 'auth'
		})

		.state('login', {
			url: '/login',
			templateUrl: 'app/auth/login.html',
			controller: 'AuthController',
			controllerAs: 'auth'
		});

	$urlRouterProvider.otherwise('/');
}
