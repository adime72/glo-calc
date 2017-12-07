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
        .when("/food", {
            templateUrl: "https://goo.gl/APZt6A",
        
        })
        .when("/Update", {
            templateUrl: "app/Update/Update.html",
            controller: "UpdateCtrl"
        })
        .when("/welcome", {
            templateUrl: "app/welcome/welcome.html",
            controller: "UpdateCtrl"
        })
        .when("/nav", {
            templateUrl: "index.html",
            controller: "navCtrl"
        })
});
