const express = require('express');
const app = express();
const cors = require('cors');
const random = require('random');

app.use(cors());

app.get('/', (req, res) => {
    
    let type = req.query.type || 'normal';
    
    // BODY TEMPERATURE    
    let temperatures = {
        normal: [95, 100],
        abnormal: [100.4, 106],
        prenormal: [10, 80]
    };
    let bodyTemperature = (Math.round(random.float(temperatures[type][0], temperatures[type][1]) * 100) / 100).toFixed(2);

    // BLOOD PRESSURE
    let pressures = {
        normal: [35, 120],
        abnormal: [120, 139],
        prenormal: [140, 190]
    };
    let bloodPressure = random.int(pressures[type][0], pressures[type][1]);

    // RESPIRATION
    let breaths = {
        normal: [8, 16],
        abnormal: [26, 35],
        prenormal: [1, 11]
    };
    let respiration = random.int(breaths[type][0], breaths[type][1]);

    // GULCOSE
    let levels = {
        normal: [20, 140],
        abnormal: [142, 210],
        prenormal: [140, 199]
    };
    let gulcose = random.int(levels[type][0], levels[type][1]);

    // HEART RATE
    let rates = {
        normal: [80, 140],
        abnormal: [142, 220],
        prenormal: [10, 79]
    };
    let heartRate = random.int(rates[type][0], rates[type][1]);

    // OXYGEN
    let oLevels = {
        normal: [95, 100],
        abnormal: [82, 92],
        prenormal: [20, 95]
    };
    let oxygen = random.int(oLevels[type][0], oLevels[type][1]);

    let mockData = {
        bodyTemperature,
        bloodPressure,
        respiration,
        gulcose,
        heartRate,
        oxygen       
    }

    res.json(mockData);
});

app.listen(9000, () => console.log('Wearable API listening on port 9000'));