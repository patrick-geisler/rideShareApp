const express = require('express');
const bp = require('body-parser')

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

app.get('/api/ping', (request, response) => {
    response.json({message: 'hello'})
})

const trips = [
    {id: 123, name: "Mark", numPass: 10, plateNum: "267-JKL", date: "1/1/2017" ,time: 800 ,leavingFrom: "Franklin", currPass:[]  }
    , {id: 456, name: "Patrick", numPass: 4, plateNum: "849-YUI", date: "6/10/2017" ,time: 900 ,leavingFrom: "Franklin", currPass:[]  }
    , {id: 789, name: "Jobben", numPass: 1, plateNum: "LV2RIDE", date: "6/10/2017" ,time: 830 ,leavingFrom: "Downtown", currPass:[]  }
];

app.get('/api/trips', (request, response) => {
    // console.log(request.query)
    response.json(trips)
});

app.post('/api/trips', (request, response) => {
    console.log(request.body);
    const newTrip = {
        id: Math.floor(Math.random()*10000)
        , name: request.body.name
        , numPass: request.body.numPass
        , plateNum: request.body.plateNum
        , date: request.body.date
        , time: request.body.time
        , leavingFrom: request.body.leavingFrom
    }
    trips.push(newTrip)
    response.json(newTrip)
})


app.listen(6500, () => console.log('started'))
