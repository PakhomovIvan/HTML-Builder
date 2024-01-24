const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, 'text.txt');
const flow = fs.createReadStream(filePath, 'utf-8');

flow.on('data', (text) => console.log(text.toString()));