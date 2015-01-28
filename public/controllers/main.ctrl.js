ourApp.controller("MainController", ['$scope', '$http', '$route','$cookies', '$location', function($scope, $http, $route, $cookies, $location){

    console.log("COOKIE: "+$cookies.user_id)

    $scope.loggedInUser = $cookies.user_id
    $scope.bgImg
// set this http get to user:

// Get current user
    $http.get("http://nomadr-api.herokuapp.com/api/users/"+$scope.loggedInUser).success(function(response){

        $scope.currentUser = response

        $scope.leaveDate = moment(new Date($scope.currentUser.departureDate)).format("MMMM Do, YYYY")
        $scope.fromNow = moment(new Date($scope.currentUser.departureDate)).fromNow()
        // FIXME: put this on the back end!
        //Get Weather
        $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.currentUser.city).success(function(response){
            $scope.weather = response
        })

        //Get photo
        $http.get('http://nomadr-api.herokuapp.com/api/google_photo/'+$scope.loggedInUser).success(function(response){
            console.log(response)
            var maxNum = response.photos.length
            var randNum = (Math.floor(Math.random()*(maxNum - 0) + 0))
            $scope.bgImg = response.photos[randNum]
         })

        // FIXME: city names with a space break this
        // Get Wiki Info
        $http.get('http://nomadr-api.herokuapp.com/api/wiki/'+$scope.loggedInUser).success(function(response){
            $scope.wiki_data = response.wiki_content
        }).error(function() {
            console.log("wiki data failed")
        })

        //Get time
        $http.get('http://nomadr-api.herokuapp.com/api/time/'+$scope.loggedInUser).success(function(response){
                $scope.time = response.time
                console.log("TIME: "+moment("20:20"))

                setInterval(function(){
                    $http.get('http://nomadr-api.herokuapp.com/api/time/'+$scope.loggedInUser).success(function(response){
                        $scope.time = response.time
                    })
                },30000)

            })

    }).error(function(){
        $scope.quote =  "Request Failed!"
    })

    $scope.farenheit = function(kelvin) {
        var num = 1.8 * (kelvin - 273) + 32
        console.log("farenheit is being called")
        return num.toFixed()
    }


    $scope.logout = function(){
        delete $cookies.user_id
        $location.path('/')
    }

}]);