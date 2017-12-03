// Shared User Constructor
recipeApp.factory("User", function(){
    function User(plainObject) {
        this.name = plainObject.Name;
        this.address = plainObject.address;
        this.email = plainObject.email;
        this.password = plainObject.password;
        this.radioSex = plainObject.radioSex;
        this.diabetesType = plainObject.diabetesType;
        this.diabetesType = plainObject.ratioCarbon
        this.diabetesType = plainObject.ratioCorrect
       // this.data = plainObject.data;
    };

    return User;
});

// Service that manges the active user
recipeApp.factory("activeUser", function(User){
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