angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo ) {
		console.log( userInfo );
		$scope.currentUser = userInfo.currentUser;
		$scope.friends = userInfo.data.friends;
});
