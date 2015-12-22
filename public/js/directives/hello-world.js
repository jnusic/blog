//js/directives/hello-world.js
angular.module('helloWorldDirective',[])
	.directive('helloWorld', function() {
		return {
			template: "This is the hello world directive"
		};
	});