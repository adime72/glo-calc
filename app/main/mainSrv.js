GloCalc.factory("Dosege", function () {

    // ins Constructor
    function Dosege(cc, ins, dosegeUser ) {
        this.cc = cc;
        this.ins = ins;
        this.ratioCarbon = dosegeUser.ratioCarbon; //ratioCarbon;  // מקדם הזרקה   3122017
        this.ratioCorrect = dosegeUser.ratioCorrect; //  ratioCorrect; // מקדם תיקון 3122017
        this.calc = function () {
            var doseResult = this.cc + this.ins + this.ratioCarbon + this.ratioCorrect;
            return doseResult;
        }

    }

    return Dosege;
});