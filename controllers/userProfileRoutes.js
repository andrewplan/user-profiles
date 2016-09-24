const profileCtrl = require( './profileCtrl' );
const userCtrl = require( './userCtrl' );

module.exports = app => {
    app.post( '/api/login', userCtrl.login );
    app.post( '/api/profiles', profileCtrl.removeFriend, profileCtrl.getFriends );
    app.get( '/api/profiles', profileCtrl.getFriends );
    app.put( '/api/user', userCtrl.updateUser );
};
