'use strict';

const sessionfs = require('fs');

let sessionRawData = sessionfs.readFileSync('inforunner.json');
let sessionData = JSON.parse(sessionRawData);

const ulist = document.getElementById('ulist') //document.querySelector("ul.user");
const mlist = document.getElementById('mlist');
const runnerlist = document.getElementById('runnerlist');


//This function will recurse through array of arrays.
//If the level is an object is will recurse targetting
//The properties under it. The obj name is the json node
//Being looked for so is used on first run only
function feedList (obj, list,objName="null"){
    if (objName == "null"){
        for(var key in obj){
            if(obj[key] instanceof Object){
                feedList(obj[key],list);
            } else {
                const li = document.createElement('li');
                const itemText = document.createTextNode(key+": " + obj[key]);
                li.appendChild(itemText);
                list.appendChild(li);
            }
        }
    } else {
        for(var key in obj){
            if(key == objName){
                if(obj[key] instanceof Object){
                    feedList(obj[key],list);
                } else {
                    const li = document.createElement('li');
                    const itemText = document.createTextNode(key+": " + obj[key]);
                    li.appendChild(itemText);
                    list.appendChild(li);
                }
            }
        }
    }
}

feedList(sessionData, ulist,"UserData");
feedList(sessionData, mlist,"MachineData");
feedList(sessionData, runnerlist,"RunnerData");
 
