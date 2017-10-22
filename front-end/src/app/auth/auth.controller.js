export class AuthController {
	constructor($auth, $http) {
		'ngInject';

		this.$http = $http;
		this.$auth = $auth;
	}

	register() {
		var vm = this;
		this.$http.post("http://localhost:4000/auth/register", {
			user: this.user
		}).then(function(token) {
			vm.$auth.setToken(token);
		});
	}

	login() {
		var vm = this;
		this.$http.post("http://localhost:4000/auth/login", {
			user: this.user
		}).then(function(token) {
			vm.$auth.setToken(token);
		});
	}
}
