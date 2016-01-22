function officerController($scope, $http){
    console.log("Hello World");
    
        $http.get('/officers').success(function(response){
            console.log("I got the data I requested");
            $scope.officers = response;
        });

}