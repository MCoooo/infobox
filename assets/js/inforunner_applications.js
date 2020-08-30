'use strict';

const appfs = require('fs');

let appRawData = appfs.readFileSync('inforunner.json');
let appData = JSON.parse(appRawData);


const layerList = document.getElementById('layerList');
console.log("layer list", layerList);

//This function will recurse through array of arrays.
//If the level is an object is will recurse targetting
//The properties under it. The obj name is the json node
//Being looked for so is used on first run only
function feedList (obj, list,objName="null"){
    if (objName == "null"){
        for(var key in obj){
            if(obj[key] instanceof Object){
                console.log("obj key is ", key);
                feedList(obj[key],list);
            } else {
                console.log("not obj key is ", key);
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
                    console.log("obj key is ", key);
                    feedList(obj[key],list);
                } else {
                    const li = document.createElement('li');
                    console.log("not obj key is ", key);
                    if (parseInt(key)){
                        const itemText = document.createTextNode(obj[key]);
                    } else {
                        const itemText = document.createTextNode(key+": " + obj[key]);
                    }
                    li.appendChild(itemText);
                    list.appendChild(li);
                }
            }
        }
    }
}

feedList(appData, layerList,"LayerData");

/*
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
*/

