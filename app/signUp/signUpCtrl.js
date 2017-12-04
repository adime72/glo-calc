GloCalc.controller("signUpCtrl", function ($log, $scope, $http, $location, activeUser, User) {
// 4 12 2017 
            $scope.createUser = function () {
                var user = new User($scope.Name,
                    $scope.address,
                    $scope.email,
                    $scope.pwd,
                    $scope.radioSex,
                    $scope.diabetesType,
                    $scope.ratioCarbon,
                    $scope.ratioCorrect);

                activeUser.login(user);

                $scope.users.push(user);

                $location.path("/main");

                console.log(JSON.stringify($scope.user));
                console.log(user);
            };
        });