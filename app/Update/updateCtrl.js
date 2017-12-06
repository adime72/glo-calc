GloCalc.controller("UpdateCtrl", function ($log, $scope, $http, $location, activeUser, user) {
  
  $scope.isLoggedIn = function() {
      return activeUser.isLoggedIn();
    }

    
// 6 12
  
//$scope.name = activeUser.get().name;
//$scope.address = activeUser.get().address;

});