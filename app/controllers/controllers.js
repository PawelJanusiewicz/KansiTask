kansiTaskApp.controller('mainController', function ($scope, $http) {
    $scope.letterLimit = 57;
    $scope.pageSize = 6;
    $scope.currentPage = 1;
    kansiTaskApp.getPosts($scope, $http);
});

kansiTaskApp.controller('postController', function ($scope, $http, $routeParams) {
    var postId = $routeParams.postId;
    
    kansiTaskApp.getPosts($scope, $http, postId);
    kansiTaskApp.getComments($scope, $http, postId);
});

kansiTaskApp.controller('addPostController', function ($scope, $http) {
    $scope.add = function (){
        kansiTaskApp.addPost($scope, $http);
    };
});