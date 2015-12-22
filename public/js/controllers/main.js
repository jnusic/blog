// js/controllers/main.js

angular.module('blog_postsController', [])

	.controller('mainController', function($scope,$http,blog_posts) {

		 $scope.formData = {};

	    // when landing on the page, get all blog_posts and show them
	    $http.get('/api/blog_posts')
	        .success(function(data) {
	            $scope.blog_posts = data;
	            console.log(data);
	        })
	        .error(function(data) {
	            console.log('Error: ' + data);
	        });

	    // when submitting the add form, send the text to the node API
	    $scope.createblog_post = function() {
	        $http.post('/api/blog_posts', $scope.formData)
	            .success(function(data) {
	                $scope.formData = {}; // clear the form so our user is ready to enter another
	                $scope.blog_posts = data;
	                console.log(data);
	            })
	            .error(function(data) {
	                console.log('Error: ' + data);
	            });
	    };

	    // delete a blog_post after checking it
	    $scope.deleteblog_post = function(id) {
	        $http.delete('/api/blog_posts/' + id)
	            .success(function(data) {
	                $scope.blog_posts = data;
	                console.log(data);
	            })
	            .error(function(data) {
	                console.log('Error: ' + data);
	            });
	    };

	    // test hello world function
	    $scope.helloWorld = function () {
	    	console.log("Sup. This is the hello world controller function"); 
	    };

	});