GloCalc.controller("signUpCtrl", function ($log, $scope, $http, $location, activeUser, user) {
    // 4 12 2017 
    //console.log(user);
    //==============================================================
    //the function do not get the parametrsfrom the active user.
    //===============================================================
    $scope.createUser = function () {
        
       $scope.user = new user($scope.newUser);
     
       if ($scope.user !=null) {
        activeUser.login($scope.user);
        $location.path("/main");
    }
     
    };

    

 //   $scope.users.push($scope.user);

    

});
