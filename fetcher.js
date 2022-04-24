/* OUTPUT:
> node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html
*/

const request = require('request'); //for requesting server, has built-in TCP and HTTP inetrfaces 
const fs = require('fs'); // to read/write file

const pageFetcher = function() {
  const URL = process.argv[2];
  const FILE_PATH = process.argv[3];
  request(URL, (body) => {
    fs.writeFile(FILE_PATH, JSON.stringify(body), { flag: 'a+' }, ()=>{
      let stats = fs.statSync(FILE_PATH); //for extracting file size
      console.log(`Downloaded and saved ${stats.size} bytes to ${FILE_PATH}`);
    });
  });
};

pageFetcher();

