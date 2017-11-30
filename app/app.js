var GloCalc = angular.module("GloCalc", ["ngRoute"]);

GloCalc.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "App/home/home.html"
            //controller: "HomeCtrl"
        })
        .when("/signUp", {
            templateUrl: "App/signUp/signUp.html" 
            //controller: "RecipeGalleryCtrl"
        })
        .when("/main", {
            templateUrl: "App/main/main.html" ,
            controller: "MainCtrl"
        })
        .when("/users", {
            templateUrl: "App/users/users.html"
            //controller: "RecipeDetailsCtrl"
        })});


