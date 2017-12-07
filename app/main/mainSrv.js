GloCalc.factory("Dosege", function () {

    // ins Constructor
    function Dosege(cc, ins, ratioCorrect, ratioCarbon,  ) {
        this.cc = cc;
        this.ins = ins;
        this.ratioCarbon = ratioCarbon; //ratioCarbon;  // מקדם הזרקה   3122017
        this.ratioCorrect = ratioCorrect; //  ratioCorrect; // מקדם תיקון 3122017
        this.calc = function () {
            var doseResult = Math.round(((this.cc-100)/this.ratioCarbon) + (this.ins/this.ratioCorrect));
            return doseResult   ;
        }

    }

    return Dosege;
});