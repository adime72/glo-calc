GloCalc.controller("NavCtrl", function ($scope, activeUser) {
    
    //$scope.isLoggedIn = activeUser.isLoggedIn();
    

    $scope.isLoggedIn = function() {
        console.log("is loggedIn")
        return activeUser.isLoggedIn();
    };
});