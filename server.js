const http = require('http')

//file system
const fs = require('fs');

//created a serever
const server = http.createServer((req, res)=>{
    // console.log('request made');
    console.log('request made', req.url, req.method); //this output the request url and request method from the request
    
    //-->Note: without the response the page will keep rolling

    //-->sending response to the browser
    //creating an response header

    //this output only plain text
    // res.setHeader('Content-Type','text/plain');
    // res.write('hello ninjas');
    // res.end();

    //this output html 
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<p>Hello ninjas</p>');
    // res.write('<p>Hello ninjas again</p>');
    // res.end();

    //making use of the file system to return html element
    fs.readFile('./views/index.html', (err,data)=>{
        if(err){
            // console.log(err)
            res.end(err)
        }else{

            // res.write(data);  //note if we are not writing more than one element we can pass the data into then end directly
            res.end(data);
        }
    })
})

//create a listener
server.listen(3002, ()=>{
    console.log('listening for requests on port 3002')
})


