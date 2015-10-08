angular.module('instaSearcherApp', [])
  .controller('instaSearcherCtrl', function($scope, $http) {
    var url = "https://api.instagram.com/v1/tags/puppy/media/recent";
    var request = {
      "client_id": "ca6875003ac547a9a3bafff119ffb863",
      count: 10,
      callback: 'JSON_CALLBACK'
    };

    $http({
      method: 'JSONP',
      url: url,
      params: request
    })
    .then(function(result) {
      console.log(result);
    })
    .then(function(error) {
      console.log(error);
    });
  });