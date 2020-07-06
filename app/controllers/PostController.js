app.controller('myController',['$scope','$http',function($scope,$http) 
{
//alert("hai");
   

getResultPage();

function  getResultPage(){
    $http({
        url : URL + '/api/index.php',
        method : 'PUT'
    }).then(function (res) {

        $scope.data = res.data.data;
        
    });
             

}

}]);