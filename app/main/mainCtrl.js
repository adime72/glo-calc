GloCalc.controller("MainCtrl", function ($scope, Dosege, $log, activeUser,$location) {
     // If the user is not logged in going back to home screen
     if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    var x = activeUser.get().ratioCarbon;
    var y = activeUser.get().ratioCorrect;
    
    $scope.showDosege = function () {
        $scope.dosegeUser = new Dosege($scope.ins, $scope.cc, x, y);
        $scope.insUnits = $scope.dosegeUser.calc() + "units"; 
    }


});