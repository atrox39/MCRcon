const remote = require('electron').remote;
const win = remote.getCurrentWindow();
const btnClose = document.querySelector('#btnClose');
btnClose.addEventListener('click', ()=>{
    win.close();
});