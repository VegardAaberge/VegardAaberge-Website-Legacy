var app = angular.module("musicApp", ["ngRoute"]);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when("/Items", {
			templateUrl: "partials/view-list.html", 
			controller:"listController"
		})
		.when("/Items/add", {
			templateUrl: "partials/view-detail.html", 
			controller:"addController"
		})
		.otherwise({
			redirectTo: "/Items"
		})
}]);


app.factory('musicservice', ["$rootScope", function($rootScope){
	var svc = {};

	var data = [
		{name: "Grouplove", genre: "Alternative", rating: 4},
		{name: "The Beatles", genre: "Rock", rating: 5},
		{name: "The Cure", genre: "New Wave", rating: 4},
		{name: "Alt-3", genre: "Alternative", rating: 4}
	];

	svc.getArtist = function(){
		return data;
	}
	svc.addArtist = function(newArtist){
		data.push(newArtist);
	}

	return svc;
}]);

app.controller("listController", ["$scope", "$location", "$routeParams", "musicservice",
	function($scope, $location, $routeParams, musicservice){

	$scope.data = musicservice.getArtist();

	$scope.addArtist = function(){
		$location.path("/Items/add");
	}
}]);

app.controller("addController", ["$scope", "$location", "$routeParams","musicservice",
	function($scope, $location, $routeParams, musicservice){

	$scope.save = function(){
		musicservice.addArtist({ 
			name: $scope.Item.name, 
			genre: $scope.Item.genre, 
			rating: $scope.Item.rating
		});
		$location.path("/Items");
	};
	$scope.cancel = function(){
		$location.path("/Items");
	};
}]);