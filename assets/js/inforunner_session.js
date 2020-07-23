'use strict';

const sessionfs = require('fs');

let sessionRawData = sessionfs.readFileSync('inforunner.json');
let sessionData = JSON.parse(sessionRawData);

console.log(sessionData);
const ulist = document.getElementById('ulist') //document.querySelector("ul.user");
const mlist = document.getElementById('mlist');
const runnerlist = document.getElementById('runnerlist');

function feedList (obj, objName, list){
for(var key in obj){
    if(key == objName){
        if(obj[key] instanceof Object){
            feedList(obj[key], objName);
        } else {
            console.log("found " +key + " : " + obj[key]);
            const li = document.createElement('li');
            const itemText = document.createTextNode(key+": " + obj[key]);
            li.appendChild(itemText);
            list.appendChild(li);
        }
    }
}
}

feedList(sessionData, "UserData", ulist);
    /*
        if((attributename=="Hostname") || (attributename=="IPAddress") || (attributename=="LayerCount")){
            mlist.appendChild(li);
        }
        if((attributename=="RunnerVersion")||(attributename=="TimeStamp")|| (attributename=="Duration")){
            runnerlist.appendChild(li);
        }
    } 
    */

/*
const layerList = document.getElementById('layerList');

console.log(ulist);


for(var attributename in data){
    if(attributename != 'LayerList'){
        const li = document.createElement('li');
        const itemText = document.createTextNode(attributename+": "+data[attributename]);
        li.appendChild(itemText);
        if((attributename=="Username") || (attributename=="LogOnTime")){
            ulist.appendChild(li);
        } else {
            mlist.appendChild(li);
        }
    } else {
        const layers = data[attributename];
        layers.forEach(async function(layer) {
            const packages = layer.Packages;
            
            const ul = document.createElement('ul');
            ul.innerText = layer.Name;
            packages.forEach(element => {
                const li = document.createElement('li');
                const itemText = document.createTextNode(element);
                li.appendChild(itemText);
                ul.appendChild(li);
            });
            layerList.appendChild(ul);

            //const itemText = document.createTextNode(layer.Name);
            
            //layerList.appendChild(li);
          })
       
        console.log(attributename+": "+data[attributename]);
    }


}
*/

