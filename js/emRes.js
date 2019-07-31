var app = angular
  .module('myApp', [])
  .factory('myFactory', [
    '$http',
    function($http) {
      return $http.get('EricMcCormick.json', { cache: true });
    }
  ])
  .controller('myCtrl', function($scope, myFactory) {
    myFactory.then(function(res) {
      var data = res.data;
      $scope.myName = data.nameBlock;
      $scope.myJobs = data.work;
      $scope.myEd = data.education;
      $scope.myQual = data.qualifications;
      $scope.myProg = data.progression;
      $scope.myInt = data.interests;
      $scope.mySocial = data.social;
    }).catch(function(err){
      console.error(err);
    });
  });
