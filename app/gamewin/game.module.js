(function () {
  "use strict";

  angular
    .module('game', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/game-window', {
        templateUrl: 'gamewin/views/game-window.html',
        controller: 'GameWindowController'
      })
        .otherwise({ redirectTo: '/404'});
    });

})();
