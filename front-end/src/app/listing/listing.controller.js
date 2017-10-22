export class ListingController {
	constructor($http) {
		'ngInject';
		this.$http = $http;

		this.getUserInfo();
	}

	addListing() {
		console.log("Function ran.");
		var vm = this;
		this.$http.post('http://localhost:4000/listing/add', {
			item: this.item
		}).then(function(result) {
			console.log(result);
		});
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
