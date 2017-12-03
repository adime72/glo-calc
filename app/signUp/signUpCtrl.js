GloCalc.controller("signUpCtrl", function ($scope, VarConst, $log) {
    $scope.test = "ewewew";
   // $scope.insUnits = "";

    $scope.showVarConst=function(){
        $scope.doseVarConst = new VarConst($scope.ratioCarbon, $scope.ratioCorrect);
     //  $scope.insUnits = $scope.dosegeUser.calc() + "units";
    }
   
   
});