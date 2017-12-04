GloCalc.controller("signUpCtrl", function ($log, $scope, $http, $location, activeUser, User) {
    // 4 12 2017 
    //console.log(user);

    $scope.createUser = function () {
       $scope.user = new User($scope.name,$scope.address,$scope.email,$scope.pwd,$scope.radioSex,$scope.diabetesType,$scope.ratioCarbon,$scope.ratioCorrect);
    };

    activeUser.login($scope.user);

 //   $scope.users.push($scope.user);

    $location.path("/main");

   

});
