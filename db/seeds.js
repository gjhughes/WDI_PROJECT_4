const User      = require('../models/user');
const Plan      = require('../models/plan');
const mongoose  = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI, { useMongoClient: true });

User.collection.drop();
Plan.collection.drop();

User
  .create([{
    firstName: 'Gavin',
    lastName: 'Hughes',
    role: 'Client',
    email: 'gavin@gavin.com',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then(users => {
    console.log(`${users.length} users created!`);
    return Plan
      .create([{
        belongsTo: users[0],
        planType: 'ISA',
        provider: '7IM',
        startDate: '01-04-2017',
        initialInvestment: 20000,
        regularInvestment: 100,
        underlyingFund: 'Vanguard LifeStrategy 60% Equity'
      },{
        belongsTo: users[0],
        planType: 'General Investment Account',
        provider: '7IM',
        startDate: '01-04-2017',
        initialInvestment: 100000,
        regularInvestment: 0,
        underlyingFund: 'HSBC Global Strategy Balanced'
      }]);
  })
  .then(plans => console.log(`${plans.length} plans created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
