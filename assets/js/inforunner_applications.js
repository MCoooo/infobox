'use strict';

const appfs = require('fs');

let appRawData = appfs.readFileSync('inforunner.json');
let appData = JSON.parse(appRawData);
let layerData = appData["LayerData"]

const layerList = document.getElementById('layerList');

for(var attributename in layerData){
    if(attributename == 'LayerCount'){
        const ul = document.createElement('ul');
        ul.innerHTML = "Layer Count: " + layerData[attributename];git
        layerList.appendChild(ul);
    }
    if(attributename == 'LayerList') {
        const layers = layerData[attributename];
        layers.forEach(async function(layer) {
            const packages = layer.Packages;
            
            const ul = document.createElement('ul');
            ul.innerHTML = layer.Name;
        
            packages.forEach(element => {
                const li = document.createElement('li');
                const itemText = document.createTextNode(element);
                li.appendChild(itemText);
                ul.appendChild(li);
            });
            layerList.appendChild(ul);

          })
       
    }


}


