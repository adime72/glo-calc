GloCalc.controller ("HomeCtrl", function ($scope, activeUser,$location) {
// If the user is not logged in going back to home screen
if (!activeUser.isLoggedIn()) {
    $location.path("/");
    return;
}
});