var GloCalc = angular.module("GloCalc", ["ngRoute"]);

GloCalc.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "HomeCtrl"
        })
        .when("/signUp", {
            templateUrl: "app/signUp/signUp.html",
            controller: "signUpCtrl"
        })
        .when("/main", {
            templateUrl: "app/main/main.html",
            controller: "MainCtrl"
        })
        .when("/login", {
            templateUrl: "app/login/login.html",
            controller: "LoginCtrl"
        })
});