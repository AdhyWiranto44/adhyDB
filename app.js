// const http = require("http");
const fs = require("fs");

// Membuat Database baru
module.exports.makeDatabase = (dbName) => {
  fs.writeFile(`./databases/${dbName}.json`, "{}", () => {
    console.log(`Database ${dbName} is created!`);
  });
};

// Menambahkan Collection baru pada Database
module.exports.makeCollection = (dbName, collectionName) => {
    fs.readFile(`./databases/${dbName}.json`, 'utf-8', (err, data) => {
        if (err) throw err;

        data = JSON.parse(data);
        data[collectionName] = [];
        data = JSON.stringify(data);
        
        fs.writeFile(`./databases/${dbName}.json`, data, () => {
            console.log(`Collection ${collectionName} is added to db ${dbName}!`);
            console.log(data);
        })
    });
}

// Drop Database
module.exports.dropDatabase = (dbName) => {
  let path = `./databases/${dbName}.json`;

  fs.unlink(path, (err) => {
    if (err) throw err;

    console.log(dbName, 'successfully dropped!');
  })
}

// Drop Collection
module.exports.dropCollection = (dbName, collectionName) => {
  fs.readFile(`./databases/${dbName}.json`, 'utf-8', (err, data) => {
    if (err) throw err;

    data = JSON.parse(data);
    delete data[collectionName];
    data = JSON.stringify(data);

    fs.writeFile(`./databases/${dbName}.json`, data, () => {
      console.log(`Collection ${collectionName} is dropped from db ${dbName}!`);
      console.log(data);
    })
  });
}

// let handleRequest = (req, res) => {
//     res.writeHead(200, {
//         "Content-Type": "text/html"
//     });

//     fs.readFile('./documentation.html', null, (error, data) => {
//         if (error) {
//             return res.writeHead(404);
//         }

//         res.write(data);
//         res.end();
//     })
// }

// http.createServer(handleRequest).listen(3000);