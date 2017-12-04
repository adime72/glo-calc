// Shared User Constructor
GloCalc.factory("User", function(){
    function User(plainObject) {
        this.name = plainObject.Name;
        this.address = plainObject.address;
        this.email = plainObject.email;
        this.password = plainObject.password;
        this.radioSex = plainObject.radioSex;
        this.diabetesType = plainObject.diabetesType;
        this.ratioCarbon = plainObject.ratioCarbon;
        this.ratioCorrect = plainObject.ratioCorrect;
       // this.data = plainObject.data;
       console.log ("UsersSrv1")
    };

    return User;
});

// Service that manges the active user
GloCalc.factory("activeUser", function(User){
    var user = null;

    var isLoggedIn = function() {
        return user ? true : false;
        console.log ("UsersSrv4")
    };

    var login = function(loggedInUser) {
        user = loggedInUser;
        console.log ("UsersSrv2")
    };

    var logout = function() {
        user = null;
    };

    var get = function() {
        console.log ("UsersSrv3")
        return user;
    };

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        get: get
    };   
});