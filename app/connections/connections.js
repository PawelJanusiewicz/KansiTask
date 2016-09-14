var mainUrl = 'http://jsonplaceholder.typicode.com';

kansiTaskApp.getPosts = function ($scope, $http, postId) {
    var url = mainUrl + '/posts';

    if (postId === undefined) {
        kansiTaskApp.getData($scope, $http, url);
    } else {
        url = url + '?id=' + postId;
        kansiTaskApp.getData($scope, $http, url);
    };
};

kansiTaskApp.getData = function ($scope, $http, url) {
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        $scope.posts = response.data;
    }, function errorCallback(response) {
        kansiTaskApp.error();
    });
};

kansiTaskApp.getComments = function ($scope, $http, postId) {
    $http({
        method: 'GET',
        url: mainUrl + '/comments?postId=' + postId
    }).then(function successCallback(response) {
        $scope.comments = response.data;
    }, function errorCallback(response) {
        kansiTaskApp.error();
    });
};

kansiTaskApp.addPost = function ($scope, $http) {
    $http.post(mainUrl + '/posts',
            {'title': $scope.title, 'body': $scope.content})
            .success(function () {
                $scope.messages = {"message": "Sukces! Nowy post został dodany!"};
            });
};

kansiTaskApp.error = function () {
    alert('Dane nie zostały pobrane!');
};