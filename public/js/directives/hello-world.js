//js/directives/hello-world.js
angular.module('helloWorldDirective',[])
	.directive('helloWorld', function() {
			console.log("Test Directive");
			var testData = {"name" : "Jesus"};
			return {
				testData
			}
	});