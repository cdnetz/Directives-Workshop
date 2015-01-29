var app = angular.module('directiveWorkshop');


app.directive('pending', function($q) {
	return {
		restrict: 'EA',
		scope: {
			request: '&'
		},
	link: function(scope, elem, attrs){
		var spinIcon = angular.element('<img style = "height:25px" src="spinner.gif"></img>');
		spinIcon.hide();
		elem.after(spinIcon);

		var invokeRequest = function() {
			var dfd = $q.defer();

			dfd.resolve(scope.request());

			return dfd.promise;
		}

			elem.click(function(){	
				elem.hide();
				spinIcon.show();
				invokeRequest().then(function(){
					setTimeout(function() {
					elem.show();
					spinIcon.hide();
				}, 1000);
			  })
			})

	  	}
  	}
})