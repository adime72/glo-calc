GloCalc.controller("MainCtrl", function ($scope, Dosege, $log) {
    $scope.test = "ewewew";
   // $scope.insUnits = "";

   
  
    $scope.showDosege=function(){
        $scope.dosegeUser = new Dosege($scope.ins, $scope.cc);
       $scope.insUnits = $scope.dosegeUser.calc() + "units";
    }
   
   
});