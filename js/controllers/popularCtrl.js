
define(['angular'], function(angular){
  function PopularCtrl($scope, $location, $http, aerobatic) {
    'use strict';

    // Load the some Instagram media.
    // https://api.instagram.com/v1/users/self/feed?access_token=ACCESS-TOKEN
    var params = {
      access_token: aerobatic.config.user.accessToken,
      callback: "JSON_CALLBACK"
    };

    $http.jsonp("https://api.instagram.com/v1/media/popular", {params: params}).success(function(data) {
      $scope.popularFeed = data.data;
    });
  };

  PopularCtrl.$inject = ['$scope', '$location', '$http', 'aerobatic'];
  return PopularCtrl;
});