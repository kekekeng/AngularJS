window.App = angular.module('Project',[]);

App.config(['$locationProvider', function($location) {
  $location.html5Mode(false);
}]);

App.factory('Projects', function() {
  return angular.projects;
})
