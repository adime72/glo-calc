GloCalc.controller("MainCtrl", function ($scope, Dosege, $log, activeUser) {
    $scope.test = "ewewew";
    // $scope.insUnits = "";

    $scope.showDosege = function () {
        $scope.dosegeUser = new Dosege($scope.ins, $scope.cc, activeUser.get().XXX, $scope.ratioCorrect);
        $scope.insUnits = $scope.dosegeUser.calc() + "units";
    }


});