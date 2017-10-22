export class MainController {
	constructor($http) {
		'ngInject';
		this.$http = $http;
		this.getUserInfo();
	}

	getUserInfo() {
		var vm = this;
		this.$http.get('http://localhost:4000/dashboard/').then(function(result) {
			if (!result.data) {
				window.location = "/#/";
			} else {
				console.log(result);
				vm.user = result.data;
			}
		});
	}
}
