GloCalc.controller("UpdateCtrl", function ($log, $scope, $http, $location, activeUser, user) {
  
  $scope.isLoggedIn = function() {
      return activeUser.isLoggedIn();
    }
//creating an object typed user 
    $scope.user = activeUser.get();

 //updating the details of the active user with the input of the update page
//after the submit going to main page
    $scope.updateUser = function() {
      activeUser.login($scope.user);
      $location.path("/main");
    }
// 6 12
  
//$scope.name = activeUser.get().name;
//$scope.address = activeUser.get().address;

});