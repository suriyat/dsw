
var app = angular.module("assessment",[]);

app.controller("mainCtrl", function ($scope,$http) {
  $http.get('./json/products.json').then((sucess)=>{
    console.log("result",sucess);
    $scope.productdata = sucess.data;
  })
    

    console.log("main angular");
});