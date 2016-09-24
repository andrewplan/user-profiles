angular.module('userProfiles')
.controller('profileCtrl', function( $scope, $stateParams, friendService, userInfo ) {
		console.log( userInfo );
		if ( $stateParams.currentUser ) {
			$scope.currentUser = $stateParams.currentUser;
			console.log( $stateParams.currentUser );
		}
		else {
			$scope.currentUser = userInfo.data.currentUser;
		}

		$scope.friends = userInfo.data.friends;
		$scope.removeFriend = function( friend ) {
				friendService
					.removeFriend( friend )
					.then( friends => {
						$scope.friends = friends.data.friends;
					} );
		};

});
