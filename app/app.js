var app = angular.module('blogApp',[
'ui.router'
]);
app.run(function(){
 
});
 
//This will handle all of our routing
app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider){
 	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
	
 	$urlRouterProvider.otherwise('/home');
    
    $stateProvider
    .state('home', {
    	url: '/home',
        templateUrl: '/views/home.html'
    })
    .state('login', {
    	url: '/login',
    	templateUrl: '/views/login.html',
    	controller:'LoginController'
    });

	$locationProvider.html5Mode({
	  	enabled: true,
	  	requireBase: false
	});
 
});