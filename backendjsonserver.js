var http = require('http');
var fs = require('fs');
var get_json = fs.readFileSync('json/json_data.json');
var pageHome = fs.readFileSync('respond.html');
var footerPage = fs.readFileSync('footer.html');
var headerPage = fs.readFileSync('header.html');
var page404 = fs.readFileSync('404page.html')
var cloneserver = http.createServer(
    (req,res) => {

        // res.writeHead(200, {
        //     'Content-Type':'application/json'
        // });
        // res.end(get_json);

        if(req.url === "/home" || req.url === "/"){

            res.writeHead(200, {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            })
            res.end(headerPage,pageHome,footerPage);

        }else{
            
            res.writeHead(404, {
                'Content-Type':'text/html'
            });

            res.end(page404);
        }
    }
);

cloneserver.listen(3210, ()=>{
    console.log('server aktif @port 3210');
});
