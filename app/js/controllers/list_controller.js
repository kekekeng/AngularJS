'use strict';

App.controller('ListCtrl', ['$scope', '$http', 'Projects', function($scope, $http, Projects) {

  if(Projects.loaded == 0) {

    $http.get('../app/js/models/projects.json').success(function(data) {

      for(var i = 0; i < data.length; i++) {
        var itm = data[i];
        Projects.add(new Project(itm.$id,itm.name, itm.description, itm.site));
      }

    });

    Projects.loaded = 1;

  }

  $scope.projects = Projects;

  // ascending => descending => no order
  $scope.changeSort = function(type, reverse, unsorted ){
      // we're at descending, transition to no order
      if (unsorted == false && reverse == true) {
        // a sort of empty string gives on order in angular
        $scope.sort = '';
        $scope.reverse = true;
        $scope.unsorted = true;
        return;
      // we're at ascending, transition to descending
      } else if (unsorted == false && reverse == false) {
        $scope.sort = type;
        $scope.reverse = true;
        $scope.unsorted = false;
        return;
      // we're at no order, transition to ascending
      } else {
        $scope.sort = type;
        $scope.reverse = false;
        $scope.unsorted = false;
        return;
      }

      $scope.sort = type;
      $scope.reverse = false;
      $scope.unsorted = false;
  };

  $scope.destroy = function(projectId) {
    Projects.remove(projectId);
    $location.path('/');
  };

  // $scope.searchName = function (obj) {
  //   var re = new RegExp($scope.searchName, 'i');
  //   return !$scope.searchName || re.test(obj.name);
  // };
}]);