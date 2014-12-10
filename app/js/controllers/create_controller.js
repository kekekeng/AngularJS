'use strict';

App.controller('CreateCtrl', ['$scope', '$http', '$timeout', 'Projects', '$location', function($scope, $http, $timeout, Projects, $location) {

  $scope.project = new Project();

  $scope.save = function() {

    $scope.project.$id = randomString(5,'abcdefghijklmnopqrstuvwxyz0123456789');
    Projects.add(angular.copy($scope.project));
    $location.path('/');

  }

  var randomString = function (length, chars) {
  var result = '';
    for (var i = length; i > 0; --i)
    result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }

}]);

