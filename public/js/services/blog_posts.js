//js/services/blog_posts.js
angular.module('blog_postsService', [])

	//super simple service
	//each function returns a blog_post object
	.factory('blog_posts', function($http){
		return {
			get : function() {
				return $http.get('/api/blog_posts');
			},
			create : function(formData) {
				return $http.post('/api/blog_posts', formData);
			},
			delete : function(id) {
				return $http.post('/api/blog_posts/' + id);
			}

		}
	});