const {readFileSync} = require('fs');
const {promises: fsPromises} = require('fs');

// Returns a random number between the specified values. The minimum value is inclusive and maximum value is exclusive.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
}

// ✅ Read file Synchronously
function syncReadFile(filename) {
    try {
        const contents = readFileSync(filename, 'utf-8');

        const arr = contents.split(/\r?\n/);

        return arr;
    }
    catch (err) {
        console.log(err);
    }
}
  
// ✅ Read file Asynchronously
async function asyncReadFile(filename) {
    try {
        const contents = await fsPromises.readFile(filename, 'utf-8');

        const arr = contents.split(/\r?\n/);

        return arr;
    }
    catch (err) {
        console.log(err);
    }
}

const syncQuotes = syncReadFile('./Quotes2.txt');
//console.log('Quotes array contains ' + syncQuotes.length +  ' elements.');

// const asyncQuotes = asyncReadFile('./Quotes2.txt');
// console.log('Quotes array contains ' + asyncQuotes.length + ' elements.');
// console.log();

const quoteIndex = getRandomInt(0, syncQuotes.length);
// console.log('Selected index to the quotes array: ' + quoteIndex + '.');

console.log('Our Message of the Day:');
console.log(syncQuotes[quoteIndex]);
