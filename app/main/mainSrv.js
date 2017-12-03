GloCalc.factory("Dosege", function() {

    // ins Constructor
    function Dosege(cc, ins, doseVarConst ) {
        this.cc           = cc;
        this.ins          = ins;
        this.ratioCarbon  = doseVarConst.ratioCarbon; //ratioCarbon;  // מקדם הזרקה   3122017
        this.ratioCorrect = doseVarConst.ratioCorrect; //  ratioCorrect; // מקדם תיקון 3122017
        this.calc = function() {
            var doseResult = this.cc + this.ins + this.ratioCarbon + this.ratioCorrect;
            return doseResult;
        }
      
    }

    return Dosege;
});
