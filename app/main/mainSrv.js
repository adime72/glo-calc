GloCalc.factory("Dosege", function() {

    // Insulin Constructor
    function Dosege(carbohydrate, insulin) {
        this.carbohydrate = carbohydrate;
        this.insulin = insulin;
        this.calc = function() {
            var doseResult = this.carbohydrate + this.insulin;
            return doseResult;
        }
      
    }

    return Dosege;
});
