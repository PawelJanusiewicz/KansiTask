var kansiTaskApp = angular.module('kansiTaskApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'ui.bootstrap']);

kansiTaskApp.config(function ($routeProvider) {
    $routeProvider
            .when('/mainPageView', {
                controller: 'mainController',
                templateUrl: 'app/views/mainPageView.html'
            })
            .when('/postView/:postId', {
                controller: 'postController',
                templateUrl: 'app/views/postView.html'
            })
            .when('/addPostView', {
                controller: 'addPostController',
                templateUrl: 'app/views/addPostView.html'
            })
            .otherwise({redirectTo: '/mainPageView'});
});