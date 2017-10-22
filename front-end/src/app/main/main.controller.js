export class MainController {
	constructor($timeout, webDevTec, toastr) {
		'ngInject';

		this.getUserInfo();
	}

	getUserInfo() {
		var vm = this;
		this.$http.get('http://localhost:5000/dashboard/').then(function(result) {
			if (!result.data) {
				window.location = "/#/";
			} else {
				vm.user = result.data;
			}
		});
	}
}
