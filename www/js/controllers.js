angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  var customerId = '101124427073';
  var config = {
    headers: {
         "accept": "application/json",
        "content-type": "application/json",
        "x-ibm-client-id": "7c695a6c-43e0-409d-ad4e-3f73633db3e2",
        "x-ibm-client-secret": "rH2rN7sX4yW1eA0rX6mX5wY2gM6gY5tI8iR3lP0jU3vE4bW8aE",
        "cache-control": "no-cache",
      }
  };

  $scope.account = null;


  $scope.getAccountDetails = function(){
    $http.get(
      'https://api.us.apiconnect.ibmcloud.com/ubpapi-dev/sb/api/RESTs/getAccount?account_no=' + customerId
    , config).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response.data[0]);
        $scope.account = response.data[0];
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
      });
  }

  $scope.getAccountDetails();
  


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
