# WDI Project 4: MERN Stack


## Intro

At the time of starting this project, Bitcoin's price was reaching all time highs.  The idea for the application was to allow users to compete against friends at predicting what the price would be over set periods of time.

## Technologies Used

* Node.js
* Express
* MongoDB & mongoose
* React
* SCSS
* Bulma
* Webpack
* Coindesk API
* node-cron
* MomentJS
* react-moment-countdown

##  Challenges

### React

Getting to grips with React was initially quite challenging, in particular concepts such as props, managing state and conditional rendering of components.

### Cron

At the creating of each 'frame' a cron job is scheduled to make a call to the Coindesk API to retrieve the Bitcoin price at the time the frame ends.  This is nothing something that fell within the scope of the course which meant that the onus was on me to find the necessary resources online in order to gain an understanding of how this would work.  

## The App

#### Login

Users are initially presented with a login screen where they can either sign in or regiester if they do not already have an account.

![login](https://github.com/gjhughes/WDI_PROJECT_4/blob/master/src/assets/ab-login.png)

#### Groups

Once the user has navigated to to a group's page, they will be presented with a leaderboard for that group as well the ability to create a new frame within the group.

If a frame has been created but has not yet started, users will be given the option to make their predictions for that particular frame.  

Each group's page also has a list of historic frames.

![group](https://github.com/gjhughes/WDI_PROJECT_4/blob/master/src/assets/ab-group.png)

### Frames

Once a frame has been created, users are able to provide a prediction of what they think the Bitcoin price will be at that frame's end time.  The most recent Bitcoin price is retrieved from the Coindesk API on each group page.

Once the frame is in progress, users can click through to show a timer of how long is remaining for that frame.  

Points are given to each user based on who makes the closest prediction for each frame and then updated on the group.

![frame](https://github.com/gjhughes/WDI_PROJECT_4/blob/master/src/assets/ab-frame.png)

## Some Code

Below is the cron job that handles retrieving the end price each frame:

```javascript

function createCron(endTime, groupId, momentId) {
  return new CronJob(new Date(endTime), function() {
    console.log('End Price Cron Fired');
    return rp({
      uri: 'https://api.coindesk.com/v1/bpi/currentprice.json',
      json: true
    })
      .then(response => {

        const bpi = response[Object.keys(response)[3]];
        const gbp = bpi[Object.keys(bpi)[1]];
        const currentPrice = gbp[Object.keys(gbp)[4]];

        return Group
          .findById(groupId)
          .exec()
          .then(group => {
            const moment = group.moments.id(momentId);

            moment.endPrice = currentPrice;

            moment.bets.sort((a, b) => Math.abs(currentPrice - b.prediction) - Math.abs(currentPrice - a.prediction))
              .forEach((bet, i) => {
                const user = group.members.find(member => member.user.equals(bet.user));
                user.points += i * 5;
              });

            return group.save();
          });
      });
  },
  false,
  'Europe/London');
}

```

## Still to do

I really enjoyed this project and am excited to develop this further to include:

* Improved responsiveness;
* Live populating graph showing the price whilst a frame is in progress;
* Improved group and scoring structure.
