GloCalc.factory("Dosege", function() {
    
    // Insulin Constructor
    function Dosege(carbohydrate, insulin) {
        this.carbohydrate = carbohydrate;
        this.insulin = insulin;

     /*   //this.mile = convert.distance(this.km, "KM", "MILE");
        this.selected = false;
        this.kmPerYear = function() {
            var currentYear = new Date().getFullYear();
            return Math.round(this.km / (currentYear - this.year + 1));
        };*/
    }
    
    return Dosege;
  });

var dosegeUser = new Dosege(10,20);


//   function setInsulin(carsPlain) {
//     u = [];
//     for (var i = 0; i < carsPlain.length; i++) {
//         cars.push(new Car(carsPlain[i].brand, carsPlain[i].model, 
//             carsPlain[i].year, carsPlain[i].km))
//     }
// }
// function dosege (params) {
//     users=[];
//   users.push