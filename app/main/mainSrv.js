GloCalc.factory("Dosege", function() {

    // ins Constructor
    function Dosege(cc, ins) {
        this.cc = cc;
        this.ins = ins;
        this.calc = function() {
            var doseResult = this.cc + this.ins;
            return doseResult;
        }
      
    }

    return Dosege;
});
