(function () {
  "use strict";

  angular
    .module('goals', [
      'ui.bootstrap',
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/add-goals', {
        templateUrl: 'goals/views/add-goals.html',
        controller: 'GoalsController as goalCtrl'
      })
      .when('/goals/strength', {
        templateUrl: 'goals/views/strength.html',
        controller: 'GoalsController as goalCtrl'
      })
      .when('/goals/endurance', {
        templateUrl: 'goals/views/endurance.html',
        controller: 'GoalsController as goalCtrl'
      })
      .when('/goals/wisdom', {
        templateUrl: 'goals/views/wisdom.html',
        controller: 'GoalsController as goalCtrl'
      })
      .when('/goals/intellegence', {
        templateUrl: 'goals/views/intellegence.html',
        controller: 'GoalsController as goalCtrl'
      })
      .when('/goals/dexterity', {
        templateUrl: 'goals/views/dexterity.html',
        controller: 'GoalsController as goalCtrl'
      })
        .otherwise({ redirectTo: '/404'});
    });



})();
