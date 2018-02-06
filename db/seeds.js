const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');

const User = require('../models/user');
const Group = require('../models/group');

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() =>
    User.create([
      {
        firstName: 'Gavin',
        lastName: 'Hughes',
        email: 'gavin@gavin.com',
        password: 'password',
        passwordConfirmation: 'password'
      },
      {
        firstName: 'Alex',
        lastName: 'Chin',
        email: 'alex@alex.com',
        password: 'password',
        passwordConfirmation: 'password'
      },
      {
        firstName: 'Rane',
        lastName: 'Gowan',
        email: 'rane@rane.com',
        password: 'password',
        passwordConfirmation: 'password'
      }
    ])
  )
  .then(users => {
    console.log(`${users.length} created`);

    return Group.create([
      {
        createdBy: users[0],
        groupName: 'Betting on Bitcoin',
        memebers: [
          {
            user: users[0],
            points: 0
          },
          {
            user: users[1],
            points: 0
          },
          {
            user: users[2],
            points: 0
          }
        ]
      }
    ]);
  })
  .then(groups => console.log(`${groups.length} groups created.`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
