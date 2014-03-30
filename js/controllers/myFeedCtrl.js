
define(['angular'], function(angular){
  function MyFeedCtrl($scope, $location, $http, aerobatic) {
    'use strict';

    // Load the some Instagram media.
    // https://api.instagram.com/v1/users/self/feed?access_token=ACCESS-TOKEN
    var params = {
      access_token: aerobatic.config.user.accessToken,
      callback: "JSON_CALLBACK"
    };

    $http.jsonp("https://api.instagram.com/v1/users/self/feed", {params: params}).success(function(data) {
      $scope.myFeed = data.data;
    });
  };

  MyFeedCtrl.$inject = ['$scope', '$location', '$http', 'aerobatic'];
  return MyFeedCtrl;
});