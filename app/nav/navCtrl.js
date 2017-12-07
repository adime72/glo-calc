GloCalc.controller("navCtrl", function ($log, $scope, $http, $location, activeUser, user) {
    
    //$scope.isLoggedIn = activeUser.isLoggedIn();
    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };
   
    activeUser.login($scope.user);
    $scope.user = activeUser.get();
  
    $scope.getUserName = function() {
        if (isLoggedIn()) {
            return activeUser.get().name;
        } else {
            return "";
        }
    }
  
});