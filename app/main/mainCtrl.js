GloCalc.controller("MainCtrl", function ($scope, Dosege, $log) {
    $scope.test = "ewewew";

    $scope.dosegeUser = new Dosege(10, 20);
   
    $log.log($scope.dosegeUser);
});