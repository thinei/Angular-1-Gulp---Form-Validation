var app = angular.module("angularApp", []);

app.controller("angularCtrl", function($scope) {
  $scope.submit = function() {
    if (
      $scope.firstnameForm.$valid &&
      $scope.lastnameForm.$valid &&
      $scope.checkoutShippingForm.$valid &&
      $scope.checkoutBillingForm.$valid
    ) {
      alert("Form is Valid.....");
    } else {
      alert("Form is Invalid... Try again...");
    }
  };
});
