// Shared User Constructor
GloCalc.factory("User", function(){
    function User(plainObject) {
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

    return User;
});

// Service that manges the active user
GloCalc.factory("activeUser", function(User){
    var user = null;


    var isLoggedIn = function() {
        return user ? true : false;
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