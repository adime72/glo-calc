GloCalc.factory("VarConst", function () {
    // ins Constructor
    function VarConst(ratioCarbon, ratioCorrect) {
        this.ratioCarbon = ratioCarbon; //ratioCarbon;  // מקדם הזרקה   3122017
        this.ratioCorrect = ratioCorrect; //  ratioCorrect; // מקדם תיקון 3122017
    }
    return VarConst;
});