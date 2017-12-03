GloCalc.controller("signUpCtrl", function ($scope, VarConst, $log) {
  
    // $scope.showVarConst=function(){
    //     $scope.doseVarConst = new VarConst($scope.ratioCarbon, $scope.ratioCorrect);
    //  //  $scope.insUnits = $scope.dosegeUser.calc() + "units";
    // }

    $scope.doseVarConst = new VarConst($scope.ratioCarbon, $scope.ratioCorrect);

    return doseVarConst;
});