const fs = require('fs');

var config = JSON.parse(fs.readFileSync('config.json'));

const tbxHost = document.getElementById("tbxHost");
const tbxPort = document.getElementById("tbxPort");
const tbxPass = document.getElementById("tbxPass");

const btnSave = document.getElementById("btnSave");

// preconfig
tbxHost.value = config.host;
tbxPort.value = config.port;
tbxPass.value = config.password;
// Config by user
btnSave.addEventListener('click', ()=>{
    let user = {
        host: tbxHost.value,
        port: parseInt(tbxPort.value),
        password: tbxPass.value
    };
    fs.writeFileSync('config.json', JSON.stringify(user), {flag:'w'});
});