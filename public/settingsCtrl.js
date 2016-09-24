angular.module( 'userProfiles' )
.controller( 'settingsCtrl', function( $scope, $state, friendService ) {
  $scope.updateUser = user => {
      friendService
        .updateUser( user )
        .then( user => {
          $scope.currentUser = user.data.currentUser;
          $state.go( 'profile', { currentUser: $scope.currentUser } );
        } )
  }
} )
