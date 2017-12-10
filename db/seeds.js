const mongoose = require('mongoose');

const User = require('../models/user');
const Group = require('../models/group');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

User.collection.drop();
Group.collection.drop();

User.create([
  {
    firstName: 'Gavin',
    lastName: 'Hughes',
    email: 'gavin@gavin.com',
    image: 'https://user-images.githubusercontent.com/28314323/32404877-98317998-c151-11e7-8689-5d92aa4dec10.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    firstName: 'Rane',
    lastName: 'Gowan',
    email: 'rane@rane.com',
    image: 'https://avatars0.githubusercontent.com/u/11501555?s=460&v=4',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    firstName: 'Alex',
    lastName: 'Chin',
    email: 'alex@alex.com',
    image: 'https://ga-core-production-herokuapp-com.global.ssl.fastly.net/assets/controllers/education/immersives/web-development-immersive/alex-chin-ea15c8688ba4c346299701815547463a.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    firstName: 'Martha',
    lastName: 'Chambers',
    email: 'martha@martha.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336514-68a856ee-bfe7-11e7-9347-1e604e1bbc6f.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  }
])
  .then(users => {
    console.log(`${users.length} users created!`);
    return Group
      .create([{
        groupName: 'First Group',
        createdBy: users[0],
        image: 'image string',
        moments: [
          {
            endTime: '2017-12-08 06:45:00',
            lastBetTime: '2017-12-08 06:49:00',
            bets: [
              {
                user: users[0],
                prediction: 1111.11
              },{
                user: users[1],
                prediction: 2222.22
              },{
                user: users[3],
                prediction: 3333.33
              }
            ]
          }
        ],
        members: [
          users[0], users[1], users[3]
        ]
      },{
        groupName: 'Second Group',
        createdBy: users[1],
        image: 'image string',
        moments: [
          {
            endTime: '2017-12-08 06:45:00',
            lastBetTime: '2017-12-08 06:49:00',
            bets: [
              {
                user: users[2],
                prediction: 1111.11
              },{
                user: users[1],
                prediction: 2222.22
              },{
                user: users[3],
                prediction: 3333.33
              }
            ]
          }
        ],
        members: [
          users[0], users[1], users[3]
        ]
      },{
        groupName: 'Third Group',
        createdBy: users[3],
        image: 'image string',
        moments: [
          {
            endTime: '2017-12-08 06:45:00',
            lastBetTime: '2017-12-08 06:49:00',
            bets: [
              {
                user: users[0],
                prediction: 1111.11
              },{
                user: users[1],
                prediction: 2222.22
              },{
                user: users[3],
                prediction: 3333.33
              }
            ]
          }
        ],
        members: [
          users[0], users[2], users[3]
        ]
      }]);
  })
  .then(groups => console.log(`${groups.length} groups created`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
