angular
    .module("avaliacao", ['ui.router', 'ui.bootstrap'])
    .config(["$stateProvider", '$urlRouterProvider', "$locationProvider", routes]);

function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
   /*
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
        
    });
    */
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html'
        })
        .state('Login', {
            url: '/Login',
            templateUrl: 'templates/Login.html'
        });
}