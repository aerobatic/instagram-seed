/**
 * The main app module
 *
 * @type {angular.Module}
 */
define(['angular', 'angular-route', 'asset!js/aerobatic-angular'], function(angular) {
  'use strict';

  var app = angular.module('angular-seed', ['ngRoute', 'aerobatic']);

  // Declare all the top level dependencies our app requires
  var dependencies = [
    'asset!partials/index',
    'asset!partials/myFeed',
    'asset!js/controllers/myFeedCtrl',
    'asset!partials/popular', 
    'asset!js/controllers/popularCtrl'
  ];

  require(dependencies, function(indexTmpl, myFeedTmpl, myFeedCtrl, popularTmpl, popularCtrl) {
    var app = angular.module('angular-seed', ['ngRoute', 'aerobatic']);

    app.controller('MyFeedCtrl', myFeedCtrl);
    app.controller('PopularCtrl', popularCtrl);

    // Cache the template strings so Angular doesn't attempt to fetch them with $http
    app.run(['$templateCache', function($templateCache) {
      $templateCache.put('myFeedTmpl', myFeedTmpl);
      $templateCache.put('popularTmpl', popularTmpl);
    }]);

    angular.element(document).ready(function() {
      // Append an ng-view to the body to load our partial views into

      angular.element(document.body).append(angular.element(indexTmpl));
      angular.bootstrap(document, ['angular-seed']);
    });
  });
});
