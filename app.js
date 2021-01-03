const express = require('express');
const app = express();
const cors = require('cors');
const random = require('random');

const helper = require('./helper');

app.use(cors());

app.get('/', (req, res) => {
    
    let type = req.query.type || 'normal';

    let resultState = {};

    let diseases = ['diabetes', 'bronchiectasis', 'CHD', 'hypoxemia', 'asthma'];

    let stateTypes = ['abnormal', 'prenormal'];

    let badState = type === 'abnormal' || type === 'prenormal';

    if (badState) {
        let diseaseMapping = {
            diabetes: ['gulcose'],        
            bronchiectasis: ['respiration'],
            CHD: ['bloodPressure', 'heartRate'],
            hypoxemia: ['oxygen'],
            asthma: ['oxygen', 'bloodPressure', 'respiration']
        };

        let diseaseIdx = random.int(0, diseases.length-1);        
        let currentDisease = diseases[diseaseIdx];

        let parameterMapping = {};

        for (let parameter of diseaseMapping[currentDisease]) {
            parameterMapping[parameter] = stateTypes[random.int(0, stateTypes.length-1)];
        }        

        // STEPS
        let steps = random.int(10, 500);

        // BODY TEMPERATURE    
        let bodyTemperature = helper.handleBodyTemperature(parameterMapping['bodyTemperature']||'normal');

        // BLOOD PRESSURE    
        let bloodPressure = helper.handleBloodPressure(parameterMapping['bloodPressure']||'normal');

        // RESPIRATION    
        let respiration = helper.handleRespiration(parameterMapping['respiration']||'normal');

        // GULCOSE
        let gulcose = helper.handleGulcoseLevel(parameterMapping['gulcose']||'normal');

        // HEART RATE
        let heartRate = helper.handleHeartRate(parameterMapping['heartRate']||'normal');

        // OXYGEN    
        let oxygen = helper.handleOxygenLevel(parameterMapping['oxygen']||'normal');       

        resultState = {
            steps,
            bodyTemperature,
            bloodPressure,
            respiration,
            gulcose,
            heartRate,
            oxygen
        };

    } else {        
        
        // STEPS
        let steps = random.int(300, 1500);

        // BODY TEMPERATURE    
        let bodyTemperature = helper.handleBodyTemperature(type);

        // BLOOD PRESSURE    
        let bloodPressure = helper.handleBloodPressure(type);

        // RESPIRATION    
        let respiration = helper.handleRespiration(type);

        // GULCOSE
        let gulcose = helper.handleGulcoseLevel(type);

        // HEART RATE
        let heartRate = helper.handleHeartRate(type);

        // OXYGEN    
        let oxygen = helper.handleOxygenLevel(type);        

        resultState = {
            steps,
            bodyTemperature,
            bloodPressure,
            respiration,
            gulcose,
            heartRate,
            oxygen
        };
    }       
        
    res.json(resultState);
});

app.listen(9000, () => console.log('Wearable API listening on port 9000'));