const users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];


module.exports = {
  login( req, res ) {
      for ( let i = 0; i < users.length; i++ ) {
          if ( users[ i ].name === req.body.name && users[ i ].password === req.body.password ) {
              req.session.currentUser = users[ i ];
              return res.send( { userFound: true } );
          }
      }
      return res.send( { userFound: false } );
  }
  , updateUser( req, res, next ) {
      if ( req.body.name ) {
        req.session.currentUser.name = req.body.name;
      }
      if ( req.body.password ) {
        req.session.currentUser.password = req.body.password;
      }
      return res.status( 200 ).json( req.session.currentUser );
  }
  , users: users

};
