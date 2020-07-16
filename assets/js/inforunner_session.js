'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('inforunner.json');
let data = JSON.parse(rawdata);

console.log(data);
const ulist = document.getElementById('ulist') //document.querySelector("ul.user");
const mlist = document.getElementById('mlist');

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
    } 
}
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

