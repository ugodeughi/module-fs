const { log } = require('console');
const fs = require('fs');
const path = require('path');

const pathTesto = path.join(__dirname, '/', 'testo.txt');
const pathTestoInData = path.join(__dirname, 'data', 'testo-in-data.txt');

log('>>>>> ',pathTesto);
log('>>>>> 2 ',pathTestoInData);

// leggo un file
fs.readFile('./testo.txt', (err, data) => {
  if(err){
    log(err)
  }
  console.log(data.toString());
})

// aggiungo testo a un file
fs.appendFile('./testo-vuoto.txt', '', (err) => {
  console.log('fatto');
});

// percorso assoluto della cartella del file
log(__dirname)
// percorso assoluto del file
log(__filename)

