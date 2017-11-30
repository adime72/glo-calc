GloCalc.controller("MainCtrl", function ($scope, Dosege,$log) {
    $scope.test = "ewewew";

    var dosegeUser = new Dosege(10,20);
$log.log(dosegeUser);
});