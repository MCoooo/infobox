'use strict';

const welcomefs = require('fs');

let welcomeRawData = welcomefs.readFileSync('inforunner.json');
let welcomeData = JSON.parse(welcomeRawData);

console.log(welcomeData);

const infoLoad = document.getElementById('infoLoad');
if(welcomeData != null){
  infoLoad.innerText = "Data imported";
} else {
  infoLoad.innerText = "No data detect. Select Get Data";
}

//const info = document.querySelector("link[rel=import][href='sections/welcome.html']").querySelector("#InfoLoad").innerHTML = "foo";
//.import.querySelector("#infoLoad")



//const infoLoad = document

/*
console.log(data);
const ulist = document.getElementById('ulist') //document.querySelector("ul.user");
const mlist = document.getElementById('mlist');
const runnerlist = document.getElementById('runnerlist');

for(var attributename in data){
    if(attributename != 'LayerList'){
        const li = document.createElement('li');
        const itemText = document.createTextNode(attributename+": "+data[attributename]);
        li.appendChild(itemText);
        if((attributename=="Username") || (attributename=="LogOnTime")){
            ulist.appendChild(li);
        }
        if((attributename=="Hostname") || (attributename=="IPAddress") || (attributename=="LayerCount")){
            mlist.appendChild(li);
        }
        if((attributename=="RunnerVersion")||(attributename=="TimeStamp")|| (attributename=="Duration")){
            runnerlist.appendChild(li);
        }
    } 
}

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

