GloCalc.controller("updateCtrl", function ($log, $scope, $http, $location, activeUser, user) {
    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    }

    console.log(activeUser.get());
});