const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 9090;

http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end("Error loading page");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});