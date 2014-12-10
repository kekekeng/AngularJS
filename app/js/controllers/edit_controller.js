'use strict';

App.controller('EditCtrl', ['$scope', '$location', '$routeParams', 'Projects', function($scope, $location, $routeParams, Projects) {

  $scope.project = angular.copy(Projects.get($routeParams.projectId));

  $scope.isClean = function() {
    return angular.equals(Projects.get($routeParams.projectId), $scope.project);
  }

  $scope.destroy = function() {
    Projects.remove($routeParams.projectId);
    $location.path('/');
  };

  $scope.save = function() {

    var project           = Projects.get($routeParams.projectId);
    project.name          = $scope.project.name;
    project.description   = $scope.project.description;
    project.site          = $scope.project.site;
    project.author        = $scope.project.author;
    project.fileSize      = $scope.project.fileSize;
    project.creationDate  = $scope.project.creationDate;
    $location.path('/');
  };

}]);