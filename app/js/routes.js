App.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/', {
        controller: 'ListCtrl',
        templateUrl:'views/list.html'
      }
    )
    .when('/edit/:projectId',
      {
        controller: 'EditCtrl',
        templateUrl:'views/detail.html'
      }
    )
    .when('/new', {
        controller: 'CreateCtrl',
        templateUrl:'views/detail.html'
      }
    )
    .otherwise({ redirectTo:'/' });
}]);