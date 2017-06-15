const express = require('express');
const bp = require('body-parser')

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

app.get('/api/ping', (request, response) => {
    response.json({message: 'hello'})
})

const trips = [
    {id: 123, name: "Mark", numPass: 10, plateNum: "267-JKL", date: "2017-01-01" ,time: 800 ,leavingFrom: "Franklin", currPass:[],   driverUserId: 203408 }
    , {id: 451, name: "Patrick", numPass: 4, plateNum: "849-YUI", date: "2017-06-01" ,time: 900 ,leavingFrom: "Downtown", currPass:[],   driverUserId: 102331823714044 }
    , {id: 789, name: "Jobben", numPass: 1, plateNum: "LV2RIDE", date: "2017-06-01" ,time: 830 ,leavingFrom: "Downtown", currPass:[],   driverUserId: 523960 }
];

app.get('/api/trips', (request, response) => {
    console.log('/api/trips GET query --> ', request.query);
    const filterTrips = trips.filter(trip => {

        if (!request.query.loggedInUser)
            return false;

        const loggedInUser = JSON.parse(request.query.loggedInUser)
        let finalResult = (Number(trip.driverUserId) === Number(loggedInUser.id));
        if (!finalResult) return false;

        if(request.query.leavingFrom) {
            finalResult = (request.query.leavingFrom === trip.leavingFrom)
        }

        if (request.query.earlyBound) {
            const earlyBound = Number(request.query.earlyBound.replace(':', ''));
            // console.log('earlyBound', earlyBound)
            finalResult = (earlyBound <= trip.time)
        }

        if (finalResult && request.query.lateBound) {
            const lateBound = Number(request.query.lateBound.replace(':', ''));
            // console.log('earlyBound', lateBound)
            finalResult = (lateBound >= trip.time)
        }

        if (finalResult && request.query.myDate)
            finalResult = (request.query.myDate === trip.date)

        return (finalResult)
    })

    response.json(filterTrips)
});

app.post('/api/trips', (request, response) => {
    let numPass = request.body.numPass
    if (numPass === ''){
      numPass = 1
    }
    const newTrip = {
        id: Math.floor(Math.random()*10000)
        , name: request.body.name
        , numPass: numPass
        , plateNum: request.body.plateNum
        , date: request.body.date
        , time: request.body.time
        , leavingFrom: request.body.leavingFrom
    }
    trips.push(newTrip)
    response.json(newTrip)
})

app.patch('/api/trips', (request, response) => {
    const changeId = trips.filter((obj) => {
      if(obj.id === request.body.id){
        obj.numPass -= 1
        return obj
      }
    })
    response.json(request.body)
})

// new patch route that takes the :id from the url sent by table row.
// filter by :id and change the num pass and curr pass[]


const users = [
    {"source":"facebook","sourceId":"104123263534901","name":"Matt Matuszak","picURL":"https://scontent.xx.fbcdn.net/v/t1.0-1/c8.0.50.50/p50x50/19059947_103417910272103_3127153063138816926_n.jpg?oh=54a6b3a54becf4ed8177bcc2ace4c7b5&oe=59D13394","acccessToken":"EAACbYWEdb3sBAAJFrW5PEjjqwNxQVA2GsOlGXDQgUOwsiRSn4v5pYrZBj5gqG6gmBr2vJdZC9EGDjIWBo0ykEQIZB5RNQwHbhwefK4mnIFXCg2m5RPSK3EYo3uZCn373i49Skok9mZAsZChmXr7BFZCicVSnDlcO5bkfBapLngeZAs3FOCFZCyKYcJvaEgCsvlyrvkkCf14mTLQZDZD","lastLogin":"2017-06-14T20:57:23.703Z","id":203408},
    {"source":"facebook","sourceId":"10154897138253802","name":"Patrick Geisler","picURL":"https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12308396_10153392969363802_8172349850012411318_n.jpg?oh=9c03ed93348ca848caa871fb27e2ad69&oe=59E7548D","acccessToken":"EAACbYWEdb3sBAKBP7IfhZB0FCPAxRcBmOSozWPXvbUX6Ay6KZCxg7IfXqAG5DzsNlMAGYUkJEKnVCQ1JcOyU4KePZCtALxZCO7YR8HK8kZCYqyK0Sy4IXwJ6ZAQSkGr7pOlV3nMoYEEJ0kmU9gV6fSVQMXLUcfSQJfA3N3ttiFWZBkVso6x87j8FoevfZCZAKkKQZD","lastLogin":"2017-06-14T21:10:59.011Z","id":523960}
];

app.post('/api/users', (request, response) => {
    console.log('/api/users POST', request.body)
    let userFound = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i].source === request.body.source
            && users[i].sourceId === request.body.sourceId) {
            users[i].lastLogin = new Date();
            userFound = true;
            response.json(users[i]);
            break;
        }
    }

    if (!userFound) {
        users.push(Object.assign({}, request.body, {lastLogin: new Date(), id: Math.floor(Math.random()*1000000)}))
        response.json(users[users.length-1]);
    }
})


app.listen(6500, () => console.log('started'))
