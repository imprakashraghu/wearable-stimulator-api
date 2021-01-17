
const random = require('random');

const handleBodyTemperature = (type) => {
    let temperatures = {
        normal: [95, 100],
        abnormal: [100.4, 106],
        prenormal: [10, 80]
    };
    return (Math.round(random.float(temperatures[type][0], temperatures[type][1]) * 100) / 100).toFixed(2);
}

const handleBloodPressure = (type) => {
    let pressures = {
        normal: [90, 120],
        abnormal: [120, 139],
        prenormal: [140, 190]
    };
    return random.int(pressures[type][0], pressures[type][1]);
}

const handleRespiration = (type) => {
    let breaths = {
        normal: [8, 16],
        abnormal: [26, 35],
        prenormal: [1, 11]
    };
    return random.int(breaths[type][0], breaths[type][1]);
}

const handleGulcoseLevel = (type) => {
    let levels = {
        normal: [20, 140],
        abnormal: [142, 210],
        prenormal: [140, 199]
    };
    return random.int(levels[type][0], levels[type][1]);
}

const handleHeartRate = (type) => {
    let rates = {
        normal: [80, 140],
        abnormal: [142, 220],
        prenormal: [10, 79]
    };
    return random.int(rates[type][0], rates[type][1]);   
}

const handleOxygenLevel = (type) => {
    let oLevels = {
        normal: [95, 100],
        abnormal: [82, 92],
        prenormal: [20, 95]
    };
    return random.int(oLevels[type][0], oLevels[type][1]);
}

module.exports = {
    handleBodyTemperature,
    handleBloodPressure,
    handleRespiration,
    handleGulcoseLevel,
    handleHeartRate,
    handleOxygenLevel
}