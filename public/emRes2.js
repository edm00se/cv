var app = angular.module('myApp', [
	//'ui.router'
	'ngRoute'
])
	/*
	.config(function ($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'templates/home.html'
			})
			.state('work', {
				url: '/work',
				templateUrl: 'templates/work.html'
			})
	})
	*/
	.config(function ($routeProvider, $locationProvider){
		$routeProvider
		   .when('/', {
		    templateUrl: 'templates/contact.html',
		  })
		  .when('/work', {
		    templateUrl: 'templates/work.html',
		  })
		  .when('/education', {
		  	templateUrl: 'templates/education.html'
		  })
		  .when('/qualifications', {
		  	templateUrl: 'templates/qualifications.html'
		  })
		  .when('/progression', {
		  	templateUrl: 'templates/progression.html'
		  })
		  .when('/interests', {
		  	templateUrl: 'templates/interests.html'
		  })
		  .otherwise('/contact');
	})
	.factory('ResFactory', ['$http', function($http) {
    	return  $http.get('EricMcCormick.json',{ cache: true });
	}])
	.controller('MainCtrl',function ($scope, $route, $routeParams, $location, ResFactory){
		ResFactory.success(function(data, status, headers, config){
			$scope.myName = data.nameBlock;
	        $scope.myJobs = data.work;
	        $scope.myEd = data.education;
	        $scope.myQual = data.qualifications;
	        $scope.myProg = data.progression;
	        $scope.myInt = data.interests;
	        $scope.mySocial = data.social;
		});
		$scope.isActive = function(route) {
	    	return route === $location.path();
	    }
	});