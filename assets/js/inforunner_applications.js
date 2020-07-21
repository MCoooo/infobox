'use strict';

const appfs = require('fs');

let appRawData = appfs.readFileSync('inforunner.json');
let appData = JSON.parse(appRawData);


const layerList = document.getElementById('layerList');
console.log("layer list");


for(var attributename in appData){
    console.log(attributename+": "+ appData[attributename]);
    if(attributename == 'LayerList') {
        const layers = appData[attributename];
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
       
        console.log(attributename+": "+appData[attributename]);
    }


}


