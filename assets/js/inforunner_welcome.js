'use strict';

const welcomefs = require('fs');
const { Console } = require('console');

let welcomeRawData = welcomefs.readFileSync('inforunner.json');
let welcomeData = JSON.parse(welcomeRawData);

const infoLoad = document.getElementById('infoLoad');
const pullRunnerDataBtn = document.getElementById('pull-runner-data-btn');

if(welcomeData != null){
    var timeStamp = welcomeData.RunnerData.TimeStamp;
    infoLoad.innerText = "Data generated " + timeStamp;
    pullRunnerDataBtn.textContent = "Refresh data";
} else {
  infoLoad.innerText = "No data detect. Select Get Data";
  pullRunnerDataBtn.textContent = "Get Data";
}
