'use strict';

//const fs = require('fs');

//let rawdata = fs.readFileSync('inforunner.json');
//let data = JSON.parse(rawdata);


const layerList = document.getElementById('layerList');
console.log("layer list");


for(var attributename in data){
    console.log(attributename+": "+data[attributename]);
    if(attributename == 'LayerList') {
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

          })
       
        console.log(attributename+": "+data[attributename]);
    }


}


