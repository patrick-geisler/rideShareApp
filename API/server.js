const express = require('express');
const bp = require('body-parser')

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

app.get('/api/ping', (request, response) => {
    response.json({message: 'hello'})
})

const trips = [
    {id: 123, name: "Mark", numPass: 10, plateNum: "267-JKL", date: "2017-01-01" ,time: 800 ,leavingFrom: "Franklin", currPass:[]  }
    , {id: 451, name: "Patrick", numPass: 4, plateNum: "849-YUI", date: "2017-06-01" ,time: 900 ,leavingFrom: "Franklin", currPass:[]  }
    , {id: 789, name: "Jobben", numPass: 1, plateNum: "LV2RIDE", date: "2017-06-01" ,time: 830 ,leavingFrom: "Downtown", currPass:[]  }
];

app.get('/api/trips', (request, response) => {
    console.log(request.query);
    const filterTrips = trips.filter(trip => {

        let finalResult = true;

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
    console.log(request.body.numPass);
    let numPass = ''
    if (request.body.numPass === ''){
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


app.listen(6500, () => console.log('started'))
