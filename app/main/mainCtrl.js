GloCalc.controller("MainCtrl", function ($scope, Dosege, $log) {
    $scope.test = "ewewew";
    $scope.InsulinUnits = "";

   
  
    $scope.showDosege=function(){
        $scope.dosegeUser = new Dosege($scope.Insulin, $scope.carbohydrate);
       $scope.InsulinUnits = $scope.dosegeUser.calc() + "units";
    }
   
   
});