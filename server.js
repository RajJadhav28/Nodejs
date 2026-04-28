const http=require('http');
const fs=require('fs');
const _=require('lodash');

const server=http.createServer((req, res)=>{
    // console.log(req.url, req.method);

    //lodash
    const num =_.random(0,17);
    console.log(num)

    const greet=_.once(()=>{
        console.log('hello');
    });
    greet();
    greet();

    //set header content type
    res.setHeader('Content-Type','text/html');

    // res.write('<head><link rel="styleseet" href="#"></head>');
    // res.write('<p>hello,ninjas</p>');
    // res.write('<p>hello again,ninjas</p>');
    // res.end();


    let path='./views/';
    switch(req.url){
        case '/':
            path+='/index.html';
            res.statusCode=200;
            break;
            case '/about':
                path+='about.html';
                res.statusCode=200;
            break;
             case '/about-us':
                path+='about.html';
                res.statusCode=301;
                res.setHeader('Location','/about');
                res.end();
            break;
            default:
                path+='/404.html';
                res.statusCode=404;
                break;
    }
    //send an html file
    // fs.readFile('./views/index.html',(err, data)=>{
        fs.readFile(path,(err, data)=>{
        if(err){
            console.log(err); 
            res.end();
        }else{
            //res.write(data);
            // res.end();
            res.end(data);//we can also write in this manner
        }
    });

});

server.listen(3000, 'localhost',()=>{
    console.log('listening for request on port 3000')
});
