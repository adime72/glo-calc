GloCalc.controller("LoginCtrl", function ($scope,  $http, $location, activeUser, user) {

           // If the user is not logged in going back to home screen


        $http.get("app/data/users.json").then(function (response) {
           $scope.users = [];
            console.log (" creating the data users");
            for (var i = 0; i < response.data.length; i++) {
                $scope.users.push(new user(response.data[i]));
            }
    
           console.log(JSON.stringify($scope.users));
        });
    
        $scope.failedAttempt = false;
    
        $scope.login = function() {
            var user = getLoggedInUser();
            if (user != null) {
                activeUser.login(user);
                console.log ("active user = true");
                $location.path("/main");
            } else {
                $scope.failedAttempt = true;
                console.log (" activeUser = false ");
            }
    
    
    
    
            //console.log($scope.email + " " + $scope.password)
        }
    
        var getLoggedInUser = function() {
            console.log ("are we getLoggedInUser");
            for (var i = 0; i < $scope.users.length; i++) {
                if ($scope.users[i].email === $scope.email && $scope.users[i].password === $scope.password) {
                    return $scope.users[i];
                }
            }
            return null;
        }
    
      // $scope.dismiss = function () {
        //    $uibModalInstance.close("User dismissed");
       // }
    });
    