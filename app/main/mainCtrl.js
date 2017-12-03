GloCalc.controller("MainCtrl", function ($scope, Dosege, $log, activeUser) {
    $scope.test = "ewewew";
    
    $scope.showDosege = function () {
        $scope.dosegeUser = new Dosege($scope.ins, $scope.cc, activeUser.get().ratioCarbon, activeUser.get().ratioCorrect);
        $scope.insUnits = $scope.dosegeUser.calc() + "units";
    }


});