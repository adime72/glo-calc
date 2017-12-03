var GloCalc = angular.module("GloCalc", ["ngRoute"]);

GloCalc.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "App/home/home.html"
            //controller: "HomeCtrl"
        })
        .when("/signUp", {
            templateUrl: "App/signUp/signUp.html",
            controller: "signUpCtrl"
        })
        .when("/main", {
            templateUrl: "app/main/main.html",
            controller: "MainCtrl"
                })
        /*.when("/users", {
            templateUrl: "app/users/users.html",
          controller: "users"
        })*/
        .when("/login", {
            templateUrl: "app/login/login.html",
            controller: "LoginCtrl"
        })
    });
        


