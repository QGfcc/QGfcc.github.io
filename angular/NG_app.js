var app = angular.module("twitchApp", []);
app.controller("firstCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.games = [];
    $http.jsonp("http://api.twitch.tv/kraken?callback=JSON_CALLBACK");
  }]);