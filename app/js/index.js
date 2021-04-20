const {Rcon} = require('rcon-client');
const fs = require('fs');
const textarea = document.getElementById('consola');
const btnConsola = document.getElementById('btnConsola');
const tbxConsola = document.getElementById('tbxConsola');

const rawdata = fs.readFileSync('config.json');
const connection = JSON.parse(rawdata);

var textareastatus = 0;

btnConsola.addEventListener('click', async ()=>{
    const rcon = await Rcon.connect({
        host: connection.host,
        port: connection.port,
        password: connection.password
    });
    var command = await rcon.send(tbxConsola.value);
    textarea.value += command + "\n";
    tbxConsola.value = "";
    rcon.end();
});

setInterval(()=>{
    if(textareastatus != textarea.value.length)
    {
        textarea.scrollTop = textarea.scrollHeight;
        textareastatus = textarea.value.length;
    }
}, 100);