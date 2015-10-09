angular.module('instaSearcherApp', ['ngAnimate'])
  .controller('instaSearcherCtrl', function($scope, $http) {
    var request = {
      "client_id": "ca6875003ac547a9a3bafff119ffb863",
      count: 10,
      callback: 'JSON_CALLBACK'
    };

    $scope.images = [];
    $scope.query = "";
    $scope.urlQuery = "https://api.instagram.com/v1/tags/";

    $scope.searchRecentTags = function() {
      $scope.urlQuery += $scope.query + "/media/recent";

      $http({
        method: 'JSONP',
        url: $scope.urlQuery,
        params: request
      })
      .then(function(result) {
        for (data in result.data.data)
          $scope.images.push(result.data.data[data].images.standard_resolution.url);
        $scope.imageLength = $scope.images.length;
      })
      .then(function(error) {
        console.log(error);
      });

      $scope.images = [];
      $scope.urlQuery = "https://api.instagram.com/v1/tags/";
    };
  });

