angular.module( 'userProfiles' )
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      console.log( user );
      return $http.post( 'http://localhost:4000/api/login', { name: user.name, password: user.password } );
    },

    getFriends: function() {
    	return $http.get( 'http://localhost:4000/api/profiles' );
    }
  }
});
