// Shared User Constructor
GloCalc.factory("user", function(){
    function user(plainObject) {
        this.name = plainObject.name;
        this.address = plainObject.address;
        this.email = plainObject.email;
        this.pwd = plainObject.pwd;
        this.password = plainObject.pwd;
        this.radioSex = plainObject.radioSex;
        this.diabetesType = plainObject.diabetesType;
        this.ratioCarbon = plainObject.ratioCarbon;
        this.ratioCorrect = plainObject.ratioCorrect;
      };

    return user;
});

// Service that manges the active user
GloCalc.factory("activeUser", function(user){
    var user = null;


    var isLoggedIn = function() {
        console.log(isLoggedIn)
        return user ? true : false;

    };
    var isLoggedOut = function() {
        console.log(isLoggedOut)
        return user ? false : true;
    };
    
    var login = function(loggedInUser) {
        user = loggedInUser;

    };

    var logout = function() {
        user = null;
    };

    var get = function() {
        return user;
    };
  
    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        get: get
    };   
});