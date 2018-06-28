var http = require('http');
var fs = require('fs');
var get_fs = fs.readFileSync('respond.html');
var cloneserver = http.createServer(
    (req,res) => {
        res.writeHead(200, {
            'Content-Type':'text/html'
        });
        res.end(get_fs);
    }
);

cloneserver.listen(3000, ()=>{
    console.log('server aktif @port 3000');
});
