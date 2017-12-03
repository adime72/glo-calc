GloCalc.factory("Dosege", function() {

    // ins Constructor
    function Dosege(cc, ins, VarConst  ) {
        this.cc           = cc;
        this.ins          = ins;
        this.ratioCarbon  = VarConst.ratioCarbon; //ratioCarbon;  // מקדם הזרקה   3122017
        this.ratioCorrect = VarConst.ratioCorrect; //  ratioCorrect; // מקדם תיקון 3122017
        this.calc = function() {
            var doseResult = this.cc + this.ins + this.ratioCarbon + this.ratioCorrect;
            return doseResult;
        }
      
    }

    return Dosege;
});
