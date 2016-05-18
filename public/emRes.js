var app = angular.module('myApp', [])

.factory('myFactory', ['$http', function($http) {
    //delete $http.defaults.headers.common['X-Requested-With'];
    return  $http.get('EricMcCormick.json',{ cache: true });
}])

.controller('myCtrl',function ($scope, myFactory){
    myFactory.success(function(data, status, headers, config){
        $scope.myName = data.nameBlock;
        $scope.myJobs = data.work;
        $scope.myEd = data.education;
        $scope.myQual = data.qualifications;
        $scope.myProg = data.progression;
        $scope.myInt = data.interests;
        $scope.mySocial = data.social;
    });
});
